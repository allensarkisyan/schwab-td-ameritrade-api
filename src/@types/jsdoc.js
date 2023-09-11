/** @typedef {Date | string | number | null} DateLikeNullable */
/** @typedef {string} TickerSymbol */
/** @typedef {string} CUSIP */
/** @typedef {string} TDAmeritradeAccountID */
/** @typedef {'EQUITY' | 'OPTION'} AssetType */
/** @typedef {'ACCEPTED' | 'REJECTED'} AcceptedOrRejected */
/** @typedef {'BUY' | 'BUY_TO_OPEN' | 'BUY_TO_CLOSE' | 'BUY_TO_COVER'} BuyOrder */
/** @typedef {'SELL' | 'SELL_TO_OPEN' | 'SELL_TO_CLOSE' | 'SELL_SHORT'} SellOrder */
/** @typedef {'BUY TRADE' | 'SELL TRADE' | 'SHORT SALE' | 'CLOSE SHORT POSITION'} OrderDescription */
/** @typedef {'ALL' | 'TRADE' | 'BUY_ONLY' | 'SELL_ONLY' | 'CASH_IN_OR_CASH_OUT' | 'CHECKING' | 'DIVIDEND' | 'INTEREST' | 'ADVISOR_FEES' | 'OTHER'} GetTransactionsType */
/** @typedef {TDAmeritradeAccount[]} TDAmeritradeAccounts */

/**
 * Represents a TD Ameritrade account.
 * @typedef {Object} TDAmeritradeAccount
 * @property {Object} securitiesAccount - Information about the securities account.
 * @property {TDAmeritradeAccountID} securitiesAccount.accountId - The account ID.
 * @property {CurrentBalances} securitiesAccount.currentBalances - The current balances.
 * @property {InitialBalances} securitiesAccount.initialBalances - The initial balances.
 * @property {ProjectedBalances} securitiesAccount.projectedBalances - The projected balances.
 * @property {boolean} securitiesAccount.isClosingOnlyRestricted - Indicates if the account is closing-only restricted.
 * @property {boolean} securitiesAccount.isDayTrader - Indicates if the account is a day trader account.
 * @property {number} securitiesAccount.roundtrips - The number of round trips.
 * @property {string} securitiesAccount.type - The account type.
 * @property {PositionData[]} securitiesAccount.positions - The positions in the account.
 */

/**
 * Represents stock information.
 * @typedef {Object} InstrumentData
 * @property {CUSIP} cusip - The CUSIP (Committee on Uniform Securities Identification Procedures) number.
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {string} description - The description of the stock.
 * @property {string} exchange - The exchange where the stock is traded.
 * @property {AssetType} assetType - The asset type, such as "EQUITY".
 */

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
 * Represents Fundamental Data
 * @typedef {Object} FundamentalData
 * @property {Fundamentals} fundamental - Fundamental data for the stock.
 * @property {CUSIP} cusip - The CUSIP.
 * @property {TickerSymbol} symbol - The stock symbol.
 * @property {string} description - The stock description.
 * @property {string} exchange - The exchange where the stock is traded.
 * @property {string} assetType - The asset type.
 */

/**
 * Represents Open, High, Low Close Values
 * @typedef {Object} OHLC
 * @property {number} open - The opening price.
 * @property {number} high - The highest price during the period.
 * @property {number} low - The lowest price during the period.
 * @property {number} close - The closing price.
 */

/**
 * Represents OHLC with Volume Values
 * @typedef {Object} OHLCVolume
 * @property {number} open - The opening price.
 * @property {number} high - The highest price during the period.
 * @property {number} low - The lowest price during the period.
 * @property {number} close - The closing price.
 * @property {number} volume - The trading volume.
 */

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

/**
 * Represents candlestick data.
 * @typedef {Object} PriceHistory
 * @property {Candlestick[]} candles - An array of candlesticks.
 * @property {TickerSymbol} symbol - The symbol associated with the data.
 * @property {boolean} empty - Indicates whether the data is empty.
 */

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
 * @property {Object.<string, Object.<string, OptionContractData[]>>} putExpDateMap - Map of put expiration dates and their data.
 * @property {Object.<string, Object.<string, OptionContractData[]>>} callExpDateMap - Map of call expiration dates and their data.
 */

/**
 * Represents an instrument.
 * @typedef {Object} WatchlistItemInstrument
 * @property {TickerSymbol} symbol - The symbol of the instrument.
 * @property {AssetType} assetType - The asset type of the instrument (e.g., "EQUITY").
 */

/**
 * Represents an instrument within a watchlist.
 * @typedef {Object} WatchlistItem
 * @property {number} sequenceId - The sequence ID of the watchlist item.
 * @property {number} quantity - The quantity of the instrument.
 * @property {number} averagePrice - The average price of the instrument.
 * @property {number} commission - The commission associated with the instrument.
 * @property {WatchlistItemInstrument} instrument - The instrument details.
 */

/**
 * Represents a watchlist.
 * @typedef {Object} Watchlist
 * @property {string} name - The name of the watchlist.
 * @property {string} watchlistId - The ID of the watchlist.
 * @property {string} accountId - The ID of the account associated with the watchlist.
 * @property {Array<WatchlistItem>} watchlistItems - The list of watchlist items.
 */

/**
 * Represents multiple watchlists.
 * @typedef {Watchlist[]} Watchlists
 */

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
 * @property {InstrumentData} instrument - Information about the financial instrument.
 * @property {number} marketValue - The market value of the positions.
 * @property {number} maintenanceRequirement - The maintenance requirement.
 * @property {number} previousSessionLongQuantity - The quantity of long positions from the previous session.
 */

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

/**
 * Represents a single streamer subscription key.
 * @typedef {Object} StreamerSubscriptionKey
 * @property {string} key - The subscription key.
 */

/**
 * Represents an array of streamer subscription keys.
 * @typedef {Object} StreamerSubscriptionKeys
 * @property {StreamerSubscriptionKey[]} keys - An array of streamer subscription keys.
 */

/**
 * Represents streamer information.
 * @typedef {Object} StreamerInfo
 * @property {string} accessLevel - The access level of the streamer.
 * @property {string} acl - The ACL (Access Control List) of the streamer.
 * @property {string} appId - The application ID of the streamer.
 * @property {string} streamerBinaryUrl - The binary URL of the streamer.
 * @property {string} streamerSocketUrl - The socket URL of the streamer.
 * @property {string} token - The token for authentication.
 * @property {DateLikeNullable} tokenTimestamp - The timestamp of the token.
 * @property {string} userGroup - The user group of the streamer.
 */

/**
 * Represents principal data.
 * @typedef {Object} UserPrincipalsData
 * @property {string} accessLevel - The access level of the principal.
 * @property {Object} exchangeAgreements - Exchange agreements status.
 * @property {AcceptedOrRejected} exchangeAgreements.NASDAQ_EXCHANGE_AGREEMENT - NASDAQ exchange agreement status.
 * @property {AcceptedOrRejected} exchangeAgreements.NYSE_EXCHANGE_AGREEMENT - NYSE exchange agreement status.
 * @property {AcceptedOrRejected} exchangeAgreements.OPRA_EXCHANGE_AGREEMENT - OPRA exchange agreement status.
 * @property {DateLikeNullable} lastLoginTime - The timestamp of the last login time.
 * @property {DateLikeNullable} loginTime - The timestamp of the login time.
 * @property {TDAmeritradeAccountID} primaryAccountId - The primary account ID.
 * @property {'PROFESSIONAL' | 'NON_PROFESSIONAL'} professionaStatus - The professional status.
 * @property {boolean} stalePassword - Indicates if the password is stale.
 * @property {DateLikeNullable} tokenExpirationTime - The timestamp of the token expiration time.
 * @property {string} userCdDomainId - The user's CD domain ID.
 * @property {string} userId - The user ID.
 * @property {StreamerSubscriptionKeys[]} streamerSubscriptionKeys - An array of streamer subscription keys.
 * @property {ExchangeDelayStatus} quotes - Exchange delay status.
 * @property {StreamerInfo} streamerInfo - Streamer information.
 */

/**
 * Represents fees associated with a trade transaction.
 * @typedef {Object} TradeTransactionFees
 * @property {number} rFee - The R fee.
 * @property {number} additionalFee - Additional fees.
 * @property {number} cdscFee - CDSC (Contingent Deferred Sales Charge) fee.
 * @property {number} regFee - Registration fee.
 * @property {number} otherCharges - Other charges.
 * @property {number} commission - Commission fee.
 * @property {number} optRegFee - Options registration fee.
 * @property {number} secFee - SEC (U.S. Securities and Exchange Commission) fee.
 */

/**
 * Represents a trade transaction item.
 * @typedef {Object} TradeTransactionItem
 * @property {TDAmeritradeAccountID} accountId - The ID of the account associated with the transaction item.
 * @property {number} amount - The amount of the transaction item.
 * @property {number} price - The price of the transaction item.
 * @property {number} cost - The cost associated with the transaction item.
 * @property {BuyOrder | SellOrder} instruction - The instruction for the transaction item (e.g., "BUY").
 * @property {InstrumentData} instrument - Information about the instrument involved in the transaction item.
 */

/**
 * Represents a trade transaction.
 * @typedef {Object} TransactionsData
 * @property {string} type - The type of transaction (e.g., "TRADE").
 * @property {string} subAccount - The sub-account associated with the transaction.
 * @property {DateLikeNullable} settlementDate - The settlement date of the transaction (e.g., "2022-09-14").
 * @property {string} orderId - The ID of the order associated with the transaction.
 * @property {number} netAmount - The net amount of the transaction.
 * @property {DateLikeNullable} transactionDate - The date and time of the transaction in ISO 8601 format.
 * @property {DateLikeNullable} orderDate - The date and time when the order was placed in ISO 8601 format.
 * @property {string} transactionSubType - The sub-type of the transaction (e.g., "BY").
 * @property {number} transactionId - The unique ID of the transaction.
 * @property {boolean} cashBalanceEffectFlag - Indicates whether the transaction affects the cash balance.
 * @property {string} description - A description of the transaction.
 * @property {TradeTransactionFees} fees - Object containing various fee information related to the transaction.
 * @property {TradeTransactionItem} transactionItem - Detailed information about the transaction item.
 */

/**
 * @typedef {Object} TradeTransaction
 * @property {string} orderId
 * @property {OrderDescription} description
 * @property {Object} transactionItem
 * @property {'OPENING' | 'CLOSING'} transactionItem.positionEffect
 * @property {Object} transactionItem.instrument
 * @property {AssetType} transactionItem.instrument.assetType
 * @property {TickerSymbol} transactionItem.instrument.symbol
 * @property {CUSIP} transactionItem.instrument.cusip
 * @property {TickerSymbol} transactionItem.instrument.underlyingSymbol
 */