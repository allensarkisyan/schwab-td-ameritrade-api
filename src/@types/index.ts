/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

export type DateLikeNullable = Date|number|string|null;

export type TickerSymbol = string;

export type CUSIP = string;

export type TDAmeritradeAccountID = string;

export type BuyOrder = 'BUY'|'BUY_TO_OPEN'|'BUY_TO_CLOSE'|'BUY_TO_COVER';

export type SellOrder = 'SELL'|'SELL_TO_OPEN'|'SELL_TO_CLOSE'|'SELL_SHORT';

export type OrderDesciption = 'BUY TRADE'|'SELL TRADE'|'SHORT SALE'|'CLOSE SHORT POSITION';

export type AssetType = 'EQUITY'|'OPTION';

export type TDAmeritradeOrderLeg = {
  instruction: BuyOrder|SellOrder;
  quantity: number;
  instrument: {
    symbol: TickerSymbol;
    assetType: AssetType;
  }
}

export type LocalMemoryAuthDataStore = {
  userAccessToken?: string,
  accessTokenExpires?: DateLikeNullable,
  refreshToken?: string,
  refreshTokenExpires?: DateLikeNullable,
};

export type TradeTransaction = {
  orderId: string;
  description: OrderDesciption;
  transactionItem: {
    positionEffect: 'OPENING'|'CLOSING';
    instrument: {
      assetType: AssetType;
      symbol: TickerSymbol;
      cusip: CUSIP;
      underlyingSymbol: TickerSymbol;
    }
  }
};