/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
import { OrderRequestSchema } from './schemas/index.js';
const jsonToQueryString = (json) => {
  const queryParams = [];
  for (const [k, v] of Object.entries(json)) {
    queryParams.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  }
  return queryParams.join('&');
};
const getDistinctArray = (arr, key) =>
  arr.filter((i, idx) => arr.findIndex((x) => x[key] === i[key]) === idx);
const dataStore = {
  userAccessToken: '',
  accessTokenExpires: null,
  refreshToken: '',
  refreshTokenExpires: null,
};
const LIMIT_ORDER_TEMPLATE = {
  orderType: 'LIMIT',
  session: 'NORMAL',
  duration: 'GOOD_TILL_CANCEL',
  orderStrategyType: 'SINGLE',
};
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
  #clientId;
  /**
   * TD Ameritrade Application Client Callback URL
   * @private
   * @type {string}
   */
  #callbackUrl;
  /**
   * TD Ameritrade API Access Token
   * @private
   * @type {string | null}
   */
  #userAccessToken;
  /**
   * External request handler function.
   * @private
   * @type {function | null}
   */
  #externalRequestHandler;
  /**
   * Creates an instance of TDAmeritradeAPI.
   * @param {Object} [config] - API Client Configuration
   * @param {string} [config.clientId] - TD Amertitrade Client ID - defaults to TD_AMERITRADE_CLIENT_ID environment variable.
   * @param {string} [config.callbackUrl] - Callback URL - defaults to TD_AMERITRADE_CALLBACK_URL environment variable.
   * @param {function | null} [config.handleRequest=null] - An optional request handler function.
   */
  constructor(config) {
    this.#clientId = config?.clientId ?? process?.env?.TD_AMERITRADE_CLIENT_ID;
    this.#callbackUrl =
      config?.callbackUrl ?? process?.env?.TD_AMERITRADE_CALLBACK_URL;
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
  #handleRequest = async (config, isAuthorizationRequired = true) => {
    let data = null;
    let error = null;
    if (this.#externalRequestHandler) {
      return await this.#externalRequestHandler(config);
    }
    try {
      const query = config?.params
        ? `?${new URLSearchParams(config?.params)}`
        : '';
      const url = new URL(
        `${config.url}${query}`,
        'https://api.tdameritrade.com',
      );
      const requestConfig = {
        method: config?.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...config?.headers,
        },
      };
      if (config?.data) {
        requestConfig.body =
          typeof config.data === 'string'
            ? config.data
            : JSON.stringify(config.data);
      }
      if (isAuthorizationRequired && this.#userAccessToken) {
        requestConfig.headers['Authorization'] = `Bearer ${
          this.#userAccessToken
        }`;
      }
      const response = await fetch(url, requestConfig);
      if (!response.ok) {
        throw new Error(
          `TDAmeritradeAPI#handleRequest Failed with Status Code: ${response.status}`,
        );
      }
      data = await response.json();
    } catch (e) {
      error = e?.message || 'AN UNKNOWN ERROR HAS OCCURRED.';
    } finally {
      return { error, data };
    }
  };
  /**
   * Set User Access Token / Refresh Token
   * @param {string} accessToken - Access Token
   * @param {boolean} isNewToken - Is New Access Token
   * @param {string} [refreshToken] - Refresh Token
   * @param {number | null} [refreshTokenExpiresIn] - Refresh Token Expires in
   */
  setUserAccessToken = (
    accessToken,
    isNewToken = false,
    refreshToken = null,
    refreshTokenExpiresIn = null,
  ) => {
    try {
      if (accessToken) {
        const now = Date.now();
        this.#userAccessToken = accessToken;
        dataStore.userAccessToken = accessToken;
        if (isNewToken) {
          dataStore.accessTokenExpires = new Date(now + 1800 * 1000).toJSON();
        }
        if (refreshToken && refreshTokenExpiresIn) {
          dataStore.refreshToken = refreshToken;
          dataStore.refreshTokenExpires = new Date(
            now + refreshTokenExpiresIn * 1000,
          ).toJSON();
        }
      } else {
        this.#userAccessToken = null;
        delete dataStore.userAccessToken;
        delete dataStore.refreshToken;
        delete dataStore.accessTokenExpires;
        delete dataStore.refreshTokenExpires;
      }
    } catch (e) {
      return;
    }
  };
  /**
   * Authenticate with the TD Ameritrade OAuth2 Authorization endpoint
   * @param {string} code - Authorization Resonse Code from TD Ameritrade Authentication API
   * @returns {Promise<APIResponse<AuthenticationResponse | null>>}
   */
  authenticate = async (code) => {
    let data = null;
    let error = null;
    try {
      if (!this.#clientId || !this.#callbackUrl) {
        throw new Error(
          'Missing TD Ameritrade API Client ID / Client Callback URL',
        );
      }
      const { error, data: authResponseData } = await this.#handleRequest(
        {
          method: 'POST',
          url: '/v1/oauth2/token',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: jsonToQueryString({
            code,
            client_id: this.#clientId,
            redirect_uri: this.#callbackUrl,
            grant_type: 'authorization_code',
            access_type: 'offline',
          }),
        },
        false,
      );
      if (error) {
        throw new Error(error);
      }
      if (!authResponseData || !authResponseData.access_token) {
        throw new Error('ACCESS TOKEN NOT AVAILABLE');
      }
      this.setUserAccessToken(
        authResponseData.access_token,
        true,
        authResponseData.refresh_token,
        authResponseData.refresh_token_expires_in,
      );
      data = authResponseData;
    } catch (e) {
      console.log('TDAmeritradeAPI authenticate Error', e);
      error = e?.message || 'AN UNKNOWN ERROR HAS OCCURRED.';
    } finally {
      return { error, data };
    }
  };
  /**
   * Refresh Access Token with Refresh Token
   * @param {string} refresh_token - Refresh Token
   * @returns {Promise<APIResponse<RefreshTokenResponse | null>>}
   */
  refreshAccessToken = async (refresh_token) => {
    let data = null;
    let error = null;
    try {
      if (!this.#clientId) {
        throw new Error(
          'Missing TD Ameritrade API Client ID / Client Callback URL',
        );
      }
      const { error, data: refreshTokenData } = await this.#handleRequest(
        {
          method: 'POST',
          url: '/v1/oauth2/token',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: jsonToQueryString({
            refresh_token,
            grant_type: 'refresh_token',
            client_id: this.#clientId,
          }),
        },
        false,
      );
      if (error) {
        throw new Error(error);
      }
      if (!refreshTokenData || !refreshTokenData.access_token) {
        throw new Error('ACCESS TOKEN NOT AVAILABLE');
      }
      this.setUserAccessToken(refreshTokenData?.access_token);
      data = refreshTokenData;
    } catch (e) {
      console.log('TDAmeritradeAPI refreshAccessToken Error', e);
      error = e?.message || 'AN UNKNOWN ERROR HAS OCCURRED.';
    } finally {
      return { error, data };
    }
  };
  /**
   * Get Accounts
   * @returns {Promise<APIResponse<TDAmeritradeAccounts>>}
   */
  getAccounts = async () =>
    await this.#handleRequest({
      url: '/v1/accounts',
      params: { fields: 'positions,orders' },
    });
  /**
   * Get Account
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<TDAmeritradeAccount>>}
   */
  getAccount = async (accountId) =>
    await this.#handleRequest({
      url: `/v1/accounts/${accountId}`,
      params: { fields: 'positions,orders' },
    });
  /**
   * Get User Principals Data - for use with `schwab-td-ameritrade-streamer`
   * @returns {Promise<APIResponse<UserPrincipalsData>>}
   */
  getUserPrincipals = async () =>
    await this.#handleRequest({
      url: '/v1/userprincipals',
      params: {
        fields:
          'streamerSubscriptionKeys,streamerConnectionInfo,preferences,surrogateIds',
      },
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
    accountId,
    transactionsType = 'TRADE',
    startDate = null,
    endDate = null,
  ) =>
    await this.#handleRequest({
      url: `/v1/accounts/${accountId}/transactions`,
      params: {
        type: transactionsType,
        startDate,
        endDate,
      },
    });
  /**
   * Get Order's for Account ID
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<OrderData[]>>}
   */
  getOrders = async (accountId) =>
    await this.#handleRequest({
      url: '/v1/orders',
      params: { accountId },
    });
  /**
   * Get Quote Data for Ticker Symbol(s)
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<APIResponse<Object.<string, QuoteData>>>}
   */
  getQuotes = async (symbol) =>
    await this.#handleRequest({
      url: '/v1/marketdata/quotes',
      params: { symbol },
    });
  /**
   * Get Instrument Data for CUSIP
   * @param {CUSIP} cusip - CUSIP
   * @returns {Promise<APIResponse<InstrumentData[]>>}
   */
  getInstrument = async (cusip) =>
    await this.#handleRequest({
      url: `/v1/instruments/${cusip}`,
    });
  /**
   * Get Fundamental Data for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<APIResponse<Object.<string, FundamentalData>>>}
   */
  getFundamentals = async (symbol) =>
    await this.#handleRequest({
      url: '/v1/instruments',
      params: { symbol, projection: 'fundamental' },
    });
  /**
   * Get Market Directional Mover (e.g. '$SPX.X', 'up', 'percent')
   * @param {'$SPX.X' | '$DJI' | '$COMPX'} market - Market
   * @param {'up' | 'down'} direction - Direction
   * @param {'percent' | 'value'} change - Change Type
   * @returns {Promise<APIResponse<TrendingEquity[]>>}
   */
  getMarketDirectionalMover = async (market, direction, change = 'percent') =>
    await this.#handleRequest({
      url: `/v1/marketdata/${market}/movers`,
      params: { direction, change },
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
    symbol,
    days = 5,
    minutes = 5,
    extHours = true,
    endDate = new Date().getTime(),
  ) =>
    await this.#handleRequest({
      url: `/v1/marketdata/${symbol}/pricehistory`,
      params: {
        periodType: 'day',
        period: days,
        frequencyType: 'minute',
        frequency: minutes,
        needExtendedHoursData: extHours,
        endDate,
      },
    });
  /**
   * Get Daily Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {number} years - Number of Years
   * @param {number} days - Number of Days
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getDailyPriceHistory = async (symbol, years = 10, days = 1) =>
    await this.#handleRequest({
      url: `/v1/marketdata/${symbol}/pricehistory`,
      params: {
        periodType: 'year',
        period: years,
        frequencyType: 'daily',
        frequency: days,
        needExtendedHoursData: false,
      },
    });
  /**
   * Get Weekly Price History for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {number} years - Number of Years
   * @returns {Promise<APIResponse<PriceHistory>>}
   */
  getWeeklyPriceHistory = async (symbol, years = 20) =>
    await this.#handleRequest({
      url: `/v1/marketdata/${symbol}/pricehistory`,
      params: {
        periodType: 'year',
        period: years,
        frequencyType: 'weekly',
        frequency: 1,
        needExtendedHoursData: false,
      },
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
    symbol,
    startDate,
    endDate = new Date().getTime(),
    extHours = true,
  ) =>
    await this.#handleRequest({
      url: `/v1/marketdata/${symbol}/pricehistory`,
      params: {
        periodType: 'day',
        frequencyType: 'minute',
        frequency: 1,
        needExtendedHoursData: extHours,
        startDate,
        endDate,
      },
    });
  /**
   * Get Market Movers - Current Trending Equities of $SPX.X, $COMPX, $DJI
   * @returns {Promise<APIResponse<MarketMovers>>}
   */
  getMarketMovers = async () => {
    try {
      const MARKETS = ['$SPX.X', '$COMPX', '$DJI'];
      const marketMovers = await Promise.all(
        MARKETS.map(async (i) => {
          const { data: up } = await this.getMarketDirectionalMover(i, 'up');
          const { data: down } = await this.getMarketDirectionalMover(
            i,
            'down',
          );
          return { [i]: { up, down } };
        }),
      );
      const flat = marketMovers.reduce((a, b) => ({ ...a, ...b }), {});
      const upFlat = [...Object.keys(flat).map((k) => flat[k].up || [])]
        .flat()
        .sort((a, b) => (a.change > b.change ? -1 : 1));
      const downFlat = [...Object.keys(flat).map((k) => flat[k].down || [])]
        .flat()
        .sort((a, b) => (a.change > b.change ? 1 : -1));
      const up = getDistinctArray(upFlat, 'symbol');
      const down = getDistinctArray(downFlat, 'symbol');
      return {
        error: null,
        data: { up, down },
      };
    } catch (e) {
      return {
        error: e.message,
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
  getOptionChain = async (symbol, range = 'ALL', optionType = 'S') =>
    await this.#handleRequest({
      url: '/v1/marketdata/chains',
      params: {
        symbol,
        includeQuotes: 'TRUE',
        strategy: 'SINGLE',
        contractType: 'ALL',
        range,
        optionType,
      },
    });
  /**
   * Get Watchlists
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<Watchlists>>}
   */
  getWatchlists = async (accountId) =>
    await this.#handleRequest({
      url: `/v1/accounts/${accountId}/watchlists`,
    });
  /**
   * Get Watchlist by ID
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<APIResponse<Watchlist>>}
   */
  getWatchlist = async (accountId, watchlistId) =>
    await this.#handleRequest({
      url: `/v1/accounts/${accountId}/watchlists/${watchlistId}`,
    });
  // TRADING
  /**
   * Place an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {number} price - Price
   * @param {TDAmeritradeOrderLeg[]} orderLegCollection - Order Leg Collection
   * @returns {Promise<APIResponse<any>>}
   */
  placeOrder = async (accountId, price, orderLegCollection) =>
    await this.#handleRequest({
      method: 'POST',
      url: `/v1/accounts/${accountId}/orders`,
      data: {
        ...LIMIT_ORDER_TEMPLATE,
        price,
        orderLegCollection,
      },
    });
  /**
   * Cancel an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {string} orderId - Order ID
   * @returns {Promise<APIResponse<any>>}
   */
  cancelOrder = async (accountId, orderId) =>
    await this.#handleRequest({
      method: 'DELETE',
      url: `/v1/accounts/${accountId}/orders/${orderId}`,
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
  openOrder = async (orderRequest, isOption = false, isShort = false) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);
    if (!success) {
      throw new Error('Invalid Order Request');
    }
    return await this.placeOrder(orderRequest.accountId, orderRequest.price, [
      {
        quantity: orderRequest.quantity,
        instrument: {
          symbol: orderRequest.symbol,
          assetType: isOption ? 'OPTION' : 'EQUITY',
        },
        instruction: !isShort
          ? isOption
            ? 'BUY_TO_OPEN'
            : 'BUY'
          : isOption
          ? 'SELL_TO_OPEN'
          : 'SELL_SHORT',
      },
    ]);
  };
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
  closeOrder = async (orderRequest, isOption = false, isShort = false) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);
    if (!success) {
      throw new Error('Invalid Order Request');
    }
    return await this.placeOrder(orderRequest.accountId, orderRequest.price, [
      {
        quantity: orderRequest.quantity,
        instrument: {
          symbol: orderRequest.symbol,
          assetType: isOption ? 'OPTION' : 'EQUITY',
        },
        instruction: !isShort
          ? isOption
            ? 'SELL_TO_CLOSE'
            : 'SELL'
          : isOption
          ? 'BUY_TO_CLOSE'
          : 'BUY_TO_COVER',
      },
    ]);
  };
  /**
   * Buy Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  buyStock = async (orderRequest) =>
    await this.openOrder(orderRequest, false, false);
  /**
   * Sell Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  sellStock = async (orderRequest) =>
    await this.closeOrder(orderRequest, false, false);
  /**
   * Short Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  shortStock = async (orderRequest) =>
    await this.openOrder(orderRequest, false, true);
  /**
   * Cover Short Equtity / Stock Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  coverStock = async (orderRequest) =>
    await this.closeOrder(orderRequest, false, true);
  /**
   * Buy Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  buyOption = async (orderRequest) =>
    await this.openOrder(orderRequest, true, false);
  /**
   * Sell Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  sellOption = async (orderRequest) =>
    await this.closeOrder(orderRequest, true, false);
  /**
   * Write Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  writeOption = async (orderRequest) =>
    await this.openOrder(orderRequest, true, true);
  /**
   * Close Option Convenience Method
   * @param {OrderRequest} orderRequest - Order Request
   * @param {TDAmeritradeAccountID} orderRequest.accountId - TD Ameritrade Account ID
   * @param {TickerSymbol} orderRequest.symbol - Ticker Symbol
   * @param {number} orderRequest.quantity - Quantity of Shares / Option Contracts
   * @param {number} orderRequest.price - Price
   * @returns {Promise<APIResponse<any>>}
   */
  closeOption = async (orderRequest) =>
    await this.closeOrder(orderRequest, true, true);
}
/**
 * Creates a new instance of the TD Ameritrade API
 * @param {APIClientConfig} config - API Client Configuration
 * @returns {TDAmeritradeAPI}
 */
export function createTDAmeritradeAPIClient(config) {
  return new TDAmeritradeAPI(config);
}
export default TDAmeritradeAPI;
