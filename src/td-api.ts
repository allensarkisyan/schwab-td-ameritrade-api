/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import axios from 'axios';
import { z } from 'zod';

import type {
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
} from './@types/index.js';

const jsonToQueryString = <TObj extends object>(json: TObj): string => Object.keys(json).map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&');
const getDistinctArray = <TArr>(arr: TArr[], key: string): TArr[] => arr.filter((i, idx) => arr.findIndex(x => x[key] === i[key]) === idx);

const apiService = axios.create({ baseURL: 'https://api.tdameritrade.com' });

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

const OrderRequestSchema = <z.ZodSchema<{
  accountId: TDAmeritradeAccountID,
  symbol: TickerSymbol,
  quantity: number,
  price: number
}>>z.object({
  accountId: z.string(),
  symbol: z.string().toUpperCase(),
  quantity: z.number().min(1).default(1),
  price: z.number().min(0.01)
});

type OrderRequest = z.infer<typeof OrderRequestSchema>;

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
  #clientId: string;

  /**
   * External request handler function.
   * @private
   * @type {function | null}
   */
  #externalRequestHandler?: Function | null;

  /**
   * Creates an instance of TDAmeritradeAPI.
   * @param {string} clientId - TD Amertitrade Client ID - defaults to TD_AMERITRADE_CLIENT_ID environment variable.
   * @param {function | null} [handleRequest=null] - An optional request handler function.
   */
  constructor(
    clientId: string | undefined = process?.env?.TD_AMERITRADE_CLIENT_ID,
    handleRequest: Function | null = null
  ) {
    if (!clientId) {
      throw new Error('Missing TD Ameritrade Client ID');
    }

    this.#clientId = clientId;

    if (handleRequest) {
      this.#externalRequestHandler = handleRequest;
    }
  }

  /**
   * Internal Request Handler
   * @private
   * @param config - Request Configuration
   * @returns {Promise<any>}
   */
  #handleRequest = async (config: object): Promise<any> => {
    try {
      if (this.#externalRequestHandler) {
        return await this.#externalRequestHandler(config);
      }

      const response = await apiService.request({
        method: 'GET',
        ...config
      });

      const data = await response.data;

      return data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Set User Access Token / Refresh Token
   * @param {string} accessToken - Access Token
   * @param {boolean} isNewToken - Is New Access Token
   * @param {string} [refreshToken] - Refresh Token
   * @param {string} [refreshTokenExpiresIn] - Refresh Token Expires in
   */
  setUserAccessToken = (
    accessToken: string,
    isNewToken: boolean = false,
    refreshToken: string|null = null,
    refreshTokenExpiresIn: Date|number|any = null,
  ): void => {
    try {
      if (accessToken) {
        const now = Date.now();
  
        apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  
        dataStore.userAccessToken = accessToken;

        if (isNewToken) {
          dataStore.accessTokenExpires = new Date(now + (1800 * 1000)).toJSON();
        }
  
        if (refreshToken && refreshTokenExpiresIn) {
          dataStore.refreshToken = refreshToken;
          dataStore.refreshTokenExpires =  new Date(now + (refreshTokenExpiresIn * 1000)).toJSON();
        }
      } else {
        delete apiService.defaults.headers.common.Authorization;
        delete dataStore.userAccessToken;
        delete dataStore.refreshToken;
        delete dataStore.accessTokenExpires;
        delete dataStore.refreshTokenExpires;
      }
    } catch (e) {
      return;
    }
  }

  /**
   * Authenticate with the TD Ameritrade OAuth2 Authorization endpoint
   * @param {string} code - Authorization Resonse Code from TD Ameritrade Authentication API
   * @returns {AuthenticationResponse | null}
   */
  authenticate = async (code: string): Promise<AuthenticationResponse | null> => {
    try {
      const authResponse: AuthenticationResponse = await this.#handleRequest({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          code,
          redirect_uri: 'http://localhost:8282/v1/tdcallback',
          grant_type: 'authorization_code',
          access_type: 'offline',
          client_id: this.#clientId,
        })
      });

      this.setUserAccessToken(
        authResponse.access_token,
        true,
        authResponse.refresh_token,
        authResponse.refresh_token_expires_in,
      );

      return authResponse;
    } catch (e) {
      console.log('TDAmeritradeAPI authenticate Error', e);
      return null;
    }
  };

  /**
   * Refresh Access Token with Refresh Token
   * @param {string} refresh_token - Refresh Token
   * @returns {RefreshTokenResponse | null}
   */
  refreshAccessToken = async (refresh_token: string): Promise<RefreshTokenResponse | null> => {
    try {
      delete apiService.defaults.headers.common.Authorization;

      const refreshTokenResponse: RefreshTokenResponse = await this.#handleRequest({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          refresh_token,
          grant_type: 'refresh_token',
          client_id: this.#clientId,
        })
      });

      this.setUserAccessToken(refreshTokenResponse.access_token);

      return refreshTokenResponse;
    } catch (e) {
      console.log('TDAmeritradeAPI refreshAccessToken Error', e);
      return null;
    }
  };

  /**
   * Get Accounts
   * @returns {Promise<TDAmeritradeAccounts>}
   */
  getAccounts = async (): Promise<TDAmeritradeAccounts> => await this.#handleRequest({
    url: '/v1/accounts',
    params: { fields: 'positions,orders' }
  });

  /**
   * Get Account
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<TDAmeritradeAccount>}
   */
  getAccount = async (
    accountId: TDAmeritradeAccountID
  ): Promise<TDAmeritradeAccount> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}`,
    params: { fields: 'positions,orders' }
  });

  /**
   * Get User Principals Data - for use with `schwab-td-ameritrade-streamer`
   * @returns {Promise<UserPrincipalsData>}
   */
  getUserPrincipals = async (): Promise<UserPrincipalsData> => await this.#handleRequest({
    url: '/v1/userprincipals',
    params: { fields: 'streamerSubscriptionKeys,streamerConnectionInfo,preferences,surrogateIds' }
  });

  /**
   * Get Transactions
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {GetTransactionsType} transactionsType - Transactions Type - Default 'TRADE'
   * @param {DateLikeNullable} startDate - Start Date
   * @param {DateLikeNullable} endDate - End Date
   * @returns {Promise<TransactionData[]>}
   */
  getTransactions = async (
    accountId: TDAmeritradeAccountID,
    transactionsType: GetTransactionsType = 'TRADE',
    startDate: DateLikeNullable = null,
    endDate: DateLikeNullable = null
  ): Promise<TransactionData[]> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/transactions`,
    params: {
      type: transactionsType,
      startDate,
      endDate
    }
  });

  getOrders = async (accountId: TDAmeritradeAccountID) => await this.#handleRequest({
    url: '/v1/orders',
    params: { accountId }
  });

  /**
   * Get Quote Data for Ticker Symbol(s)
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<Record<string, QuoteData>>}
   */
  getQuotes = async (symbol: TickerSymbol): Promise<Record<string, QuoteData>> => await this.#handleRequest({
    url: '/v1/marketdata/quotes',
    params: { symbol }
  });

  /**
   * Get Instrument Data for CUSIP
   * @param {CUSIP} cusip - CUSIP
   * @returns {Promise<InstrumentData[]>}
   */
  getInstrument = async (cusip: CUSIP): Promise<InstrumentData[]> => await this.#handleRequest({
    url: `/v1/instruments/${cusip}`
  });

  /**
   * Get Fundamental Data for Ticker Symbol
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @returns {Promise<Record<string, FundamentalData>>}
   */
  getFundamentals = async (symbol: TickerSymbol): Promise<Record<string, FundamentalData>> => await this.#handleRequest({
    url: '/v1/instruments',
    params: { symbol, projection: 'fundamental' }
  });

  /**
   * Get Market Directional Mover (e.g. '$SPX.X', 'up', 'percent')
   * @param {'$SPX.X' | '$DJI' | '$COMPX'} market - Market
   * @param {'up' | 'down'} direction - Direction
   * @param {'percent' | 'value'} change - Change Type
   * @returns {Promise<TrendingEquity[]>}
   */
  getMarketDirectionalMover = async (
    market: string,
    direction: string,
    change: string = 'percent'
  ): Promise<TrendingEquity[]> => await this.#handleRequest({
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
   * @returns {Promise<PriceHistory>}
   */
  getPriceHistory = async (
    symbol: TickerSymbol,
    days: number = 5,
    minutes: number = 5,
    extHours: boolean = true,
    endDate: Date|number = (new Date()).getTime()
  ): Promise<PriceHistory> => await this.#handleRequest({
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
   * @returns {Promise<PriceHistory>}
   */
  getDailyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 10,
    days: number = 1,
  ): Promise<PriceHistory> => await this.#handleRequest({
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
   * @returns {Promise<PriceHistory>}
   */
  getWeeklyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 20
  ): Promise<PriceHistory> => await this.#handleRequest({
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
   * @returns {Promise<PriceHistory>}
   */
  getPeriodicPriceHistory = async (
    symbol: TickerSymbol,
    startDate: DateLikeNullable,
    endDate: DateLikeNullable = (new Date()).getTime(),
    extHours: boolean = true,
  ): Promise<PriceHistory> => await this.#handleRequest({
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
   * @returns {Promise<MarketMovers>}
   */
  getMarketMovers = async (): Promise<MarketMovers | null> => {
    try {
      const MARKETS = [
        '$SPX.X',
        '$COMPX',
        '$DJI'
      ];

      const marketMovers = await Promise.all(MARKETS.map(async i => {
        const up = await this.getMarketDirectionalMover(i, 'up');
        const down = await this.getMarketDirectionalMover(i, 'down');
        return { [i]: { up, down } };
      }));

      const flat = marketMovers.reduce((a, b) => ({ ...a, ...b }), {});
      const upFlat = [...Object.keys(flat).map(k => flat[k].up)]
        .flat()
        .sort((a, b) => a.change > b.change ? -1 : 1);
      const downFlat = [...Object.keys(flat).map(k => flat[k].down)]
        .flat()
        .sort((a, b) => a.change > b.change ? 1 : -1);

      const up = getDistinctArray(upFlat, 'symbol');
      const down = getDistinctArray(downFlat, 'symbol');

      return { up, down };
    } catch (e) {
      return null;
    }
  };

  /**
   * Get Option Chain
   * @param {TickerSymbol} symbol - Ticker Symbol
   * @param {OptionContractRange} range - Option Contract Range - (ITM, OTM, NTM, etc..)
   * @param {OptionContractType} optionType - Option Contract Type - (Standard, Non Standard, All)
   * @returns {Promise<OptionChainData>}
   */
  getOptionChain = async (
    symbol: TickerSymbol,
    range: OptionContractRange = 'ALL',
    optionType: OptionContractType = 'S',
  ): Promise<OptionChainData> => await this.#handleRequest({
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
   * @returns {Promise<Watchlists>}
   */
  getWatchlists = async (
    accountId: TDAmeritradeAccountID
  ): Promise<Watchlists> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists`
  });

  /**
   * Get Watchlist by ID
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @returns {Promise<Watchlist>}
   */
  getWatchlist = async (
    accountId: TDAmeritradeAccountID,
    watchlistId: string,
  ): Promise<Watchlist> => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists/${watchlistId}`
  });

  // TRADING
  /**
   * Place an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {number} price - Price
   * @param {TDAmeritradeOrderLeg[]} orderLegCollection - Order Leg Collection
   * @returns {Promise<any>}
   */
  placeOrder = async (
    accountId: TDAmeritradeAccountID,
    price: number,
    orderLegCollection: TDAmeritradeOrderLeg[]
  ): Promise<any> => await this.#handleRequest({
    method: 'POST',
    url: `/v1/accounts/${accountId}/orders`,
    data: {
      ...LIMIT_ORDER_TEMPLATE,
      price,
      orderLegCollection
    }
  });

  /**
   * Cancel an Order
   * @param {TDAmeritradeAccountID} accountId - TD Ameritrade Account ID
   * @param {string} orderId - Order ID
   * @returns {Promise<any>}
   */
  cancelOrder = async (
    accountId: TDAmeritradeAccountID,
    orderId: string
  ): Promise<any> => await this.#handleRequest({
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
   * @returns {Promise<any>}
   */
  openOrder = async (
    orderRequest: OrderRequest,
    isOption: boolean = false,
    isShort: boolean = false
  ) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);

    if (!success) {
      throw new Error('Invalid Order Request');
    }

    return await this.placeOrder(orderRequest.accountId, orderRequest.price, [
      {
        quantity: orderRequest.quantity,
        instrument: {
          symbol: orderRequest.symbol,
          assetType: (isOption ? 'OPTION' : 'EQUITY')
        },
        instruction: (
          !isShort
            ? (isOption ? 'BUY_TO_OPEN' : 'BUY')
            : (isOption ? 'SELL_TO_OPEN' : 'SELL_SHORT')
        ),
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
   * @returns {Promise<any>}
   */
  closeOrder = async (
    orderRequest: OrderRequest,
    isOption: boolean = false,
    isShort: boolean = false
  ) => {
    const { success } = OrderRequestSchema.safeParse(orderRequest);

    if (!success) {
      throw new Error('Invalid Order Request');
    }

    await this.placeOrder(orderRequest.accountId, orderRequest.price, [
      {
        quantity: orderRequest.quantity,
        instrument: {
          symbol: orderRequest.symbol,
          assetType: (isOption ? 'OPTION' : 'EQUITY')
        },
        instruction: (
          !isShort
            ? (isOption ? 'SELL_TO_CLOSE' : 'SELL')
            : (isOption ? 'BUY_TO_CLOSE' : 'BUY_TO_COVER')
        ),
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
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
   * @returns {Promise<any>}
   */
  closeOption = async (orderRequest: OrderRequest) => await this.closeOrder(
    orderRequest,
    true,
    true
  );
}

export default new TDAmeritradeAPI();