/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

export type DateLikeNullable = Date | number | string | null;

export type TickerSymbol = string;

export type CUSIP = string;

export type TDAmeritradeAccountID = string;

export type BuyOrder = 'BUY' | 'BUY_TO_OPEN' | 'BUY_TO_CLOSE' | 'BUY_TO_COVER';

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

/**
 * Represents stock information.
 * @typedef {Object} InstrumentData
 * @property {CUSIP} cusip - The CUSIP (Committee on Uniform Securities Identification Procedures) number.
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {string} description - The description of the stock.
 * @property {string} exchange - The exchange where the stock is traded.
 * @property {AssetType} assetType - The asset type, such as "EQUITY".
 */
export type InstrumentData = {
  cusip: CUSIP;
  symbol: TickerSymbol;
  description: string;
  exchange: string;
  assetType: AssetType;
};

/**
 * Represents stock data.
 * @typedef {Object} QuoteData
 * @property {AssetType} assetType - The asset type.
 * @property {string} assetMainType - The asset main type.
 * @property {CUSIP} cusip - The CUSIP.
 * @property {string} assetSubType - The asset sub type.
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {string} description - The stock description.
 * @property {number} bidPrice - The bid price.
 * @property {number} bidSize - The bid size.
 * @property {string} bidId - The bid ID.
 * @property {number} askPrice - The ask price.
 * @property {number} askSize - The ask size.
 * @property {string} askId - The ask ID.
 * @property {number} lastPrice - The last price.
 * @property {number} lastSize - The last size.
 * @property {string} lastId - The last ID.
 * @property {number} openPrice - The opening price.
 * @property {number} highPrice - The highest price of the day.
 * @property {number} lowPrice - The lowest price of the day.
 * @property {string} bidTick - The bid tick.
 * @property {number} closePrice - The closing price.
 * @property {number} netChange - The net price change.
 * @property {number} totalVolume - The total volume.
 * @property {number} quoteTimeInLong - The quote time in long format.
 * @property {number} tradeTimeInLong - The trade time in long format.
 * @property {number} mark - The mark price.
 * @property {string} exchange - The exchange.
 * @property {string} exchangeName - The exchange name.
 * @property {boolean} marginable - Indicates if it's marginable.
 * @property {boolean} shortable - Indicates if it's shortable.
 * @property {number} volatility - The volatility.
 * @property {number} digits - The number of digits.
 * @property {number} 52WkHigh - The 52-week high price.
 * @property {number} 52WkLow - The 52-week low price.
 * @property {number} nAV - The NAV (Net Asset Value).
 * @property {number} peRatio - The P/E (Price-to-Earnings) ratio.
 * @property {number} divAmount - The dividend amount.
 * @property {number} divYield - The dividend yield.
 * @property {string} divDate - The dividend date.
 * @property {string} securityStatus - The security status.
 * @property {number} regularMarketLastPrice - The last price in the regular market.
 * @property {number} regularMarketLastSize - The last size in the regular market.
 * @property {number} regularMarketNetChange - The net change in the regular market.
 * @property {number} regularMarketTradeTimeInLong - The trade time in long format in the regular market.
 * @property {number} netPercentChangeInDouble - The net percent change in double format.
 * @property {number} markChangeInDouble - The mark change in double format.
 * @property {number} markPercentChangeInDouble - The mark percent change in double format.
 * @property {boolean} delayed - Indicates if the data is delayed.
 * @property {boolean} realtimeEntitled - Indicates if real-time data is entitled.
 */
export type QuoteData = {
  assetType: AssetType;
  assetMainType: string;
  cusip: CUSIP;
  assetSubType: string;
  symbol: TickerSymbol;
  description: string;
  bidPrice: number;
  bidSize: number;
  bidId: string;
  askPrice: number;
  askSize: number;
  askId: string;
  lastPrice: number;
  lastSize: number;
  lastId: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  bidTick: string;
  closePrice: number;
  netChange: number;
  totalVolume: number;
  quoteTimeInLong: number;
  tradeTimeInLong: number;
  mark: number;
  exchange: string;
  exchangeName: string;
  marginable: boolean;
  shortable: boolean;
  volatility: number;
  digits: number;
  '52WkHigh': number;
  '52WkLow': number;
  nAV: number;
  peRatio: number;
  divAmount: number;
  divYield: number;
  divDate: string;
  securityStatus: string;
  regularMarketLastPrice: number;
  regularMarketLastSize: number;
  regularMarketNetChange: number;
  regularMarketTradeTimeInLong: number;
  netPercentChangeInDouble: number;
  markChangeInDouble: number;
  markPercentChangeInDouble: number;
  regularMarketPercentChangeInDouble: number;
  delayed: boolean;
  realtimeEntitled: boolean;
};

/**
 * Represents fundamental data for a stock.
 * @typedef {Object} Fundamentals
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {number} high52 - The 52-week high price.
 * @property {number} low52 - The 52-week low price.
 * @property {number} dividendAmount - The dividend amount.
 * @property {number} dividendYield - The dividend yield.
 * @property {string} dividendDate - The dividend date.
 * @property {number} peRatio - The Price-to-Earnings (P/E) ratio.
 * @property {number} pegRatio - The Price/Earnings to Growth (PEG) ratio.
 * @property {number} pbRatio - The Price-to-Book (P/B) ratio.
 * @property {number} prRatio - The Price-to-Revenue (P/R) ratio.
 * @property {number} pcfRatio - The Price-to-Cash Flow (P/CF) ratio.
 * @property {number} grossMarginTTM - The gross margin trailing twelve months (TTM).
 * @property {number} grossMarginMRQ - The gross margin most recent quarter (MRQ).
 * @property {number} netProfitMarginTTM - The net profit margin TTM.
 * @property {number} netProfitMarginMRQ - The net profit margin MRQ.
 * @property {number} operatingMarginTTM - The operating margin TTM.
 * @property {number} operatingMarginMRQ - The operating margin MRQ.
 * @property {number} returnOnEquity - The return on equity.
 * @property {number} returnOnAssets - The return on assets.
 * @property {number} returnOnInvestment - The return on investment.
 * @property {number} quickRatio - The quick ratio.
 * @property {number} currentRatio - The current ratio.
 * @property {number} interestCoverage - The interest coverage.
 * @property {number} totalDebtToCapital - The total debt to capital ratio.
 * @property {number} ltDebtToEquity - The long-term debt to equity ratio.
 * @property {number} totalDebtToEquity - The total debt to equity ratio.
 * @property {number} epsTTM - The earnings per share TTM.
 * @property {number} epsChangePercentTTM - The percentage change in earnings per share TTM.
 * @property {number} epsChangeYear - The change in earnings per share in a year.
 * @property {number} epsChange - The overall change in earnings per share.
 * @property {number} revChangeYear - The change in revenue in a year.
 * @property {number} revChangeTTM - The change in revenue TTM.
 * @property {number} revChangeIn - The percentage change in revenue.
 * @property {number} sharesOutstanding - The number of outstanding shares.
 * @property {number} marketCapFloat - The market capitalization (float).
 * @property {number} marketCap - The total market capitalization.
 * @property {number} bookValuePerShare - The book value per share.
 * @property {number} shortIntToFloat - The short interest to float ratio.
 * @property {number} shortIntDayToCover - The short interest days to cover.
 * @property {number} divGrowthRate3Year - The 3-year dividend growth rate.
 * @property {number} dividendPayAmount - The dividend payment amount.
 * @property {string} dividendPayDate - The dividend payment date.
 * @property {number} beta - The beta value.
 * @property {number} vol1DayAvg - The average volume over 1 day.
 * @property {number} vol10DayAvg - The average volume over 10 days.
 * @property {number} vol3MonthAvg - The average volume over 3 months.
 */
/**
 * Represents fundamental data for a stock.
 */
export type Fundamentals = {
  symbol: TickerSymbol;
  high52: number;
  low52: number;
  dividendAmount: number;
  dividendYield: number;
  dividendDate: string;
  peRatio: number;
  pegRatio: number;
  pbRatio: number;
  prRatio: number;
  pcfRatio: number;
  grossMarginTTM: number;
  grossMarginMRQ: number;
  netProfitMarginTTM: number;
  netProfitMarginMRQ: number;
  operatingMarginTTM: number;
  operatingMarginMRQ: number;
  returnOnEquity: number;
  returnOnAssets: number;
  returnOnInvestment: number;
  quickRatio: number;
  currentRatio: number;
  interestCoverage: number;
  totalDebtToCapital: number;
  ltDebtToEquity: number;
  totalDebtToEquity: number;
  epsTTM: number;
  epsChangePercentTTM: number;
  epsChangeYear: number;
  epsChange: number;
  revChangeYear: number;
  revChangeTTM: number;
  revChangeIn: number;
  sharesOutstanding: number;
  marketCapFloat: number;
  marketCap: number;
  bookValuePerShare: number;
  shortIntToFloat: number;
  shortIntDayToCover: number;
  divGrowthRate3Year: number;
  dividendPayAmount: number;
  dividendPayDate: string;
  beta: number;
  vol1DayAvg: number;
  vol10DayAvg: number;
  vol3MonthAvg: number;
};

/**
 * Represents Fundamental Data
 * @typedef {Object} FundamentalData
 * @property {Fundamentals} fundamental - Fundamental data for the stock.
 * @property {CUSIP} cusip - The CUSIP.
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {string} description - The stock description.
 * @property {string} exchange - The exchange where the stock is traded.
 * @property {string} assetType - The asset type.
 */
export type FundamentalData = InstrumentData & {
  fundamental: Fundamentals;
};

/**
 * Represents Open, High, Low Close Values
 * @typedef {Object} OHLC
 * @property {number} open - The opening price.
 * @property {number} high - The highest price during the period.
 * @property {number} low - The lowest price during the period.
 * @property {number} close - The closing price.
 */
export type OHLC = {
  open: number;
  high: number;
  low: number;
  close: number;
};

/**
 * Represents OHLC with Volume Values
 * @typedef {Object} OHLCVolume
 * @property {number} open - The opening price.
 * @property {number} high - The highest price during the period.
 * @property {number} low - The lowest price during the period.
 * @property {number} close - The closing price.
 * @property {number} volume - The trading volume.
 */
export type OHLCVolume = OHLC & {
  volume: number;
}

/**
 * Represents a candlestick.
 * @typedef {Object} Candlestick
 * @property {number} open - The opening price.
 * @property {number} high - The highest price during the period.
 * @property {number} low - The lowest price during the period.
 * @property {number} close - The closing price.
 * @property {number} volume - The trading volume.
 * @property {number} datetime - The timestamp of the candlestick.
 */
export type Candlestick = OHLCVolume & {
  datetime: number;
}

/**
 * Represents candlestick data.
 * @typedef {Object} PriceHistory
 * @property {Candlestick[]} candles - An array of candlesticks.
 * @property {TickerSymbol} symbol - The symbol associated with the data.
 * @property {boolean} empty - Indicates whether the data is empty.
 */
export type PriceHistory = {
  candles: Candlestick[];
  symbol: TickerSymbol;
  empty: boolean;
};
