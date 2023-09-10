declare module '@allensarkisyan/schwab-td-ameritrade-api/@types' {
  /**
   * @author Allen Sarkisyan
   * @copyright 2019 - 2023 XT-TX
   * @license MIT Open Source License
   */
  export type DateLikeNullable = Date | number | string | null;
  export type TickerSymbol = string;
  export type CUSIP = string;
  export type TDAmeritradeAccountID = string;
  export type BuyOrder =
    | 'BUY'
    | 'BUY_TO_OPEN'
    | 'BUY_TO_CLOSE'
    | 'BUY_TO_COVER';
  export type SellOrder =
    | 'SELL'
    | 'SELL_TO_OPEN'
    | 'SELL_TO_CLOSE'
    | 'SELL_SHORT';
  export type OrderDesciption =
    | 'BUY TRADE'
    | 'SELL TRADE'
    | 'SHORT SALE'
    | 'CLOSE SHORT POSITION';
  export type AssetType = 'EQUITY' | 'OPTION';
  export type TDAmeritradeOrderLeg = {
    instruction: BuyOrder | SellOrder;
    quantity: number;
    instrument: {
      symbol: TickerSymbol;
      assetType: AssetType;
    };
  };
  export type LocalMemoryAuthDataStore = {
    userAccessToken?: string;
    accessTokenExpires?: DateLikeNullable;
    refreshToken?: string;
    refreshTokenExpires?: DateLikeNullable;
  };
  export type TradeTransaction = {
    orderId: string;
    description: OrderDesciption;
    transactionItem: {
      positionEffect: 'OPENING' | 'CLOSING';
      instrument: {
        assetType: AssetType;
        symbol: TickerSymbol;
        cusip: CUSIP;
        underlyingSymbol: TickerSymbol;
      };
    };
  };
}
declare module '@allensarkisyan/schwab-td-ameritrade-api' {
  import type {
    TickerSymbol,
    CUSIP,
    TDAmeritradeAccountID,
    TDAmeritradeOrderLeg,
  } from '@allensarkisyan/schwab-td-ameritrade-api/@types';
  export class TDAmeritradeAPI {
    #private;
    constructor(handleRequest?: Function | null);
    setUserAccessToken: (
      accessToken: string,
      isNewToken?: boolean,
      refreshToken?: string | null,
      refreshTokenExpiresIn?: Date | number | any,
    ) => void;
    authenticate: (code: string) => Promise<any>;
    refreshAccessToken: (refresh_token: string) => Promise<any>;
    getAccounts: () => Promise<any>;
    getAccount: (accountId: TDAmeritradeAccountID) => Promise<any>;
    getUserPrincipals: () => Promise<any>;
    getTransactions: (
      accountId: TDAmeritradeAccountID,
      startDate?: Date | number | null,
      endDate?: Date | number | null,
    ) => Promise<any>;
    getOrders: (accountId: TDAmeritradeAccountID) => Promise<any>;
    getQuotes: (symbol: TickerSymbol) => Promise<any>;
    getInstrument: (cusip: CUSIP) => Promise<any>;
    getFundamentals: (symbol: TickerSymbol) => Promise<any>;
    getMarketDirectionalMover: (
      market: string,
      direction: string,
      change?: string,
    ) => Promise<any>;
    getPriceHistory: (
      symbol: TickerSymbol,
      days?: number,
      minutes?: number,
      extHours?: boolean,
      endDate?: Date | number,
    ) => Promise<any>;
    getDailyPriceHistory: (
      symbol: TickerSymbol,
      years?: number,
      days?: number,
    ) => Promise<any>;
    getWeeklyPriceHistory: (
      symbol: TickerSymbol,
      years?: number,
    ) => Promise<any>;
    getPeriodicPriceHistory: (
      symbol: TickerSymbol,
      startDate: Date | number,
      endDate?: Date | number,
      extHours?: boolean,
    ) => Promise<any>;
    getMarketMovers: () => Promise<{
      up: any[];
      down: any[];
    } | null>;
    getOptionChain: (symbol: TickerSymbol) => Promise<any>;
    getWatchlists: (accountId: TDAmeritradeAccountID) => Promise<any>;
    getWatchlist: (
      accountId: TDAmeritradeAccountID,
      watchlistId: string,
    ) => Promise<any>;
    placeOrder: (
      accountId: TDAmeritradeAccountID,
      price: number,
      orderLegCollection: TDAmeritradeOrderLeg[],
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    cancelOrder: (
      accountId: TDAmeritradeAccountID,
      orderId: string,
    ) => Promise<{
      success: boolean;
    }>;
    openOrder: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
      isOption?: boolean,
      isShort?: boolean,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    closeOrder: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
      isOption?: boolean,
      isShort?: boolean,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    buyStock: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    sellStock: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    shortStock: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    coverStock: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    buyOption: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    sellOption: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    writeOption: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
    closeOption: (
      accountId: TDAmeritradeAccountID,
      symbol: TickerSymbol,
      quantity: number | undefined,
      price: number,
    ) => Promise<{
      success: boolean;
      orderId: string;
    }>;
  }
  const _default: TDAmeritradeAPI;
  export default _default;
}
declare module '@allensarkisyan/schwab-td-ameritrade-api/td-utils' {
  /**
   * @author Allen Sarkisyan
   * @copyright 2019 - 2023 XT-TX
   * @license MIT Open Source License
   */
  import type { TradeTransaction } from '@allensarkisyan/schwab-td-ameritrade-api/@types';
  export const getBuyTrades: (trades: TradeTransaction[]) => TradeTransaction[];
  export const getSellTrades: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const getOpeningTrades: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const getClosingTrades: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const getOpeningShortSales: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const getClosingShortSales: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const groupByOrderId: (trades: TradeTransaction[]) => {};
  export const getOptionTrades: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const getEquityTrades: (
    trades: TradeTransaction[],
  ) => TradeTransaction[];
  export const groupByInstrument: (trades: TradeTransaction[]) => {};
  export const groupByInstrumentSymbol: (trades: TradeTransaction[]) => {};
  export const groupByInstrumentUnderlyingSymbol: (
    trades: TradeTransaction[],
  ) => {};
  export const groupByInstrumentCUSIP: (trades: TradeTransaction[]) => {};
  export const groupByAssetType: (trades: TradeTransaction[]) => {};
}
