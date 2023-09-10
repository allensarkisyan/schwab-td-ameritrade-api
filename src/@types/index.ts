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

/**
 * ITM: In-the-money
 * NTM: Near-the-money
 * OTM: Out-of-the-money
 * SAK: Strikes Above Market
 * SBK: Strikes Below Market
 * SNK: Strikes Near Market
 * ALL: All Strikes
 */
export type OptionContractRange = 'ALL' | 'ITM' | 'OTM' | 'NTM' | 'SAK' | 'SBK' | 'SNK';

/**
 * S: Standard contracts
 * NS: Non-standard contracts
 * ALL: All contracts
 */
export type OptionContractType = 'S' | 'NS' | 'ALL';

/**
 * Represents option contract data.
 * @typedef {Object} OptionContractData
 * @property {string} putCall - The option type (e.g., "CALL" or "PUT").
 * @property {TickerSymbol} symbol - The option symbol.
 * @property {string} description - A description of the option contract.
 * @property {string} exchangeName - The exchange where the option is traded.
 * @property {number} bid - The bid price for the option.
 * @property {number} ask - The ask price for the option.
 * @property {number} last - The last traded price for the option.
 * @property {number} mark - The mark price for the option.
 * @property {number} bidSize - The size of the bid for the option.
 * @property {number} askSize - The size of the ask for the option.
 * @property {string} bidAskSize - The bid and ask sizes (e.g., "45X25").
 * @property {number} lastSize - The size of the last trade for the option.
 * @property {number} highPrice - The highest price of the option.
 * @property {number} lowPrice - The lowest price of the option.
 * @property {number} openPrice - The opening price of the option.
 * @property {number} closePrice - The closing price of the option.
 * @property {number} totalVolume - The total trading volume for the option.
 * @property {Date | null} tradeDate - The date of the last trade (nullable).
 * @property {number} tradeTimeInLong - The timestamp of the last trade.
 * @property {number} quoteTimeInLong - The timestamp of the quote.
 * @property {number} netChange - The net change in the option price.
 * @property {number} volatility - The volatility of the option.
 * @property {number} delta - The delta value of the option.
 * @property {number} gamma - The gamma value of the option.
 * @property {number} theta - The theta value of the option.
 * @property {number} vega - The vega value of the option.
 * @property {number} rho - The rho value of the option.
 * @property {number} openInterest - The open interest in the option.
 * @property {number} timeValue - The time value of the option.
 * @property {number} theoreticalOptionValue - The theoretical option value.
 * @property {number} theoreticalVolatility - The theoretical volatility of the option.
 * @property {string | null} optionDeliverablesList - The list of option deliverables (nullable).
 * @property {number} strikePrice - The strike price of the option.
 * @property {number} expirationDate - The expiration date of the option (timestamp).
 * @property {number} daysToExpiration - The number of days to option expiration.
 * @property {string} expirationType - The type of expiration (e.g., "S" for standard).
 * @property {number} lastTradingDay - The last trading day (timestamp).
 * @property {number} multiplier - The multiplier for the option (e.g., 100 for standard options).
 * @property {string} settlementType - The settlement type (e.g., " " for space).
 * @property {string} deliverableNote - A note about deliverables.
 * @property {boolean| null} isIndexOption - Indicates if the option is an index option (nullable).
 * @property {number} percentChange - The percentage change in the option price.
 * @property {number} markChange - The change in the mark price.
 * @property {number} markPercentChange - The percentage change in the mark price.
 * @property {number} intrinsicValue - The intrinsic value of the option.
 * @property {boolean} pennyPilot - Indicates if the option is part of the penny pilot program.
 * @property {boolean} nonStandard - Indicates if the option is non-standard.
 * @property {boolean} inTheMoney - Indicates if the option is in the money.
 * @property {boolean} mini - Indicates if the option is a mini option.
 */
export type OptionContractData = {
  putCall: 'PUT' | 'CALL';
  symbol: TickerSymbol;
  description: string;
  exchangeName: string;
  bid: number;
  ask: number;
  last: number;
  mark: number;
  bidSize: number;
  askSize: number;
  bidAskSize: string;
  lastSize: number;
  highPrice: number;
  lowPrice: number;
  openPrice: number;
  closePrice: number;
  totalVolume: number;
  tradeDate: Date | number | null;
  tradeTimeInLong: number;
  quoteTimeInLong: number;
  netChange: number;
  volatility: number;
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
  openInterest: number;
  timeValue: number;
  theoreticalOptionValue: number;
  theoreticalVolatility: number;
  optionDeliverablesList: string | null;
  strikePrice: number;
  expirationDate: number;
  daysToExpiration: number;
  expirationType: string;
  lastTradingDay: number;
  multiplier: number;
  settlementType: string;
  deliverableNote: string;
  isIndexOption: boolean | null;
  percentChange: number;
  markChange: number;
  markPercentChange: number;
  intrinsicValue: number;
  pennyPilot: boolean;
  nonStandard: boolean;
  inTheMoney: boolean;
  mini: boolean;
};


/**
 * Represents information about the underlying asset.
 * @typedef {Object} UnderlyingAsset
 * @property {TickerSymbol} symbol - The symbol of the underlying asset.
 * @property {string} description - The description of the underlying asset.
 * @property {number} change - The change in the underlying asset's price.
 * @property {number} percentChange - The percentage change in the underlying asset's price.
 * @property {number} close - The closing price of the underlying asset.
 * @property {number} quoteTime - The timestamp of the underlying asset's quote time.
 * @property {number} tradeTime - The timestamp of the underlying asset's trade time.
 * @property {number} bid - The bid price for the underlying asset.
 * @property {number} ask - The ask price for the underlying asset.
 * @property {number} last - The last traded price for the underlying asset.
 * @property {number} mark - The mark price for the underlying asset.
 * @property {number} markChange - The change in the mark price for the underlying asset.
 * @property {number} markPercentChange - The percentage change in the mark price for the underlying asset.
 * @property {number} bidSize - The size of the bid for the underlying asset.
 * @property {number} askSize - The size of the ask for the underlying asset.
 * @property {number} highPrice - The highest price of the underlying asset.
 * @property {number} lowPrice - The lowest price of the underlying asset.
 * @property {number} openPrice - The opening price of the underlying asset.
 * @property {number} totalVolume - The total trading volume for the underlying asset.
 * @property {string} exchangeName - The name of the exchange where the underlying asset is traded.
 * @property {number} fiftyTwoWeekHigh - The fifty-two week high price of the underlying asset.
 * @property {number} fiftyTwoWeekLow - The fifty-two week low price of the underlying asset.
 * @property {boolean} delayed - Indicates if the data is delayed for the underlying asset.
 */
export type UnderlyingAsset = {
  symbol: TickerSymbol;
  description: string;
  change: number;
  percentChange: number;
  close: number;
  quoteTime: number;
  tradeTime: number;
  bid: number;
  ask: number;
  last: number;
  mark: number;
  markChange: number;
  markPercentChange: number;
  bidSize: number;
  askSize: number;
  highPrice: number;
  lowPrice: number;
  openPrice: number;
  totalVolume: number;
  exchangeName: string;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  delayed: boolean;
};

/**
 * Represents option chain data.
 * @typedef {Object} OptionChainData
 * @property {TickerSymbol} symbol - The symbol.
 * @property {string} status - The status of the option chain (e.g., "SUCCESS").
 * @property {UnderlyingAsset} underlying - Information about the underlying asset.
 * @property {string} strategy - The trading strategy (e.g., "SINGLE").
 * @property {number} interval - The interval.
 * @property {boolean} isDelayed - Indicates if the data is delayed.
 * @property {boolean} isIndex - Indicates if the data is related to an index.
 * @property {number} interestRate - The interest rate.
 * @property {number} underlyingPrice - The price of the underlying asset.
 * @property {number} volatility - The volatility.
 * @property {number} daysToExpiration - The number of days to expiration.
 * @property {number} numberOfContracts - The number of contracts.
 * @property {Record<string, Record<string, OptionContractData[]>>} putExpDateMap - Map of put expiration dates and their data.
 * @property {Record<string, Record<string, OptionContractData[]>>} callExpDateMap - Map of call expiration dates and their data.
 */
export type OptionChainData = {
  symbol: TickerSymbol;
  status: string;
  underlying: UnderlyingAsset;
  strategy: string;
  interval: number;
  isDelayed: boolean;
  isIndex: boolean;
  interestRate: number;
  underlyingPrice: number;
  volatility: number;
  daysToExpiration: number;
  numberOfContracts: number;
  putExpDateMap: Record<string, Record<string, OptionContractData[]>>;
  callExpDateMap: Record<string, Record<string, OptionContractData[]>>;
};

/**
 * Represents an instrument.
 * @typedef {Object} WatchlistItemInstrument
 * @property {string} symbol - The symbol of the instrument.
 * @property {string} assetType - The asset type of the instrument (e.g., "EQUITY").
 */
export type WatchlistItemInstrument = {
  symbol: TickerSymbol;
  assetType: string;
};

/**
 * Represents an instrument within a watchlist.
 * @typedef {Object} WatchlistItem
 * @property {number} sequenceId - The sequence ID of the watchlist item.
 * @property {number} quantity - The quantity of the instrument.
 * @property {number} averagePrice - The average price of the instrument.
 * @property {number} commission - The commission associated with the instrument.
 * @property {WatchlistItemInstrument} instrument - The instrument details.
 */
export type WatchlistItem = {
  sequenceId: number;
  quantity: number;
  averagePrice: number;
  commission: number;
  instrument: WatchlistItemInstrument;
};

/**
 * Represents a watchlist.
 * @typedef {Object} Watchlist
 * @property {string} name - The name of the watchlist.
 * @property {string} watchlistId - The ID of the watchlist.
 * @property {string} accountId - The ID of the account associated with the watchlist.
 * @property {Array<WatchlistItem>} watchlistItems - The list of watchlist items.
 */
export type Watchlist = {
  name: string;
  watchlistId: string;
  accountId: string;
  watchlistItems: WatchlistItem[];
};

/**
 * Represents multiple watchlists.
 * @typedef {Watchlist[]} Watchlists
 */
export type Watchlists = Watchlist[];

/**
 * Represents an account's financial summary.
 * @typedef {Object} CurrentBalances
 * @property {number} accruedInterest - Accrued interest.
 * @property {number} cashBalance - Cash balance.
 * @property {number} cashReceipts - Cash receipts.
 * @property {number} longOptionMarketValue - Long option market value.
 * @property {number} liquidationValue - Liquidation value.
 * @property {number} longMarketValue - Long market value.
 * @property {number} moneyMarketFund - Money market fund.
 * @property {number} savings - Savings amount.
 * @property {number} shortMarketValue - Short market value.
 * @property {number} pendingDeposits - Pending deposits.
 * @property {number} availableFunds - Available funds.
 * @property {number} availableFundsNonMarginableTrade - Available funds for non-marginable trade.
 * @property {number} buyingPower - Buying power.
 * @property {number} buyingPowerNonMarginableTrade - Buying power for non-marginable trade.
 * @property {number} dayTradingBuyingPower - Day trading buying power.
 * @property {number} equity - Equity.
 * @property {number} equityPercentage - Equity percentage.
 * @property {number} longMarginValue - Long margin value.
 * @property {number} maintenanceCall - Maintenance call amount.
 * @property {number} maintenanceRequirement - Maintenance requirement.
 * @property {number} marginBalance - Margin balance.
 * @property {number} regTCall - Regulation T call amount.
 * @property {number} shortBalance - Short balance.
 * @property {number} shortMarginValue - Short margin value.
 * @property {number} shortOptionMarketValue - Short option market value.
 * @property {number} sma - Special memorandum account (SMA).
 * @property {number} mutualFundValue - Mutual fund value.
 * @property {number} bondValue - Bond value.
 */
export type CurrentBalances = {
  accruedInterest: number;
  cashBalance: number;
  cashReceipts: number;
  longOptionMarketValue: number;
  liquidationValue: number;
  longMarketValue: number;
  moneyMarketFund: number;
  savings: number;
  shortMarketValue: number;
  pendingDeposits: number;
  availableFunds: number;
  availableFundsNonMarginableTrade: number;
  buyingPower: number;
  buyingPowerNonMarginableTrade: number;
  dayTradingBuyingPower: number;
  equity: number;
  equityPercentage: number;
  longMarginValue: number;
  maintenanceCall: number;
  maintenanceRequirement: number;
  marginBalance: number;
  regTCall: number;
  shortBalance: number;
  shortMarginValue: number;
  shortOptionMarketValue: number;
  sma: number;
  mutualFundValue: number;
  bondValue: number;
};


/**
 * Represents an account's financial summary.
 * @typedef {Object} InitialBalances
 * @property {number} accruedInterest - Accrued interest.
 * @property {number} availableFundsNonMarginableTrade - Available funds for non-marginable trade.
 * @property {number} bondValue - Bond value.
 * @property {number} buyingPower - Buying power.
 * @property {number} cashBalance - Cash balance.
 * @property {number} cashAvailableForTrading - Cash available for trading.
 * @property {number} cashReceipts - Cash receipts.
 * @property {number} dayTradingBuyingPower - Day trading buying power.
 * @property {number} dayTradingBuyingPowerCall - Day trading buying power call.
 * @property {number} dayTradingEquityCall - Day trading equity call.
 * @property {number} equity - Equity.
 * @property {number} equityPercentage - Equity percentage.
 * @property {number} liquidationValue - Liquidation value.
 * @property {number} longMarginValue - Long margin value.
 * @property {number} longOptionMarketValue - Long option market value.
 * @property {number} longStockValue - Long stock value.
 * @property {number} maintenanceCall - Maintenance call amount.
 * @property {number} maintenanceRequirement - Maintenance requirement.
 * @property {number} margin - Margin amount.
 * @property {number} marginEquity - Margin equity.
 * @property {number} moneyMarketFund - Money market fund.
 * @property {number} mutualFundValue - Mutual fund value.
 * @property {number} regTCall - Regulation T call amount.
 * @property {number} shortMarginValue - Short margin value.
 * @property {number} shortOptionMarketValue - Short option market value.
 * @property {number} shortStockValue - Short stock value.
 * @property {number} totalCash - Total cash.
 * @property {number} isInCall - Is in call status.
 * @property {number} pendingDeposits - Pending deposits.
 * @property {number} marginBalance - Margin balance.
 * @property {number} shortBalance - Short balance.
 * @property {number} accountValue - Account value.
 */
export type InitialBalances = {
  accruedInterest: number;
  availableFundsNonMarginableTrade: number;
  bondValue: number;
  buyingPower: number;
  cashBalance: number;
  cashAvailableForTrading: number;
  cashReceipts: number;
  dayTradingBuyingPower: number;
  dayTradingBuyingPowerCall: number;
  dayTradingEquityCall: number;
  equity: number;
  equityPercentage: number;
  liquidationValue: number;
  longMarginValue: number;
  longOptionMarketValue: number;
  longStockValue: number;
  maintenanceCall: number;
  maintenanceRequirement: number;
  margin: number;
  marginEquity: number;
  moneyMarketFund: number;
  mutualFundValue: number;
  regTCall: number;
  shortMarginValue: number;
  shortOptionMarketValue: number;
  shortStockValue: number;
  totalCash: number;
  isInCall: number;
  pendingDeposits: number;
  marginBalance: number;
  shortBalance: number;
  accountValue: number;
};


/**
 * Represents account-related data.
 * @typedef {Object} ProjectedBalances
 * @property {number} availableFunds - The available funds in the account.
 * @property {number} availableFundsNonMarginableTrade - The available funds for non-marginable trades.
 * @property {number} buyingPower - The buying power of the account.
 * @property {number} dayTradingBuyingPower - The buying power for day trading.
 * @property {number} dayTradingBuyingPowerCall - The day trading buying power call.
 * @property {number} maintenanceCall - The maintenance call.
 * @property {number} regTCall - The Regulation T (Reg T) call.
 * @property {number} isInCall - Indicates whether the account is in a call state.
 * @property {number} stockBuyingPower - The buying power for stock trades.
 */
export type ProjectedBalances = {
  availableFunds: number;
  availableFundsNonMarginableTrade: number;
  buyingPower: number;
  dayTradingBuyingPower: number;
  dayTradingBuyingPowerCall: number;
  maintenanceCall: number;
  regTCall: number;
  isInCall: number;
  stockBuyingPower: number;
};

/**
 * Represents data related to a financial instrument.
 * @typedef {Object} PositionInstrumentData
 * @property {string} assetType - The type of asset (e.g., "EQUITY").
 * @property {string} cusip - The CUSIP of the instrument.
 * @property {string} symbol - The symbol of the instrument.
 */
export type PositionInstrumentData = {
  assetType: string;
  cusip: string;
  symbol: string;
};

/**
 * Represents data related to a trading position.
 * @typedef {Object} PositionData
 * @property {number} shortQuantity - The quantity of short positions.
 * @property {number} averagePrice - The average price of the positions.
 * @property {number} currentDayCost - The current day cost.
 * @property {number} currentDayProfitLoss - The current day profit or loss.
 * @property {number} currentDayProfitLossPercentage - The percentage of profit or loss for the current day.
 * @property {number} longQuantity - The quantity of long positions.
 * @property {number} settledLongQuantity - The settled quantity of long positions.
 * @property {number} settledShortQuantity - The settled quantity of short positions.
 * @property {PositionInstrumentData} instrument - Information about the financial instrument.
 * @property {number} marketValue - The market value of the positions.
 * @property {number} maintenanceRequirement - The maintenance requirement.
 * @property {number} previousSessionLongQuantity - The quantity of long positions from the previous session.
 */
export type PositionData = {
  shortQuantity: number;
  averagePrice: number;
  currentDayCost: number;
  currentDayProfitLoss: number;
  currentDayProfitLossPercentage: number;
  longQuantity: number;
  settledLongQuantity: number;
  settledShortQuantity: number;
  instrument: PositionInstrumentData;
  marketValue: number;
  maintenanceRequirement: number;
  previousSessionLongQuantity: number;
};

export type TDAmeritradeAccount = {
  securitiesAccount: {
    accountId: TDAmeritradeAccountID;
    currentBalances: CurrentBalances;
    initialBalances: InitialBalances;
    projectedBalances: ProjectedBalances;
    isClosingOnlyRestricted: boolean;
    isDayTrader: boolean;
    roundtrips: number;
    type: string;
    positions: PositionData[];
  }
}

/**
 * Represents multiple watchlists.
 * @typedef {TDAmeritradeAccount[]} TDAmeritradeAccounts
 */
export type TDAmeritradeAccounts = TDAmeritradeAccount[];

/**
 * Represents a delay status for various exchanges.
 * @typedef {Object} ExchangeDelayStatus
 * @property {boolean} isNyseDelayed - Indicates if NYSE data is delayed.
 * @property {boolean} isNasdaqDelayed - Indicates if NASDAQ data is delayed.
 * @property {boolean} isOpraDelayed - Indicates if OPRA data is delayed.
 * @property {boolean} isAmexDelayed - Indicates if AMEX data is delayed.
 * @property {boolean} isCmeDelayed - Indicates if CME data is delayed.
 * @property {boolean} isIceDelayed - Indicates if ICE data is delayed.
 * @property {boolean} isForexDelayed - Indicates if Forex data is delayed.
 */
export type ExchangeDelayStatus = {
  isNyseDelayed: boolean;
  isNasdaqDelayed: boolean;
  isOpraDelayed: boolean;
  isAmexDelayed: boolean;
  isCmeDelayed: boolean;
  isIceDelayed: boolean;
  isForexDelayed: boolean;
};

/**
 * Represents a single streamer subscription key.
 * @typedef {Object} StreamerSubscriptionKey
 * @property {string} key - The subscription key.
 */
export type StreamerSubscriptionKey = {
  key: string
};

/**
 * Represents an array of streamer subscription keys.
 * @typedef {Object} StreamerSubscriptionKeys
 * @property {StreamerSubscriptionKey[]} keys - An array of streamer subscription keys.
 */
export type StreamerSubscriptionKeys = {
  keys: StreamerSubscriptionKey[]
};

/**
 * Represents streamer information.
 * @typedef {Object} StreamerInfo
 * @property {string} accessLevel - The access level of the streamer.
 * @property {string} acl - The ACL (Access Control List) of the streamer.
 * @property {string} appId - The application ID of the streamer.
 * @property {string} streamerBinaryUrl - The binary URL of the streamer.
 * @property {string} streamerSocketUrl - The socket URL of the streamer.
 * @property {string} token - The token for authentication.
 * @property {Date} tokenTimestamp - The timestamp of the token.
 * @property {string} userGroup - The user group of the streamer.
 */
export type StreamerInfo = {
  accessLevel: string;
  acl: string;
  appId: string;
  streamerBinaryUrl: string;
  streamerSocketUrl: string;
  token: string;
  tokenTimestamp: Date;
  userGroup: string;
}

/**
 * Represents principal data.
 * @typedef {Object} UserPrincipalsData
 * @property {string} accessLevel - The access level of the principal.
 * @property {Object} exchangeAgreements - Exchange agreements status.
 * @property {'ACCEPTED' | 'REJECTED'} exchangeAgreements.NASDAQ_EXCHANGE_AGREEMENT - NASDAQ exchange agreement status.
 * @property {'ACCEPTED' | 'REJECTED'} exchangeAgreements.NYSE_EXCHANGE_AGREEMENT - NYSE exchange agreement status.
 * @property {'ACCEPTED' | 'REJECTED'} exchangeAgreements.OPRA_EXCHANGE_AGREEMENT - OPRA exchange agreement status.
 * @property {Date | string | number | null} lastLoginTime - The timestamp of the last login time.
 * @property {Date | string | number | null} loginTime - The timestamp of the login time.
 * @property {TDAmeritradeAccountID} primaryAccountId - The primary account ID.
 * @property {'PROFESSIONAL' | 'NON_PROFESSIONAL'} professionaStatus - The professional status.
 * @property {boolean} stalePassword - Indicates if the password is stale.
 * @property {Date | string | number | null} tokenExpirationTime - The timestamp of the token expiration time.
 * @property {string} userCdDomainId - The user's CD domain ID.
 * @property {string} userId - The user ID.
 * @property {StreamerSubscriptionKeys[]} streamerSubscriptionKeys - An array of streamer subscription keys.
 * @property {ExchangeDelayStatus} quotes - Exchange delay status.
 * @property {StreamerInfo} streamerInfo - Streamer information.
 */
export type UserPrincipalsData = {
  accessLevel: string;
  exchangeAgreements: {
    NASDAQ_EXCHANGE_AGREEMENT: 'ACCEPTED' | 'REJECTED';
    NYSE_EXCHANGE_AGREEMENT: 'ACCEPTED' | 'REJECTED';
    OPRA_EXCHANGE_AGREEMENT: 'ACCEPTED' | 'REJECTED';
  };
  lastLoginTime: Date | string | number | null;
  loginTime: Date | string | number | null;
  primaryAccountId: TDAmeritradeAccountID;
  professionaStatus: 'PROFESSIONAL' | 'NON_PROFESSIONAL';
  stalePassword: boolean;
  tokenExpirationTime: Date | string | number | null;
  userCdDomainId: string;
  userId: string;
  streamerSubscriptionKeys: StreamerSubscriptionKeys[];
  quotes: ExchangeDelayStatus;
  streamerInfo: StreamerInfo;
}