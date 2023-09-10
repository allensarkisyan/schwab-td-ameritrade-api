/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import axios from 'axios';
import moment from 'moment';

import type {
  TickerSymbol,
  CUSIP,
  TDAmeritradeAccountID,
  TDAmeritradeOrderLeg,
  LocalMemoryAuthDataStore,
} from './@types/index.js';

const jsonToQueryString = (json: object): string => Object.keys(json).map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&');
const getDistinctArray = (arr: any[], key: string): any[] => arr.filter((i, idx) => arr.findIndex(x => x[key] === i[key]) === idx);

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

export class TDAmeritradeAPI {
  #externalRequestHandler?: Function | null;

  constructor(handleRequest: Function | null = null) {
    if (handleRequest) {
      this.#externalRequestHandler = handleRequest;
    }
  }

  #handleRequest = async (config: object): Promise<any> => {
    try {
      if (this.#externalRequestHandler) {
        return await this.#externalRequestHandler(config);
      }

      return (await apiService.request(Object.assign({}, { method: 'GET' }, config))).data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  setUserAccessToken = (
    accessToken: string,
    isNewToken: boolean = false,
    refreshToken: string|null = null,
    refreshTokenExpiresIn: Date|number|any = null,
  ) => {
    try {
      if (accessToken) {
        const now = moment((new Date()).toJSON());
  
        apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  
        dataStore.userAccessToken = accessToken;
  
        // TODO: Resolve possible bug here...
        if (isNewToken) {
          dataStore.accessTokenExpires = now.add(1800, 'seconds').toJSON();
        }
  
        if (refreshToken && refreshTokenExpiresIn) {
          dataStore.refreshToken = refreshToken;
          dataStore.refreshTokenExpires = now.add(refreshTokenExpiresIn, 'seconds').toJSON();
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

  authenticate = async (code: string) => {
    try {
      const authResponse = await this.#handleRequest({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          code,
          redirect_uri: 'http://localhost:8282/v1/tdcallback',
          grant_type: 'authorization_code',
          access_type: 'offline',
          client_id: process.env.NEXT_PUBLIC_TD_CLIENT_ID
        })
      });

      this.setUserAccessToken(authResponse);

      return authResponse;
    } catch (e) {
      return null;
    }
  };

  refreshAccessToken = async (refresh_token: string) => {
    try {
      delete apiService.defaults.headers.common.Authorization;

      const authResponse = await this.#handleRequest({
        method: 'POST',
        url: '/v1/oauth2/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: jsonToQueryString({
          refresh_token,
          grant_type: 'refresh_token',
          client_id: process.env.NEXT_PUBLIC_TD_CLIENT_ID,
        })
      });

      this.setUserAccessToken(authResponse);

      return authResponse;
    } catch (e) {
      return null;
    }
  };

  getAccounts = async () => await this.#handleRequest({
    url: '/v1/accounts',
    params: { fields: 'positions,orders' }
  });

  getAccount = async (
    accountId: TDAmeritradeAccountID
  ) => await this.#handleRequest({
    url: `/v1/accounts/${accountId}`,
    params: { fields: 'positions,orders' }
  });

  getUserPrincipals = async () => await this.#handleRequest({
    url: '/v1/userprincipals',
    params: { fields: 'streamerSubscriptionKeys,streamerConnectionInfo,preferences,surrogateIds' }
  });

  getTransactions = async (
    accountId: TDAmeritradeAccountID,
    startDate: Date|number|null = null,
    endDate: Date|number|null = null
  ) => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/transactions`,
    params: {
      /*
      ALL: All
      TRADE: Trades
      BUY_ONLY: Buy Only
      SELL_ONLY: Sell Only
      CASH_IN_OR_CASH_OUT: Cash in or Cash out
      CHECKING: Checking
      DIVIDEND: Dividend
      INTEREST: Interest
      ADVISOR_FEES: Advisor Fees
      OTHER: Other
      */
      type: 'TRADE',
      startDate,
      endDate
    }
  });

  getOrders = async (accountId: TDAmeritradeAccountID) => await this.#handleRequest({
    url: '/v1/orders',
    params: { accountId }
  });

  getQuotes = async (symbol: TickerSymbol) => await this.#handleRequest({
    url: '/v1/marketdata/quotes',
    params: { symbol }
  });

  getInstrument = async (cusip: CUSIP) => await this.#handleRequest({
    url: `/v1/instruments/${cusip}`
  });

  getFundamentals = async (symbol: TickerSymbol) => await this.#handleRequest({
    url: '/v1/instruments',
    params: { symbol, projection: 'fundamental' }
  });

  getMarketDirectionalMover = async (
    market: string,
    direction: string,
    change: string = 'percent'
  ) => await this.#handleRequest({
    url: `/v1/marketdata/${market}/movers`,
    params: { direction, change }
  });

  getPriceHistory = async (
    symbol: TickerSymbol,
    days: number = 5,
    minutes: number = 5,
    extHours: boolean = true,
    endDate: Date|number = (new Date()).getTime()
  ) => await this.#handleRequest({
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

  getDailyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 10,
    days: number = 1,
  ) => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'year',
      period: years,
      frequencyType: 'daily',
      frequency: days,
      needExtendedHoursData: false
    }
  });

  getWeeklyPriceHistory = async (
    symbol: TickerSymbol,
    years: number = 20
  ) => await this.#handleRequest({
    url: `/v1/marketdata/${symbol}/pricehistory`,
    params: {
      periodType: 'year',
      period: years,
      frequencyType: 'weekly',
      frequency: 1,
      needExtendedHoursData: false
    }
  });

  getPeriodicPriceHistory = async (
    symbol: TickerSymbol,
    startDate: Date|number,
    endDate: Date|number = (new Date()).getTime(),
    extHours: boolean = true,
  ) => await this.#handleRequest({
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

  getMarketMovers = async () => {
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

  getOptionChain = async (
    symbol: TickerSymbol
  ) => await this.#handleRequest({
    url: '/v1/marketdata/chains',
    params: {
      symbol,
      includeQuotes: 'TRUE',
      strategy: 'SINGLE',
      contractType: 'ALL',
      /*
      ITM: In-the-money
      NTM: Near-the-money
      OTM: Out-of-the-money
      SAK: Strikes Above Market
      SBK: Strikes Below Market
      SNK: Strikes Near Market
      ALL: All Strikes
      */
      range: 'ALL',
      /*
      S: Standard contracts
      NS: Non-standard contracts
      ALL: All contracts
      */
      optionType: 'S'
    }
  });

  getWatchlists = async (
    accountId: TDAmeritradeAccountID
  ) => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists`
  });

  getWatchlist = async (
    accountId: TDAmeritradeAccountID,
    watchlistId: string,
  ) => await this.#handleRequest({
    url: `/v1/accounts/${accountId}/watchlists/${watchlistId}`
  });

  // TRADING
  placeOrder = async (
    accountId: TDAmeritradeAccountID,
    price: number,
    orderLegCollection: TDAmeritradeOrderLeg[]
  ): Promise<{ success: boolean, orderId: string }> => await this.#handleRequest({
    method: 'POST',
    url: `/v1/accounts/${accountId}/orders`,
    data: {
      ...LIMIT_ORDER_TEMPLATE,
      price,
      orderLegCollection
    }
  });

  cancelOrder = async (
    accountId: TDAmeritradeAccountID,
    orderId: string
  ): Promise<{ success: boolean }> => await this.#handleRequest({
    method: 'DELETE',
    url: `/v1/accounts/${accountId}/orders/${orderId}`
  });

  openOrder = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number,
    isOption: boolean = false,
    isShort: boolean = false
  ) => await this.placeOrder(accountId, price, [
    {
      quantity,
      instrument: {
        symbol,
        assetType: (isOption ? 'OPTION' : 'EQUITY')
      },
      instruction: (
        !isShort
          ? (isOption ? 'BUY_TO_OPEN' : 'BUY')
          : (isOption ? 'SELL_TO_OPEN' : 'SELL_SHORT')
      ),
    }
  ]);

  closeOrder = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number,
    isOption: boolean = false,
    isShort: boolean = false
  ) => await this.placeOrder(accountId, price, [
    {
      quantity,
      instrument: {
        symbol,
        assetType: (isOption ? 'OPTION' : 'EQUITY')
      },
      instruction: (
        !isShort
          ? (isOption ? 'SELL_TO_CLOSE' : 'SELL')
          : (isOption ? 'BUY_TO_CLOSE' : 'BUY_TO_COVER')
      ),
    }
  ]);

  // complexOrderStrategyType: 'NONE'
  buyStock = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.openOrder(
    accountId,
    symbol,
    quantity,
    price,
    false,
    false
  );

  sellStock = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.closeOrder(
    accountId,
    symbol,
    quantity,
    price,
    false,
    false
  );

  shortStock = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.openOrder(
    accountId,
    symbol,
    quantity,
    price,
    false,
    true
  );

  coverStock = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.closeOrder(
    accountId,
    symbol,
    quantity,
    price,
    false,
    true
  );

  buyOption = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.openOrder(
    accountId,
    symbol,
    quantity,
    price,
    true,
    false
  );

  sellOption = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.closeOrder(
    accountId,
    symbol,
    quantity,
    price,
    true,
    false
  );

  writeOption = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.openOrder(
    accountId,
    symbol,
    quantity,
    price,
    true,
    true
  );

  closeOption = async (
    accountId: TDAmeritradeAccountID,
    symbol: TickerSymbol,
    quantity: number = 1,
    price: number
  ) => await this.closeOrder(
    accountId,
    symbol,
    quantity,
    price,
    true,
    true
  );
}

export default new TDAmeritradeAPI();