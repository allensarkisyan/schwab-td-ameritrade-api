/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import type {
  APIClientConfig,
  APIRequestConfig,
  APIResponse,
  AuthenticationResponse,
  RefreshTokenResponse,
  TickerSymbol,
  CUSIP,
  TDAmeritradeAccountID,
  TDAmeritradeOrderLeg,
  LocalMemoryAuthDataStore,
  QuoteData,
  FundamentalData,
  PriceHistory,
  InstrumentData,
  OptionChainData,
  OptionContractRange,
  OptionContractType,
  Watchlists,
  Watchlist,
  TDAmeritradeAccounts,
  TDAmeritradeAccount,
  UserPrincipalsData,
  TransactionData,
  DateLikeNullable,
  GetTransactionsType,
  MarketMovers,
  TrendingEquity,
  OrderRequest,
  OrderData,
} from './@types/index.js';

import {
  OrderRequestSchema,
  PlaceOrderSchema,
} from './schemas/index.js';

import {
  jsonToQueryString,
  getDistinctArray,
  getRequestUrl,
  getFetchOptions,
  getAccessTokenExpirationDetails,
} from './utils.js';

const dataStore: LocalMemoryAuthDataStore = {
  userAccessToken: '',
  accessTokenExpires: null,
  refreshToken: '',
  refreshTokenExpires: null,
};

const LIMIT_ORDER_TEMPLATE = {
  orderType: 'LIMIT',
  session: 'NORMAL',
  duration: 'GOOD_TILL_CANCEL',
  orderStrategyType: 'SINGLE'
};

const ERRORS = {
  UNKNOWN_ERROR: 'AN UNKNOWN ERROR HAS OCCURRED.',
  ACCESS_TOKEN: 'ACCESS TOKEN NOT AVAILABLE',
  INVALID_ORDER_REQUEST: 'INVALID ORDER REQUEST',
};

let refreshTokenInterval: NodeJS.Timeout | null = null;

/**
 * Represents the TDAmeritradeAPI class for handling requests.
 * @module TDAmeritradeAPI
 * @class
 */
export class TDAmeritradeAPI {
  /** 
   * TD Ameritrade Application Client ID
   * @private
   * @type {string}
  */
  #clientId: string | undefined;

  /** 
   * TD Ameritrade Application Client Callback URL
   * @private
   * @type {string}
  */
  #callbackUrl: string | undefined;
  
  /** 
   * TD Ameritrade API Access Token
   * @private
   * @type {string | null}
  */
  #userAccessToken?: string | null;

  /** 
   * is Refreshing Access Token
   * @private
   * @type {boolean | null}
  */
  #isRefreshingAccessToken?: boolean | null;

  /**
   * External request handler function.
   * @private
   * @type {function | null}
   */
  #externalRequestHandler?: Function | null;

  /**
   * Creates an instance of TDAmeritradeAPI.
   * @param {Object} [config] - API Client Configuration
   * @param {string} [config.clientId] - TD Amertitrade Client ID - defaults to TD_AMERITRADE_CLIENT_ID environment variable.
   * @param {string} [config.callbackUrl] - Callback URL - defaults to TD_AMERITRADE_CALLBACK_URL environment variable.
   * @param {function | null} [config.handleRequest=null] - An optional request handler function.
   */
  constructor(config?: APIClientConfig) {
    this.#clientId = config?.clientId ?? process?.env?.TD_AMERITRADE_CLIENT_ID;

    this.#callbackUrl = config?.callbackUrl ?? process?.env?.TD_AMERITRADE_CALLBACK_URL;
    
    if (!this.#clientId) {
      throw new Error('Missing TD Ameritrade API Client ID.');
    }

    if (!this.#callbackUrl) {
      throw new Error('Missing TD Ameritrade API Client Callback URL.');
    }

    if (config?.handleRequest) {
      this.#externalRequestHandler = config.handleRequest;
    }
  }

  /**
   * Internal Request Handler
   * @private
   * @template T - The type of the data in the API Response
   * @param {APIRequestConfig} config - API Request Configuration
   * @param {boolean} isAuthorizationRequired - Use Authorization Header / Access Token
   * @returns {Promise<APIResponse<T>>}
   */
  #handleRequest = async <T>(config: APIRequestConfig, isAuthorizationRequired: boolean = true): Promise<APIResponse<T>> => {
    let data = null;
    let error = null;

    if (this.#externalRequestHandler) {
      return await this.#externalRequestHandler(config);
    }

    try {
      const url = getRequestUrl(config);
      const fetchOptions = getFetchOptions(config);

      if (isAuthorizationRequired && this.#userAccessToken) {
        await this.accessTokenExpirationMonitor()();
        fetchOptions.headers['Authorization'] = `Bearer ${this.#userAccessToken}`;
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        throw new Error(`TDAmeritradeAPI#handleRequest Failed with Status Code: ${response.status}`);
      }

      data = await response.json();
    } catch (e: any) {
      error = e?.message || ERRORS.UNKNOWN_ERROR;
    }

    return { error, data };
  }

  /**
   * Internal Access Token Expiration Monitor / refresh token timer
   * @param {Function} cb - Callback function to call on every check
   * @returns {Function}
   */
  accessTokenExpirationMonitor = (cb: Function = () => {}) => async () => {
    if (this.#isRefreshingAccessToken) { return; }
  
    try {
      if (
        !dataStore.userAccessToken
        || !dataStore.accessTokenExpires
        || !dataStore.refreshToken
        || !dataStore.refreshTokenExpires
      ) {
        return;
      }

      const {
        now,
        isAccessTokenExpired,
        isRefreshTokenExpired
      } = getAccessTokenExpirationDetails(dataStore);

      if (isRefreshTokenExpired) {
        // TODO: FORCE LOG OUT
        console.log('REFRESH TOKEN EXPIRED FORCE LOG OUT');
        return;
      }

      if (isAccessTokenExpired && !this.#isRefreshingAccessToken) {        
        const { data: authResponse } = await this.refreshAccessToken(dataStore.refreshToken);
  
        if (!authResponse?.access_token) {
          return;
        }

        dataStore.accessTokenExpires = new Date(now + (authResponse?.expires_in * 1000)).toJSON();
      }

      if (cb) {
        cb(dataStore);
      }
    } catch (e: any) {
      console.log(e?.message || ERRORS.UNKNOWN_ERROR);
    }
  }

  /**
   * Access Token Expiration Monitor / refresh token timer
   * @param {Function} cb - Callback function to call on every check
   */
  startAccessTokenExpirationMonitor = (cb?: Function) => {
    if (
      refreshTokenInterval
      || !dataStore.userAccessToken
      || !dataStore.accessTokenExpires
      || !dataStore.refreshToken
      || !dataStore.refreshTokenExpires
    ) {
      return;
    }

    refreshTokenInterval = setInterval(
      () => this.accessTokenExpirationMonitor(cb)(),
      60_000
    );
  }

  /**
   * Set User Access Token / Refresh Token
   * @param {LocalMemoryAuthDataStore} credentials - Credentials Data Store
   * @param {string} [credentials.userAccessToken] - Access Token
   * @param {DateLikeNullable} [credentials.accessTokenExpires] - Is New Access Token
   * @param {string} [credentials.refreshToken] - Refresh Token
   * @param {DateLikeNullable} [credentials.refreshTokenExpiresIn] - Refresh Token Expires in
   * @returns {void}
   */
  setUserAccessToken = (
    credentials: LocalMemoryAuthDataStore
  ): void => {
    if (credentials?.userAccessToken) {
      const now = Date.now();

      this.#userAccessToken = credentials.userAccessToken;

      dataStore.userAccessToken = credentials.userAccessToken;

      if (credentials?.accessTokenExpires) {
        dataStore.accessTokenExpires = typeof credentials.accessTokenExpires === 'number'
          ? new Date(now + (credentials.accessTokenExpires * 1000)).toJSON()
          : credentials.accessTokenExpires;
      } else {
        dataStore.accessTokenExpires = new Date(now + (1800 * 1000)).toJSON();
      }

      if (credentials.refreshToken && credentials.refreshTokenExpires) {
        dataStore.refreshToken = credentials.refreshToken;

        dataStore.refreshTokenExpires = typeof credentials.refreshTokenExpires === 'number'
          ? new Date(now + (credentials.refreshTokenExpires * 1000)).toJSON()
          : new Date(credentials.refreshTokenExpires).toJSON();
      }
    } else {
      this.#userAccessToken = null;

      dataStore.userAccessToken = undefined;
      dataStore.refreshToken = undefined;
      dataStore.accessTokenExpires = undefined;
      dataStore.refreshTokenExpires = undefined;
    }
  }

  /**
   * Authenticate with the TD Ameritrade OAuth2 Authorization endpoint
   * @param {string} code - Authorization Resonse Code from TD Ameritrade Authentication API
   * @returns {Promise<APIResponse<AuthenticationResponse | null>>}
   */
  authenticate = async (code: string): Promise<APIResponse<AuthenticationResponse | null>> => {
    let data: AuthenticationResponse | null = null;
    let error: any = null;

    try {
      const { error, data: authResponseData } = await this.#handleRequest<AuthenticationResponse>({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          code,
          client_id: this.#clientId,
          redirect_uri: this.#callbackUrl,
          grant_type: 'authorization_code',
          access_type: 'offline',
        })
      }, false);

      if (error) {
        throw new Error(error);
      }

      if (!authResponseData?.access_token) {
        throw new Error(ERRORS.ACCESS_TOKEN);
      }

      this.setUserAccessToken({
        userAccessToken: authResponseData.access_token,
        accessTokenExpires: authResponseData.expires_in,
        refreshToken: authResponseData.refresh_token,
        refreshTokenExpires: authResponseData.refresh_token_expires_in,
      });

      data = authResponseData;
    } catch (e: any) {
      console.log('TDAmeritradeAPI authenticate Error', e?.message || ERRORS.UNKNOWN_ERROR);
      error = e?.message || ERRORS.UNKNOWN_ERROR;
    }

    return { error, data };
  };

  /**
   * Refresh Access Token with Refresh Token
   * @param {string} refresh_token - Refresh Token
   * @returns {Promise<APIResponse<RefreshTokenResponse | null>>}
   */
  refreshAccessToken = async (refresh_token: string): Promise<APIResponse<RefreshTokenResponse | null>> => {
    let data: RefreshTokenResponse | null = null;
    let error: any = null;

    try {
      this.#isRefreshingAccessToken = true;

      const { error, data: refreshTokenData } = await this.#handleRequest<RefreshTokenResponse>({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          refresh_token,
          grant_type: 'refresh_token',
          client_id: this.#clientId,
        })
      }, false);

      if (error) {
        throw new Error(error);
      }

      if (!refreshTokenData?.access_token) {
        throw new Error(ERRORS.ACCESS_TOKEN);
      }

      this.setUserAccessToken({
        userAccessToken: refreshTokenData?.access_token,
        accessTokenExpires: refreshTokenData?.expires_in,
      });

      data = refreshTokenData;
    } catch (e: any) {
      console.log('TDAmeritradeAPI refreshAccessToken Error', e?.message || ERRORS.UNKNOWN_ERROR);
      error = e?.message || ERRORS.UNKNOWN_ERROR;
    } finally {
      this.#isRefreshingAccessToken = false;
    }

    return { error, data };
  };

  /**
   * Get Accounts
   * @returns {Promise<APIResponse<TDAmeritradeAccounts>>}
   */
  getAccounts = async (): Promise<APIResponse<TDAmeritradeAccounts>> => await this.#handleRequest({
    url: '/v1/accounts',
    params: { fields: 'positions,orders' }
  });

  /**
   * Get Account
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<TDAmeritradeAccount>>}
   */
  getAccount = async (
    accountId: TDAmeritradeAccountID
  ): Promise<APIResponse<TDAmeritradeAccount>> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}`,
    params: { fields: 'positions,orders' }
  });

  /**
   * Get User Principals Data - for use with `schwab-td-ameritrade-streamer`
   * @returns {Promise<APIResponse<UserPrincipalsData>>}
   */
  getUserPrincipals = async (): Promise<APIResponse<UserPrincipalsData>> => await this.#handleRequest({
    url: '/v1/userprincipals',
    params: { fields: 'streamerSubscriptionKeys,streamerConnectionInfo,preferences,surrogateIds' }
  });

  /**
   * Get Transactions
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {GetTransactionsType} transactionsType - Transactions Type - Default 'TRADE'
   * @param {DateLikeNullable} startDate - Start Date
   * @param {DateLikeNullable} endDate - End Date
   * @returns {Promise<APIResponse<TransactionData[]>>}
   */
  getTransactions = async (
    accountId: TDAmeritradeAccountID,
    transactionsType: GetTransactionsType = 'TRADE',
    startDate: DateLikeNullable = null,
    endDate: DateLikeNullable = null
  ): Promise<APIResponse<TransactionData[]>> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/transactions`,
    params: {
      type: transactionsType,
      startDate,
      endDate
    }
  });

  /**
   * Get Order's for Account ID
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<OrderData[]>>}
   */
  getOrders = async (accountId: TDAmeritradeAccountID): Promise<APIResponse<OrderData[]>> => await this.#handleRequest({
    url: '/v1/orders',
    params: { accountId }
  });

  /**
   * Get Quote Data for Ticker Symbol(s)
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<APIResponse<Object.<string, QuoteData>>>}
   */
  getQuotes = async (symbol: TickerSymbol): Promise<APIResponse<{ [symbol: string]: QuoteData }>> => await this.#handleRequest({
    url: '/v1/marketdata/quotes',
    params: { symbol }
  });

  /**
   * Get Instrument Data for CUSIP
   * @param {CUSIP} cusip - CUSIP
   * @returns {Promise<APIResponse<InstrumentData[]>>}
   */
  getInstrument = async (cusip: CUSIP): Promise<APIResponse<InstrumentData[]>> => await this.#handleRequest({
    url: `/v1/instruments/${cusip}`
  });

  /**
   * Get Fundamental Data for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<APIResponse<Object.<string, FundamentalData>>>}
   */
  getFundamentals = async (symbol: TickerSymbol): Promise<APIResponse<{ [symbol: string]: FundamentalData }>> => await this.#handleRequest({
    url: '/v1/instruments',
    params: { symbol, projection: 'fundamental' }
  });

  /**
   * Get Market Directional Mover (e.g. '$SPX.X', 'up', 'percent')
   * @param {'$SPX.X' | '$DJI' | '$COMPX'} market - Market
   * @param {'up' | 'down'} direction - Direction
   * @param {'percent' | 'value'} change - Change Type
   * @returns {Promise<APIResponse<TrendingEquity[]>>}
   */
  getMarketDirectionalMover = async (
    market: string,
    direction: string,
    change: string = 'percent'
  ): Promise<APIResponse<TrendingEquity[]>> => await this.#handleRequest({
    url: `/v1/marketdata/${market}/movers`,
    params: { direction, change }
  });

  /**
   * Get Intraday Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {number} days - Number of Days
   * @param {number} minutes - Minutes
   * @param {boolean} extHours - Extended Hours Data
   * @param {Date|number} endDate - End Date
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getPriceHistory = async (
    symbol: TickerSymbol,
    days: number = 5,
    minutes: number = 5,
    extHours: boolean = true,
    endDate: Date|number = (new Date()).getTime()
  ): Promise<APIResponse<PriceHistory>> => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'day',
      period: days,
      frequencyType: 'minute',
      frequency: minutes,
      needExtendedHoursData: extHours,
      endDate
    }
  });

  /**
   * Get Daily Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {number} years - Number of Years
   * @param {number} days - Number of Days
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getDailyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 10,
    days: number = 1,
  ): Promise<APIResponse<PriceHistory>> => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'year',
      period: years,
      frequencyType: 'daily',
      frequency: days,
      needExtendedHoursData: false
    }
  });

  /**
   * Get Weekly Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {number} years - Number of Years
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getWeeklyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 20
  ): Promise<APIResponse<PriceHistory>> => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'year',
      period: years,
      frequencyType: 'weekly',
      frequency: 1,
      needExtendedHoursData: false
    }
  });

  /**
   * Get Periodic Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {DateLikeNullable} startDate - Start Date
   * @param {DateLikeNullable} endDate - End Date
   * @param {boolean} extHours - Extended Hours Data
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getPeriodicPriceHistory = async (
    symbol: TickerSymbol,
    startDate: DateLikeNullable,
    endDate: DateLikeNullable = (new Date()).getTime(),
    extHours: boolean = true,
  ): Promise<APIResponse<PriceHistory>> => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'day',
      frequencyType: 'minute',
      frequency: 1,
      needExtendedHoursData: extHours,
      startDate,
      endDate
    }
  });

  /**
   * Get Market Movers - Current Trending Equities of $SPX.X, $COMPX, $DJI
   * @returns {Promise<APIResponse<MarketMovers>>}
   */
  getMarketMovers = async (): Promise<APIResponse<MarketMovers>> => {
    try {
      const MARKETS = [
        '$SPX.X',
        '$COMPX',
        '$DJI'
      ];

      const marketMovers = await Promise.all(MARKETS.map(async i => {
        const { data: up } = await this.getMarketDirectionalMover(i, 'up');
        const { data: down } = await this.getMarketDirectionalMover(i, 'down');
        return { [i]: { up, down } };
      }));

      const flat = marketMovers.reduce((a, b) => ({ ...a, ...b }), {});
      const upFlat = [...Object.keys(flat).map(k => (flat[k].up ?? []))]
        .flat()
        .sort((a, b) => a.change > b.change ? -1 : 1);
      const downFlat = [...Object.keys(flat).map(k => (flat[k].down ?? []))]
        .flat()
        .sort((a, b) => a.change > b.change ? 1 : -1);

      const up = getDistinctArray(upFlat, 'symbol');
      const down = getDistinctArray(downFlat, 'symbol');

      return {
        error: null,
        data: { up, down } as MarketMovers
      };
    } catch (e: any) {
      return {
        error: e?.message || ERRORS.UNKNOWN_ERROR,
        data: null,
      };
    }
  };

  /**
   * Get Option Chain
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {OptionContractRange} range - Option Contract Range - (ITM, OTM, NTM, etc..)
   * @param {OptionContractType} optionType - Option Contract Type - (Standard, Non Standard, All)
   * @returns {Promise<APIResponse<OptionChainData>>}
   */
  getOptionChain = async (
    symbol: TickerSymbol,
    range: OptionContractRange = 'ALL',
    optionType: OptionContractType = 'S',
  ): Promise<APIResponse<OptionChainData>> => await this.#handleRequest({
    url: '/v1/marketdata/chains',
    params: {
      symbol,
      includeQuotes: 'TRUE',
      strategy: 'SINGLE',
      contractType: 'ALL',
      range,
      optionType
    }
  });

  /**
   * Get Watchlists
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<Watchlists>>}
   */
  getWatchlists = async (
    accountId: TDAmeritradeAccountID
  ): Promise<APIResponse<Watchlists>> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists`
  });

  /**
   * Get Watchlist by ID
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<Watchlist>>}
   */
  getWatchlist = async (
    accountId: TDAmeritradeAccountID,
    watchlistId: string,
  ): Promise<APIResponse<Watchlist>> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists/${watchlistId}`
  });

  // TRADING
  /**
   * Place an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {number} price - Price
   * @param {TDAmeritradeOrderLeg[]} orderLegCollection - Order Leg Collection
   * @returns {Promise<APIResponse<any>>}
   */
  placeOrder = async (
    accountId: TDAmeritradeAccountID,
    price: number,
    orderLegCollection: TDAmeritradeOrderLeg[]
  ): Promise<APIResponse<any>> => {
    try {
      const { success } = PlaceOrderSchema.safeParse({
        accountId,
        price,
        orderLegCollection
      });

      if (!success) {
        throw new Error(ERRORS.INVALID_ORDER_REQUEST);
      }

      return await this.#handleRequest({
        method: 'POST',
        url: `/v1/accounts/${accountId}/orders`,
        data: {
          ...LIMIT_ORDER_TEMPLATE,
          price,
          orderLegCollection
        }
      });
    } catch (e: any) {
      return {
        error: e?.message || ERRORS.UNKNOWN_ERROR,
        data: null,
      };
    }
  }

  /**
   * Cancel an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {string} orderId - Order ID
   * @returns {Promise<APIResponse<any>>}
   */
  cancelOrder = async (
    accountId: TDAmeritradeAccountID,
    orderId: string
  ): Promise<APIResponse<any>> => await this.#handleRequest({
    method: 'DELETE',
    url: `/v1/accounts/${accountId}/orders/${orderId}`
  });

  /**
   * Opening Order
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @param {boolean} isOption - Is Option Order 
   * @param {boolean} isShort - Is Short Position 
   * @returns {Promise<APIResponse<any>>}
   */
  openOrder = async (
    orderRequest: OrderRequest,
    isOption: boolean = false,
    isShort: boolean = false
  ) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);

    if (!success) {
      return {
        error: ERRORS.INVALID_ORDER_REQUEST,
        data: null,
      };
    }

    const {
      accountId,
      symbol,
      quantity,
      price,
    } = orderRequest;

    const assetType = (isOption ? 'OPTION' : 'EQUITY');
    const buy = (isOption ? 'BUY_TO_OPEN' : 'BUY');
    const sell = (isOption ? 'SELL_TO_OPEN' : 'SELL_SHORT');
    const instruction = (!isShort ? buy : sell);

    return await this.placeOrder(accountId, price, [
      {
        instruction,
        quantity,
        instrument: { symbol, assetType },
      }
    ]);
  }

  /**
   * Closing Order
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @param {boolean} isOption - Is Option Order 
   * @param {boolean} isShort - Is Short Position 
   * @returns {Promise<APIResponse<any>>}
   */
  closeOrder = async (
    orderRequest: OrderRequest,
    isOption: boolean = false,
    isShort: boolean = false
  ) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);

    if (!success) {
      return {
        error: ERRORS.INVALID_ORDER_REQUEST,
        data: null,
      };
    }

    const {
      accountId,
      symbol,
      quantity,
      price,
    } = orderRequest;

    const assetType = (isOption ? 'OPTION' : 'EQUITY');
    const buy = (isOption ? 'BUY_TO_CLOSE' : 'BUY_TO_COVER');
    const sell = (isOption ? 'SELL_TO_CLOSE' : 'SELL');
    const instruction = (!isShort ? sell : buy);

    return await this.placeOrder(accountId, price, [
      {
        instruction,
        quantity,
        instrument: { symbol, assetType },
      }
    ]);
  }

  /**
   * Buy Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  buyStock = async (orderRequest: OrderRequest) => await this.openOrder(
    orderRequest,
    false,
    false
  );

  /**
   * Sell Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  sellStock = async (orderRequest: OrderRequest) => await this.closeOrder(
    orderRequest,
    false,
    false
  );

  /**
   * Short Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  shortStock = async (orderRequest: OrderRequest) => await this.openOrder(
    orderRequest,
    false,
    true
  );

  /**
   * Cover Short Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  coverStock = async (orderRequest: OrderRequest) => await this.closeOrder(
    orderRequest,
    false,
    true
  );

  /**
   * Buy Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  buyOption = async (orderRequest: OrderRequest) => await this.openOrder(
    orderRequest,
    true,
    false
  );

  /**
   * Sell Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  sellOption = async (orderRequest: OrderRequest) => await this.closeOrder(
    orderRequest,
    true,
    false
  );

  /**
   * Write Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  writeOption = async (orderRequest: OrderRequest) => await this.openOrder(
    orderRequest,
    true,
    true
  );

  /**
   * Close Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  closeOption = async (orderRequest: OrderRequest) => await this.closeOrder(
    orderRequest,
    true,
    true
  );
}

/**
 * Creates a new instance of the TD Ameritrade API
 * @param {APIClientConfig} config - API Client Configuration 
 * @returns {TDAmeritradeAPI}
 */
export function createTDAmeritradeAPIClient(config?: APIClientConfig) {
  return new TDAmeritradeAPI(config);
}

export default TDAmeritradeAPI;
