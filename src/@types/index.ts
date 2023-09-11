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

export type OrderDescription =
  | 'BUY TRADE'
  | 'SELL TRADE'
  | 'SHORT SALE'
  | 'CLOSE SHORT POSITION';

export type AssetType = 'EQUITY' | 'OPTION';

export type AcceptedOrRejected = 'ACCEPTED' | 'REJECTED';

export type GetTransactionsType =
  | 'ALL'
  | 'TRADE'
  | 'BUY_ONLY'
  | 'SELL_ONLY'
  | 'CASH_IN_OR_CASH_OUT'
  | 'CHECKING'
  | 'DIVIDEND'
  | 'INTEREST'
  | 'ADVISOR_FEES'
  | 'OTHER';

/**
 * ITM: In-the-money
 * NTM: Near-the-money
 * OTM: Out-of-the-money
 * SAK: Strikes Above Market
 * SBK: Strikes Below Market
 * SNK: Strikes Near Market
 * ALL: All Strikes
 */
export type OptionContractRange =
  | 'ALL'
  | 'ITM'
  | 'OTM'
  | 'NTM'
  | 'SAK'
  | 'SBK'
  | 'SNK';

/**
 * S: Standard contracts
 * NS: Non-standard contracts
 * ALL: All contracts
 */
export type OptionContractType = 'S' | 'NS' | 'ALL';

/** Represents multiple watchlists. */
export type TDAmeritradeAccounts = TDAmeritradeAccount[];

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
  description: OrderDescription;
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

/** Represents Instrument data. */
export type InstrumentData = {
  /** The CUSIP (Committee on Uniform Securities Identification Procedures) number. */
  cusip: CUSIP;
  /** The stock symbol. */
  symbol: TickerSymbol;
  /** The description of the stock. */
  description?: string;
  /** The exchange where the stock is traded. */
  exchange?: string;
  /** The asset type, such as "EQUITY". */
  assetType: AssetType;
};

/** Represents Quote data. */
export type QuoteData = {
  /** The asset type. */
  assetType: AssetType;
  /** The asset main type. */
  assetMainType: string;
  /** The CUSIP. */
  cusip: CUSIP;
  /** The asset sub type. */
  assetSubType: string;
  /** The stock symbol. */
  symbol: TickerSymbol;
  /** The stock description. */
  description: string;
  /** The bid price. */
  bidPrice: number;
  /** The bid size. */
  bidSize: number;
  /** The bid ID. */
  bidId: string;
  /** The ask price. */
  askPrice: number;
  /** The ask size. */
  askSize: number;
  /** The ask ID. */
  askId: string;
  /** The last price. */
  lastPrice: number;
  /** The last size. */
  lastSize: number;
  /** The last ID. */
  lastId: string;
  /** The opening price. */
  openPrice: number;
  /** The highest price of the day. */
  highPrice: number;
  /** The lowest price of the day. */
  lowPrice: number;
  /** The bid tick. */
  bidTick: string;
  /** The closing price. */
  closePrice: number;
  /** The net price change. */
  netChange: number;
  /** The total volume. */
  totalVolume: number;
  /** The quote time in long format. */
  quoteTimeInLong: number;
  /** The trade time in long format. */
  tradeTimeInLong: number;
  /** The mark price. */
  mark: number;
  /** The exchange. */
  exchange: string;
  /** The exchange name. */
  exchangeName: string;
  /** Indicates if it's marginable. */
  marginable: boolean;
  /** Indicates if it's shortable. */
  shortable: boolean;
  /** The volatility. */
  volatility: number;
  /** The number of digits. */
  digits: number;
  /** The 52-week high price. */
  '52WkHigh': number;
  /** The 52-week low price. */
  '52WkLow': number;
  /** The NAV (Net Asset Value). */
  nAV: number;
  /** The P/E (Price-to-Earnings) ratio. */
  peRatio: number;
  /** The dividend amount. */
  divAmount: number;
  /** The dividend yield. */
  divYield: number;
  /** The dividend date. */
  divDate: string;
  /** The security status. */
  securityStatus: string;
  /** The last price in the regular market. */
  regularMarketLastPrice: number;
  /** The last size in the regular market. */
  regularMarketLastSize: number;
  /** The net change in the regular market. */
  regularMarketNetChange: number;
  /** The trade time in long format in the regular market. */
  regularMarketTradeTimeInLong: number;
  /** The net percent change in double format. */
  netPercentChangeInDouble: number;
  /** The mark change in double format. */
  markChangeInDouble: number;
  /** The mark percent change in double format. */
  markPercentChangeInDouble: number;
  /** The percent change in double format. */
  regularMarketPercentChangeInDouble: number;
  /** Indicates if the data is delayed. */
  delayed: boolean;
  /** Indicates if real-time data is entitled. */
  realtimeEntitled: boolean;
};

/** Represents fundamental data for a stock. */
export type Fundamentals = {
  /** The stock symbol. */
  symbol: TickerSymbol;
  /** The 52-week high price. */
  high52: number;
  /** The 52-week low price. */
  low52: number;
  /** The dividend amount. */
  dividendAmount: number;
  /** The dividend yield. */
  dividendYield: number;
  /** The dividend date. */
  dividendDate: string;
  /** The Price-to-Earnings (P/E) ratio. */
  peRatio: number;
  /** The Price/Earnings to Growth (PEG) ratio. */
  pegRatio: number;
  /** The Price-to-Book (P/B) ratio. */
  pbRatio: number;
  /** The Price-to-Revenue (P/R) ratio. */
  prRatio: number;
  /** The Price-to-Cash Flow (P/CF) ratio. */
  pcfRatio: number;
  /** The gross margin trailing twelve months (TTM). */
  grossMarginTTM: number;
  /** The gross margin most recent quarter (MRQ). */
  grossMarginMRQ: number;
  /** The net profit margin TTM. */
  netProfitMarginTTM: number;
  /** The net profit margin MRQ. */
  netProfitMarginMRQ: number;
  /** The operating margin TTM. */
  operatingMarginTTM: number;
  /** The operating margin MRQ. */
  operatingMarginMRQ: number;
  /** The return on equity. */
  returnOnEquity: number;
  /** The return on assets. */
  returnOnAssets: number;
  /** The return on investment. */
  returnOnInvestment: number;
  /** The quick ratio. */
  quickRatio: number;
  /** The current ratio. */
  currentRatio: number;
  /** The interest coverage. */
  interestCoverage: number;
  /** The total debt to capital ratio. */
  totalDebtToCapital: number;
  /** The long-term debt to equity ratio. */
  ltDebtToEquity: number;
  /** The total debt to equity ratio. */
  totalDebtToEquity: number;
  /** The earnings per share TTM. */
  epsTTM: number;
  /** The percentage change in earnings per share TTM. */
  epsChangePercentTTM: number;
  /** The change in earnings per share in a year. */
  epsChangeYear: number;
  /** The overall change in earnings per share. */
  epsChange: number;
  /** The change in revenue in a year. */
  revChangeYear: number;
  /** The change in revenue TTM. */
  revChangeTTM: number;
  /** The percentage change in revenue. */
  revChangeIn: number;
  /** The number of outstanding shares. */
  sharesOutstanding: number;
  /** The market capitalization (float). */
  marketCapFloat: number;
  /** The total market capitalization. */
  marketCap: number;
  /** The book value per share. */
  bookValuePerShare: number;
  /** The short interest to float ratio. */
  shortIntToFloat: number;
  /** The short interest days to cover. */
  shortIntDayToCover: number;
  /** The 3-year dividend growth rate. */
  divGrowthRate3Year: number;
  /** The dividend payment amount. */
  dividendPayAmount: number;
  /** The dividend payment date. */
  dividendPayDate: string;
  /** The beta value. */
  beta: number;
  /** The average volume over 1 day. */
  vol1DayAvg: number;
  /** The average volume over 10 days. */
  vol10DayAvg: number;
  /** The average volume over 3 months. */
  vol3MonthAvg: number;
};

/** Represents Fundamental Data */
export type FundamentalData = InstrumentData & {
  /** Fundamental data for the stock. */
  fundamental: Fundamentals;
};

/** Represents Open, High, Low, Close Values. */
export type OHLC = {
  /** The opening price. */
  open: number;
  /** The highest price during the period. */
  high: number;
  /** The lowest price during the period. */
  low: number;
  /** The closing price. */
  close: number;
};

/** Represents OHLC with Volume Data. */
export type OHLCVolume = OHLC & {
  /** The trading volume. */
  volume: number;
};

/** Represents a candlestick. */
export type Candlestick = OHLCVolume & {
  /** The timestamp of the candlestick. */
  datetime: number;
};

/** Represents Price History Data. */
export type PriceHistory = {
  /** An array of candlesticks. */
  candles: Candlestick[];
  /** The symbol associated with the data. */
  symbol: TickerSymbol;
  /** Indicates whether the data is empty. */
  empty: boolean;
};

/** Represents option contract data. */
export type OptionContractData = {
  /** The option type (e.g., "CALL" or "PUT"). */
  putCall: 'PUT' | 'CALL';
  /** The option symbol. */
  symbol: TickerSymbol;
  /** A description of the option contract. */
  description: string;
  /** The exchange where the option is traded. */
  exchangeName: string;
  /** The bid price for the option. */
  bid: number;
  /** The ask price for the option. */
  ask: number;
  /** The last traded price for the option. */
  last: number;
  /** The mark price for the option. */
  mark: number;
  /** The size of the bid for the option. */
  bidSize: number;
  /** The size of the ask for the option. */
  askSize: number;
  /** The bid and ask sizes (e.g., "45X25"). */
  bidAskSize: string;
  /** The size of the last trade for the option. */
  lastSize: number;
  /** The highest price of the option. */
  highPrice: number;
  /** The lowest price of the option. */
  lowPrice: number;
  /** The opening price of the option. */
  openPrice: number;
  /** The closing price of the option. */
  closePrice: number;
  /** The total trading volume for the option. */
  totalVolume: number;
  /** The date of the last trade (nullable). */
  tradeDate: Date | number | null;
  /** The timestamp of the last trade. */
  tradeTimeInLong: number;
  /** The timestamp of the quote. */
  quoteTimeInLong: number;
  /** The net change in the option price. */
  netChange: number;
  /** The volatility of the option. */
  volatility: number;
  /** The delta value of the option. */
  delta: number;
  /** The gamma value of the option. */
  gamma: number;
  /** The theta value of the option. */
  theta: number;
  /** The vega value of the option. */
  vega: number;
  /** The rho value of the option. */
  rho: number;
  /** The open interest in the option. */
  openInterest: number;
  /** The time value of the option. */
  timeValue: number;
  /** The theoretical option value. */
  theoreticalOptionValue: number;
  /** The theoretical volatility of the option. */
  theoreticalVolatility: number;
  /** The list of option deliverables (nullable). */
  optionDeliverablesList: string | null;
  /** The strike price of the option. */
  strikePrice: number;
  /** The expiration date of the option (timestamp). */
  expirationDate: number;
  /** The number of days to option expiration. */
  daysToExpiration: number;
  /** The type of expiration (e.g., "S" for standard). */
  expirationType: string;
  /** The last trading day (timestamp). */
  lastTradingDay: number;
  /** The multiplier for the option (e.g., 100 for standard options). */
  multiplier: number;
  /** The settlement type (e.g., " " for space). */
  settlementType: string;
  /** A note about deliverables. */
  deliverableNote: string;
  /** Indicates if the option is an index option (nullable). */
  isIndexOption: boolean | null;
  /** The percentage change in the option price. */
  percentChange: number;
  /** The change in the mark price. */
  markChange: number;
  /** The percentage change in the mark price. */
  markPercentChange: number;
  /** The intrinsic value of the option. */
  intrinsicValue: number;
  /** Indicates if the option is part of the penny pilot program. */
  pennyPilot: boolean;
  /** Indicates if the option is non-standard. */
  nonStandard: boolean;
  /** Indicates if the option is in the money. */
  inTheMoney: boolean;
  /** Indicates if the option is a mini option. */
  mini: boolean;
};

/** Represents information about the underlying asset. */
export type UnderlyingAsset = {
  /** The symbol of the underlying asset. */
  symbol: TickerSymbol;
  /** The description of the underlying asset. */
  description: string;
  /** The change in the underlying asset's price. */
  change: number;
  /** The percentage change in the underlying asset's price. */
  percentChange: number;
  /** The closing price of the underlying asset. */
  close: number;
  /** The timestamp of the underlying asset's quote time. */
  quoteTime: number;
  /** The timestamp of the underlying asset's trade time. */
  tradeTime: number;
  /** The bid price for the underlying asset. */
  bid: number;
  /** The ask price for the underlying asset. */
  ask: number;
  /** The last traded price for the underlying asset. */
  last: number;
  /** The mark price for the underlying asset. */
  mark: number;
  /** The change in the mark price for the underlying asset. */
  markChange: number;
  /** The percentage change in the mark price for the underlying asset. */
  markPercentChange: number;
  /** The size of the bid for the underlying asset. */
  bidSize: number;
  /** The size of the ask for the underlying asset. */
  askSize: number;
  /** The highest price of the underlying asset. */
  highPrice: number;
  /** The lowest price of the underlying asset. */
  lowPrice: number;
  /** The opening price of the underlying asset. */
  openPrice: number;
  /** The total trading volume for the underlying asset. */
  totalVolume: number;
  /** The name of the exchange where the underlying asset is traded. */
  exchangeName: string;
  /** The fifty-two week high price of the underlying asset. */
  fiftyTwoWeekHigh: number;
  /** The fifty-two week low price of the underlying asset. */
  fiftyTwoWeekLow: number;
  /** Indicates if the data is delayed for the underlying asset. */
  delayed: boolean;
};

/** Represents option chain data. */
export type OptionChainData = {
  /** The symbol. */
  symbol: TickerSymbol;
  /** The status of the option chain (e.g., "SUCCESS"). */
  status: string;
  /** Information about the underlying asset. */
  underlying: UnderlyingAsset;
  /** The trading strategy (e.g., "SINGLE"). */
  strategy: string;
  /** The interval. */
  interval: number;
  /** Indicates if the data is delayed. */
  isDelayed: boolean;
  /** Indicates if the data is related to an index. */
  isIndex: boolean;
  /** The interest rate. */
  interestRate: number;
  /** The price of the underlying asset. */
  underlyingPrice: number;
  /** The volatility. */
  volatility: number;
  /** The number of days to expiration. */
  daysToExpiration: number;
  /** The number of contracts. */
  numberOfContracts: number;
  /** Map of put expiration dates and their data. */
  putExpDateMap: Record<string, Record<string, OptionContractData[]>>;
  /** Map of call expiration dates and their data. */
  callExpDateMap: Record<string, Record<string, OptionContractData[]>>;
};

/** Represents an instrument. */
export type WatchlistItemInstrument = {
  /** The symbol of the instrument. */
  symbol: TickerSymbol;
  /** The asset type of the instrument (e.g., "EQUITY"). */
  assetType: AssetType;
};

/** Represents an instrument within a watchlist. */
export type WatchlistItem = {
  /** The sequence ID of the watchlist item. */
  sequenceId: number;
  /** The quantity of the instrument. */
  quantity: number;
  /** The average price of the instrument. */
  averagePrice: number;
  /** The commission associated with the instrument. */
  commission: number;
  /** The instrument details. */
  instrument: WatchlistItemInstrument;
};

/** Represents a watchlist. */
export type Watchlist = {
  /** The name of the watchlist. */
  name: string;
  /** The ID of the watchlist. */
  watchlistId: string;
  /** The ID of the account associated with the watchlist. */
  accountId: string;
  /** The list of watchlist items. */
  watchlistItems: WatchlistItem[];
};

/** Represents multiple watchlists. */
export type Watchlists = Watchlist[];

/** Represents Current Balances. */
export type CurrentBalances = {
  /** Accrued interest. */
  accruedInterest: number;
  /** Cash balance. */
  cashBalance: number;
  /** Cash receipts. */
  cashReceipts: number;
  /** Long option market value. */
  longOptionMarketValue: number;
  /** Liquidation value. */
  liquidationValue: number;
  /** Long market value. */
  longMarketValue: number;
  /** Money market fund. */
  moneyMarketFund: number;
  /** Savings amount. */
  savings: number;
  /** Short market value. */
  shortMarketValue: number;
  /** Pending deposits. */
  pendingDeposits: number;
  /** Available funds. */
  availableFunds: number;
  /** Available funds for non-marginable trade. */
  availableFundsNonMarginableTrade: number;
  /** Buying power. */
  buyingPower: number;
  /** Buying power for non-marginable trade. */
  buyingPowerNonMarginableTrade: number;
  /** Day trading buying power. */
  dayTradingBuyingPower: number;
  /** Equity. */
  equity: number;
  /** Equity percentage. */
  equityPercentage: number;
  /** Long margin value. */
  longMarginValue: number;
  /** Maintenance call amount. */
  maintenanceCall: number;
  /** Maintenance requirement. */
  maintenanceRequirement: number;
  /** Margin balance. */
  marginBalance: number;
  /** Regulation T call amount. */
  regTCall: number;
  /** Short balance. */
  shortBalance: number;
  /** Short margin value. */
  shortMarginValue: number;
  /** Short option market value. */
  shortOptionMarketValue: number;
  /** Special memorandum account (SMA). */
  sma: number;
  /** Mutual fund value. */
  mutualFundValue: number;
  /** Bond value. */
  bondValue: number;
};

/** Represents Initial Balances. */
export type InitialBalances = {
  /** Accrued interest. */
  accruedInterest: number;
  /** Available funds for non-marginable trade. */
  availableFundsNonMarginableTrade: number;
  /** Bond value. */
  bondValue: number;
  /** Buying power. */
  buyingPower: number;
  /** Cash balance. */
  cashBalance: number;
  /** Cash available for trading. */
  cashAvailableForTrading: number;
  /** Cash receipts. */
  cashReceipts: number;
  /** Day trading buying power. */
  dayTradingBuyingPower: number;
  /** Day trading buying power call. */
  dayTradingBuyingPowerCall: number;
  /** Day trading equity call. */
  dayTradingEquityCall: number;
  /** Equity. */
  equity: number;
  /** Equity percentage. */
  equityPercentage: number;
  /** Liquidation value. */
  liquidationValue: number;
  /** Long margin value. */
  longMarginValue: number;
  /** Long option market value. */
  longOptionMarketValue: number;
  /** Long stock value. */
  longStockValue: number;
  /** Maintenance call amount. */
  maintenanceCall: number;
  /** Maintenance requirement. */
  maintenanceRequirement: number;
  /** Margin amount. */
  margin: number;
  /** Margin equity. */
  marginEquity: number;
  /** Money market fund. */
  moneyMarketFund: number;
  /** Mutual fund value. */
  mutualFundValue: number;
  /** Regulation T call amount. */
  regTCall: number;
  /** Short margin value. */
  shortMarginValue: number;
  /** Short option market value. */
  shortOptionMarketValue: number;
  /** Short stock value. */
  shortStockValue: number;
  /** Total cash. */
  totalCash: number;
  /** Is in call status. */
  isInCall: number;
  /** Pending deposits. */
  pendingDeposits: number;
  /** Margin balance. */
  marginBalance: number;
  /** Short balance. */
  shortBalance: number;
  /** Account value. */
  accountValue: number;
};

/** Represents Projected Balances. */
export type ProjectedBalances = {
  /** The available funds in the account. */
  availableFunds: number;
  /** The available funds for non-marginable trades. */
  availableFundsNonMarginableTrade: number;
  /** The buying power of the account. */
  buyingPower: number;
  /** The buying power for day trading. */
  dayTradingBuyingPower: number;
  /** The day trading buying power call. */
  dayTradingBuyingPowerCall: number;
  /** The maintenance call. */
  maintenanceCall: number;
  /** The Regulation T (Reg T) call. */
  regTCall: number;
  /** Indicates whether the account is in a call state. */
  isInCall: number;
  /** The buying power for stock trades. */
  stockBuyingPower: number;
};

/** Represents Positions Data. */
export type PositionData = {
  /** The quantity of short positions. */
  shortQuantity: number;
  /** The average price of the positions. */
  averagePrice: number;
  /** The current day cost. */
  currentDayCost: number;
  /** The current day profit or loss. */
  currentDayProfitLoss: number;
  /** The percentage of profit or loss for the current day. */
  currentDayProfitLossPercentage: number;
  /** The quantity of long positions. */
  longQuantity: number;
  /** The settled quantity of long positions. */
  settledLongQuantity: number;
  /** The settled quantity of short positions. */
  settledShortQuantity: number;
  /** Information about the financial instrument. */
  instrument: InstrumentData;
  /** The market value of the positions. */
  marketValue: number;
  /** The maintenance requirement. */
  maintenanceRequirement: number;
  /** The quantity of long positions from the previous session. */
  previousSessionLongQuantity: number;
};

/** Represents a TD Ameritrade account. */
export type TDAmeritradeAccount = {
  /** Information about the securities account. */
  securitiesAccount: {
    /** The account ID. */
    accountId: TDAmeritradeAccountID;
    /** The current balances. */
    currentBalances: CurrentBalances;
    /** The initial balances. */
    initialBalances: InitialBalances;
    /** The projected balances. */
    projectedBalances: ProjectedBalances;
    /** Indicates if the account is closing-only restricted. */
    isClosingOnlyRestricted: boolean;
    /** Indicates if the account is a day trader account. */
    isDayTrader: boolean;
    /** The number of round trips. */
    roundtrips: number;
    /** The account type. */
    type: string;
    /** The positions in the account. */
    positions: PositionData[];
  };
};

/** Represents a delay status for various exchanges. */
export type ExchangeDelayStatus = {
  /** Indicates if NYSE data is delayed. */
  isNyseDelayed: boolean;
  /** Indicates if NASDAQ data is delayed. */
  isNasdaqDelayed: boolean;
  /** Indicates if OPRA data is delayed. */
  isOpraDelayed: boolean;
  /** Indicates if AMEX data is delayed. */
  isAmexDelayed: boolean;
  /** Indicates if CME data is delayed. */
  isCmeDelayed: boolean;
  /** Indicates if ICE data is delayed. */
  isIceDelayed: boolean;
  /** Indicates if Forex data is delayed. */
  isForexDelayed: boolean;
};

/** Represents a single streamer subscription key. */
export type StreamerSubscriptionKey = {
  /** The subscription key. */
  key: string;
};

/** Represents an array of streamer subscription keys. */
export type StreamerSubscriptionKeys = {
  /** An array of streamer subscription keys. */
  keys: StreamerSubscriptionKey[];
};

/** Represents streamer information. */
export type StreamerInfo = {
  /** The access level of the streamer. */
  accessLevel: string;
  /** The ACL (Access Control List) of the streamer. */
  acl: string;
  /** The application ID of the streamer. */
  appId: string;
  /** The binary URL of the streamer. */
  streamerBinaryUrl: string;
  /** The socket URL of the streamer. */
  streamerSocketUrl: string;
  /** The token for authentication. */
  token: string;
  /** The timestamp of the token. */
  tokenTimestamp: DateLikeNullable;
  /** The user group of the streamer. */
  userGroup: string;
};

/** Represents principal data. */
export type UserPrincipalsData = {
  /** The access level of the principal. */
  accessLevel: string;
  /** Exchange agreements status. */
  exchangeAgreements: {
    /** NASDAQ exchange agreement status. */
    NASDAQ_EXCHANGE_AGREEMENT: AcceptedOrRejected;
    /** NYSE exchange agreement status. */
    NYSE_EXCHANGE_AGREEMENT: AcceptedOrRejected;
    /** OPRA exchange agreement status. */
    OPRA_EXCHANGE_AGREEMENT: AcceptedOrRejected;
  };
  /** The timestamp of the last login time. */
  lastLoginTime: DateLikeNullable;
  /** The timestamp of the login time. */
  loginTime: DateLikeNullable;
  /** The primary account ID. */
  primaryAccountId: TDAmeritradeAccountID;
  /** The professional status. */
  professionaStatus: 'PROFESSIONAL' | 'NON_PROFESSIONAL';
  /** Indicates if the password is stale. */
  stalePassword: boolean;
  /** The timestamp of the token expiration time. */
  tokenExpirationTime: DateLikeNullable;
  /** The user's CD domain ID. */
  userCdDomainId: string;
  /** The user ID. */
  userId: string;
  /** An array of streamer subscription keys. */
  streamerSubscriptionKeys: StreamerSubscriptionKeys[];
  /** Exchange delay status. */
  quotes: ExchangeDelayStatus;
  /** Streamer information. */
  streamerInfo: StreamerInfo;
};

/** Represents fees associated with a trade transaction. */
export type TradeTransactionFees = {
  /** The R fee. */
  rFee: number;
  /** Additional fees. */
  additionalFee: number;
  /** CDSC (Contingent Deferred Sales Charge) fee. */
  cdscFee: number;
  /** Registration fee. */
  regFee: number;
  /** Other charges. */
  otherCharges: number;
  /** Commission fee. */
  commission: number;
  /** Options registration fee. */
  optRegFee: number;
  /** SEC (U.S. Securities and Exchange Commission) fee. */
  secFee: number;
};

/** Represents a trade transaction item. */
export type TradeTransactionItem = {
  /** The ID of the account associated with the transaction item. */
  accountId: TDAmeritradeAccountID;
  /** The amount of the transaction item. */
  amount: number;
  /** The price of the transaction item. */
  price: number;
  /** The cost associated with the transaction item. */
  cost: number;
  /** The instruction for the transaction item (e.g., "BUY"). */
  instruction: BuyOrder | SellOrder;
  /** Information about the instrument involved in the transaction item. */
  instrument: InstrumentData;
};

/** Represents a trade transaction. */
export type TransactionsData = {
  /** The type of transaction (e.g., "TRADE"). */
  type: string;
  /** The sub-account associated with the transaction. */
  subAccount: string;
  /** The settlement date of the transaction (e.g., "2022-09-14"). */
  settlementDate: DateLikeNullable;
  /** The ID of the order associated with the transaction. */
  orderId: string;
  /** The net amount of the transaction. */
  netAmount: number;
  /** The date and time of the transaction in ISO 8601 format. */
  transactionDate: DateLikeNullable;
  /** The date and time when the order was placed in ISO 8601 format. */
  orderDate: DateLikeNullable;
  /** The sub-type of the transaction (e.g., "BY"). */
  transactionSubType: string;
  /** The unique ID of the transaction. */
  transactionId: number;
  /** Indicates whether the transaction affects the cash balance. */
  cashBalanceEffectFlag: boolean;
  /** A description of the transaction. */
  description: string;
  /** Object containing various fee information related to the transaction. */
  fees: TradeTransactionFees;
  /** Detailed information about the transaction item. */
  transactionItem: TradeTransactionItem;
};
