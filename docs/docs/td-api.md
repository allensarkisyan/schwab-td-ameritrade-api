## Classes

<dl>
<dt><a href="#TDAmeritradeAPI">TDAmeritradeAPI</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#createTDAmeritradeAPIClient">createTDAmeritradeAPIClient(config)</a> ⇒ <code><a href="#TDAmeritradeAPI">TDAmeritradeAPI</a></code></dt>
<dd><p>Creates a new instance of the TD Ameritrade API</p>
</dd>
<dt><a href="#filterBuyTrades">filterBuyTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Buy Trades</p>
</dd>
<dt><a href="#filterSellTrades">filterSellTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Sell Trades</p>
</dd>
<dt><a href="#filterOpeningTrades">filterOpeningTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Opening Trades</p>
</dd>
<dt><a href="#filterClosingTrades">filterClosingTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Closing Trades</p>
</dd>
<dt><a href="#filterOpeningShortSales">filterOpeningShortSales(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Open Short Sale Trades</p>
</dd>
<dt><a href="#filterClosingShortSales">filterClosingShortSales(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Closing Short Sale Trades</p>
</dd>
<dt><a href="#filterOptionTrades">filterOptionTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Option Trades</p>
</dd>
<dt><a href="#filterEquityTrades">filterEquityTrades(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Filter Equity Trades</p>
</dd>
<dt><a href="#groupByOrderId">groupByOrderId(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Order ID</p>
</dd>
<dt><a href="#groupByInstrument">groupByInstrument(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Instrument</p>
</dd>
<dt><a href="#groupByInstrumentSymbol">groupByInstrumentSymbol(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Instrument Symbol</p>
</dd>
<dt><a href="#groupByInstrumentUnderlyingSymbol">groupByInstrumentUnderlyingSymbol(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Instrument Underlying Symbol</p>
</dd>
<dt><a href="#groupByInstrumentCUSIP">groupByInstrumentCUSIP(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Instrument CUSIP</p>
</dd>
<dt><a href="#groupByAssetType">groupByAssetType(trades)</a> ⇒ <code><a href="#TransactionData">Array.&lt;TransactionData&gt;</a></code></dt>
<dd><p>[td-utils.js] - Group Trades by Asset Type</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#DateLikeNullable">DateLikeNullable</a> : <code>Date</code> | <code>string</code> | <code>number</code> | <code>null</code></dt>
<dd></dd>
<dt><a href="#TickerSymbol">TickerSymbol</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#CUSIP">CUSIP</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TDAmeritradeAccountID">TDAmeritradeAccountID</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#AssetType">AssetType</a> : <code>&#x27;EQUITY&#x27;</code> | <code>&#x27;OPTION&#x27;</code></dt>
<dd></dd>
<dt><a href="#AcceptedOrRejected">AcceptedOrRejected</a> : <code>&#x27;ACCEPTED&#x27;</code> | <code>&#x27;REJECTED&#x27;</code></dt>
<dd></dd>
<dt><a href="#PositionEffect">PositionEffect</a> : <code>&#x27;OPENING&#x27;</code> | <code>&#x27;CLOSING&#x27;</code></dt>
<dd></dd>
<dt><a href="#BuyOrder">BuyOrder</a> : <code>&#x27;BUY&#x27;</code> | <code>&#x27;BUY_TO_OPEN&#x27;</code> | <code>&#x27;BUY_TO_CLOSE&#x27;</code> | <code>&#x27;BUY_TO_COVER&#x27;</code></dt>
<dd></dd>
<dt><a href="#SellOrder">SellOrder</a> : <code>&#x27;SELL&#x27;</code> | <code>&#x27;SELL_TO_OPEN&#x27;</code> | <code>&#x27;SELL_TO_CLOSE&#x27;</code> | <code>&#x27;SELL_SHORT&#x27;</code></dt>
<dd></dd>
<dt><a href="#OrderDescription">OrderDescription</a> : <code>&#x27;BUY TRADE&#x27;</code> | <code>&#x27;SELL TRADE&#x27;</code> | <code>&#x27;SHORT SALE&#x27;</code> | <code>&#x27;CLOSE SHORT POSITION&#x27;</code></dt>
<dd></dd>
<dt><a href="#GetTransactionsType">GetTransactionsType</a> : <code>&#x27;ALL&#x27;</code> | <code>&#x27;TRADE&#x27;</code> | <code>&#x27;BUY_ONLY&#x27;</code> | <code>&#x27;SELL_ONLY&#x27;</code> | <code>&#x27;CASH_IN_OR_CASH_OUT&#x27;</code> | <code>&#x27;CHECKING&#x27;</code> | <code>&#x27;DIVIDEND&#x27;</code> | <code>&#x27;INTEREST&#x27;</code> | <code>&#x27;ADVISOR_FEES&#x27;</code> | <code>&#x27;OTHER&#x27;</code></dt>
<dd></dd>
<dt><a href="#TDAmeritradeAccounts">TDAmeritradeAccounts</a> : <code><a href="#TDAmeritradeAccount">Array.&lt;TDAmeritradeAccount&gt;</a></code></dt>
<dd></dd>
<dt><a href="#APIClientConfig">APIClientConfig</a> : <code>Object</code></dt>
<dd><p>Represents the configuration for the API client.</p>
</dd>
<dt><a href="#APIRequestConfig">APIRequestConfig</a> : <code>Object</code></dt>
<dd><p>Represents the configuration for making an API request.</p>
</dd>
<dt><a href="#APIResponse">APIResponse</a> : <code>Object</code></dt>
<dd><p>Represents an API response.</p>
</dd>
<dt><a href="#AuthenticationResponse">AuthenticationResponse</a> : <code>Object</code></dt>
<dd><p>TD Ameritrade API Authentication Response</p>
</dd>
<dt><a href="#RefreshTokenResponse">RefreshTokenResponse</a> : <code>Object</code></dt>
<dd><p>TD Ameritrade API Refresh Token Response</p>
</dd>
<dt><a href="#TDAmeritradeAccount">TDAmeritradeAccount</a> : <code>Object</code></dt>
<dd><p>Represents a TD Ameritrade account.</p>
</dd>
<dt><a href="#InstrumentData">InstrumentData</a> : <code>Object</code></dt>
<dd><p>Represents stock information.</p>
</dd>
<dt><a href="#QuoteData">QuoteData</a> : <code>Object</code></dt>
<dd><p>Represents stock data.</p>
</dd>
<dt><a href="#Fundamentals">Fundamentals</a> : <code>Object</code></dt>
<dd><p>Represents fundamental data for a stock.</p>
</dd>
<dt><a href="#FundamentalData">FundamentalData</a> : <code>Object</code></dt>
<dd><p>Represents Fundamental Data</p>
</dd>
<dt><a href="#OHLC">OHLC</a> : <code>Object</code></dt>
<dd><p>Represents Open, High, Low Close Values</p>
</dd>
<dt><a href="#OHLCVolume">OHLCVolume</a> : <code>Object</code></dt>
<dd><p>Represents OHLC with Volume Values</p>
</dd>
<dt><a href="#Candlestick">Candlestick</a> : <code>Object</code></dt>
<dd><p>Represents a candlestick.</p>
</dd>
<dt><a href="#PriceHistory">PriceHistory</a> : <code>Object</code></dt>
<dd><p>Represents candlestick data.</p>
</dd>
<dt><a href="#OptionContractData">OptionContractData</a> : <code>Object</code></dt>
<dd><p>Represents option contract data.</p>
</dd>
<dt><a href="#UnderlyingAsset">UnderlyingAsset</a> : <code>Object</code></dt>
<dd><p>Represents information about the underlying asset.</p>
</dd>
<dt><a href="#OptionContractDateMap">OptionContractDateMap</a> : <code>Object.&lt;string, Array.&lt;OptionContractData&gt;&gt;</code></dt>
<dd><p>Represents a mapping of option contract data by expiration date.</p>
</dd>
<dt><a href="#OptionChainData">OptionChainData</a> : <code>Object</code></dt>
<dd><p>Represents option chain data.</p>
</dd>
<dt><a href="#WatchlistItemInstrument">WatchlistItemInstrument</a> : <code>Object</code></dt>
<dd><p>Represents an instrument.</p>
</dd>
<dt><a href="#WatchlistItem">WatchlistItem</a> : <code>Object</code></dt>
<dd><p>Represents an instrument within a watchlist.</p>
</dd>
<dt><a href="#Watchlist">Watchlist</a> : <code>Object</code></dt>
<dd><p>Represents a watchlist.</p>
</dd>
<dt><a href="#Watchlists">Watchlists</a> : <code><a href="#Watchlist">Array.&lt;Watchlist&gt;</a></code></dt>
<dd><p>Represents multiple watchlists.</p>
</dd>
<dt><a href="#CurrentBalances">CurrentBalances</a> : <code>Object</code></dt>
<dd><p>Represents an account&#39;s financial summary.</p>
</dd>
<dt><a href="#InitialBalances">InitialBalances</a> : <code>Object</code></dt>
<dd><p>Represents an account&#39;s financial summary.</p>
</dd>
<dt><a href="#ProjectedBalances">ProjectedBalances</a> : <code>Object</code></dt>
<dd><p>Represents account-related data.</p>
</dd>
<dt><a href="#PositionData">PositionData</a> : <code>Object</code></dt>
<dd><p>Represents data related to a trading position.</p>
</dd>
<dt><a href="#ExchangeDelayStatus">ExchangeDelayStatus</a> : <code>Object</code></dt>
<dd><p>Represents a delay status for various exchanges.</p>
</dd>
<dt><a href="#StreamerSubscriptionKey">StreamerSubscriptionKey</a> : <code>Object</code></dt>
<dd><p>Represents a single streamer subscription key.</p>
</dd>
<dt><a href="#StreamerSubscriptionKeys">StreamerSubscriptionKeys</a> : <code>Object</code></dt>
<dd><p>Represents an array of streamer subscription keys.</p>
</dd>
<dt><a href="#StreamerInfo">StreamerInfo</a> : <code>Object</code></dt>
<dd><p>Represents streamer information.</p>
</dd>
<dt><a href="#UserPrincipalsData">UserPrincipalsData</a> : <code>Object</code></dt>
<dd><p>Represents principal data.</p>
</dd>
<dt><a href="#TradeTransactionFees">TradeTransactionFees</a> : <code>Object</code></dt>
<dd><p>Represents fees associated with a trade transaction.</p>
</dd>
<dt><a href="#TransactionItem">TransactionItem</a> : <code>Object</code></dt>
<dd><p>Represents a trade transaction item.</p>
</dd>
<dt><a href="#TransactionData">TransactionData</a> : <code>Object</code></dt>
<dd><p>Represents a trade transaction.</p>
</dd>
<dt><a href="#OrderRequest">OrderRequest</a> : <code>Object</code></dt>
<dd><p>Order Request</p>
</dd>
<dt><a href="#TDAmeritradeOrderLeg">TDAmeritradeOrderLeg</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#OrderData">OrderData</a> : <code>Object</code></dt>
<dd><p>Represents an order object.</p>
</dd>
<dt><a href="#OrderLeg">OrderLeg</a> : <code>Object</code></dt>
<dd><p>Represents an order leg within an order.</p>
</dd>
<dt><a href="#TrendingEquity">TrendingEquity</a> : <code>Object</code></dt>
<dd><p>Represents Market Mover Trending Equity data.</p>
</dd>
<dt><a href="#MarketMovers">MarketMovers</a> : <code>Object</code></dt>
<dd><p>Represents Market Movers - Current Trending Equities of $SPX.X, $COMPX, $DJI</p>
</dd>
</dl>

<a name="TDAmeritradeAPI"></a>

## TDAmeritradeAPI
**Kind**: global class  

* [TDAmeritradeAPI](#TDAmeritradeAPI)
    * [new TDAmeritradeAPI()](#new_TDAmeritradeAPI_new)
    * [.TDAmeritradeAPI](#TDAmeritradeAPI+TDAmeritradeAPI)
        * [new exports.TDAmeritradeAPI([config])](#new_TDAmeritradeAPI+TDAmeritradeAPI_new)
    * [.setUserAccessToken](#TDAmeritradeAPI+setUserAccessToken) ⇒ <code>void</code>
    * [.authenticate](#TDAmeritradeAPI+authenticate) ⇒ <code>Promise.&lt;APIResponse.&lt;(AuthenticationResponse\|null)&gt;&gt;</code>
    * [.refreshAccessToken](#TDAmeritradeAPI+refreshAccessToken) ⇒ <code>Promise.&lt;APIResponse.&lt;(RefreshTokenResponse\|null)&gt;&gt;</code>
    * [.getAccounts](#TDAmeritradeAPI+getAccounts) ⇒ <code>Promise.&lt;APIResponse.&lt;TDAmeritradeAccounts&gt;&gt;</code>
    * [.getAccount](#TDAmeritradeAPI+getAccount) ⇒ <code>Promise.&lt;APIResponse.&lt;TDAmeritradeAccount&gt;&gt;</code>
    * [.getUserPrincipals](#TDAmeritradeAPI+getUserPrincipals) ⇒ <code>Promise.&lt;APIResponse.&lt;UserPrincipalsData&gt;&gt;</code>
    * [.getTransactions](#TDAmeritradeAPI+getTransactions) ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;TransactionData&gt;&gt;&gt;</code>
    * [.getOrders](#TDAmeritradeAPI+getOrders) ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;OrderData&gt;&gt;&gt;</code>
    * [.getQuotes](#TDAmeritradeAPI+getQuotes) ⇒ <code>Promise.&lt;APIResponse.&lt;Object.&lt;string, QuoteData&gt;&gt;&gt;</code>
    * [.getInstrument](#TDAmeritradeAPI+getInstrument) ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;InstrumentData&gt;&gt;&gt;</code>
    * [.getFundamentals](#TDAmeritradeAPI+getFundamentals) ⇒ <code>Promise.&lt;APIResponse.&lt;Object.&lt;string, FundamentalData&gt;&gt;&gt;</code>
    * [.getMarketDirectionalMover](#TDAmeritradeAPI+getMarketDirectionalMover) ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;TrendingEquity&gt;&gt;&gt;</code>
    * [.getPriceHistory](#TDAmeritradeAPI+getPriceHistory) ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
    * [.getDailyPriceHistory](#TDAmeritradeAPI+getDailyPriceHistory) ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
    * [.getWeeklyPriceHistory](#TDAmeritradeAPI+getWeeklyPriceHistory) ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
    * [.getPeriodicPriceHistory](#TDAmeritradeAPI+getPeriodicPriceHistory) ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
    * [.getMarketMovers](#TDAmeritradeAPI+getMarketMovers) ⇒ <code>Promise.&lt;APIResponse.&lt;MarketMovers&gt;&gt;</code>
    * [.getOptionChain](#TDAmeritradeAPI+getOptionChain) ⇒ <code>Promise.&lt;APIResponse.&lt;OptionChainData&gt;&gt;</code>
    * [.getWatchlists](#TDAmeritradeAPI+getWatchlists) ⇒ <code>Promise.&lt;APIResponse.&lt;Watchlists&gt;&gt;</code>
    * [.getWatchlist](#TDAmeritradeAPI+getWatchlist) ⇒ <code>Promise.&lt;APIResponse.&lt;Watchlist&gt;&gt;</code>
    * [.placeOrder](#TDAmeritradeAPI+placeOrder) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.cancelOrder](#TDAmeritradeAPI+cancelOrder) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.openOrder](#TDAmeritradeAPI+openOrder) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.closeOrder](#TDAmeritradeAPI+closeOrder) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.buyStock](#TDAmeritradeAPI+buyStock) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.sellStock](#TDAmeritradeAPI+sellStock) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.shortStock](#TDAmeritradeAPI+shortStock) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.coverStock](#TDAmeritradeAPI+coverStock) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.buyOption](#TDAmeritradeAPI+buyOption) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.sellOption](#TDAmeritradeAPI+sellOption) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.writeOption](#TDAmeritradeAPI+writeOption) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
    * [.closeOption](#TDAmeritradeAPI+closeOption) ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>

<a name="new_TDAmeritradeAPI_new"></a>

### new TDAmeritradeAPI()
Represents the TDAmeritradeAPI class for handling requests.

<a name="TDAmeritradeAPI+TDAmeritradeAPI"></a>

### tdAmeritradeAPI.TDAmeritradeAPI
**Kind**: instance class of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  
<a name="new_TDAmeritradeAPI+TDAmeritradeAPI_new"></a>

#### new exports.TDAmeritradeAPI([config])
Creates an instance of TDAmeritradeAPI.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> |  | API Client Configuration |
| [config.clientId] | <code>string</code> |  | TD Amertitrade Client ID - defaults to TD_AMERITRADE_CLIENT_ID environment variable. |
| [config.callbackUrl] | <code>string</code> |  | Callback URL - defaults to TD_AMERITRADE_CALLBACK_URL environment variable. |
| [config.handleRequest] | <code>function</code> \| <code>null</code> | <code></code> | An optional request handler function. |

<a name="TDAmeritradeAPI+setUserAccessToken"></a>

### tdAmeritradeAPI.setUserAccessToken ⇒ <code>void</code>
Set User Access Token / Refresh Token

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| credentials | <code>LocalMemoryAuthDataStore</code> | Credentials Data Store |
| [credentials.userAccessToken] | <code>string</code> | Access Token |
| [credentials.accessTokenExpires] | [<code>DateLikeNullable</code>](#DateLikeNullable) | Is New Access Token |
| [credentials.refreshToken] | <code>string</code> | Refresh Token |
| [credentials.refreshTokenExpiresIn] | [<code>DateLikeNullable</code>](#DateLikeNullable) | Refresh Token Expires in |

<a name="TDAmeritradeAPI+authenticate"></a>

### tdAmeritradeAPI.authenticate ⇒ <code>Promise.&lt;APIResponse.&lt;(AuthenticationResponse\|null)&gt;&gt;</code>
Authenticate with the TD Ameritrade OAuth2 Authorization endpoint

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | Authorization Resonse Code from TD Ameritrade Authentication API |

<a name="TDAmeritradeAPI+refreshAccessToken"></a>

### tdAmeritradeAPI.refreshAccessToken ⇒ <code>Promise.&lt;APIResponse.&lt;(RefreshTokenResponse\|null)&gt;&gt;</code>
Refresh Access Token with Refresh Token

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| refresh_token | <code>string</code> | Refresh Token |

<a name="TDAmeritradeAPI+getAccounts"></a>

### tdAmeritradeAPI.getAccounts ⇒ <code>Promise.&lt;APIResponse.&lt;TDAmeritradeAccounts&gt;&gt;</code>
Get Accounts

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  
<a name="TDAmeritradeAPI+getAccount"></a>

### tdAmeritradeAPI.getAccount ⇒ <code>Promise.&lt;APIResponse.&lt;TDAmeritradeAccount&gt;&gt;</code>
Get Account

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |

<a name="TDAmeritradeAPI+getUserPrincipals"></a>

### tdAmeritradeAPI.getUserPrincipals ⇒ <code>Promise.&lt;APIResponse.&lt;UserPrincipalsData&gt;&gt;</code>
Get User Principals Data - for use with `schwab-td-ameritrade-streamer`

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  
<a name="TDAmeritradeAPI+getTransactions"></a>

### tdAmeritradeAPI.getTransactions ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;TransactionData&gt;&gt;&gt;</code>
Get Transactions

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| transactionsType | [<code>GetTransactionsType</code>](#GetTransactionsType) | Transactions Type - Default 'TRADE' |
| startDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | Start Date |
| endDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | End Date |

<a name="TDAmeritradeAPI+getOrders"></a>

### tdAmeritradeAPI.getOrders ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;OrderData&gt;&gt;&gt;</code>
Get Order's for Account ID

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |

<a name="TDAmeritradeAPI+getQuotes"></a>

### tdAmeritradeAPI.getQuotes ⇒ <code>Promise.&lt;APIResponse.&lt;Object.&lt;string, QuoteData&gt;&gt;&gt;</code>
Get Quote Data for Ticker Symbol(s)

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |

<a name="TDAmeritradeAPI+getInstrument"></a>

### tdAmeritradeAPI.getInstrument ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;InstrumentData&gt;&gt;&gt;</code>
Get Instrument Data for CUSIP

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| cusip | [<code>CUSIP</code>](#CUSIP) | CUSIP |

<a name="TDAmeritradeAPI+getFundamentals"></a>

### tdAmeritradeAPI.getFundamentals ⇒ <code>Promise.&lt;APIResponse.&lt;Object.&lt;string, FundamentalData&gt;&gt;&gt;</code>
Get Fundamental Data for Ticker Symbol

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |

<a name="TDAmeritradeAPI+getMarketDirectionalMover"></a>

### tdAmeritradeAPI.getMarketDirectionalMover ⇒ <code>Promise.&lt;APIResponse.&lt;Array.&lt;TrendingEquity&gt;&gt;&gt;</code>
Get Market Directional Mover (e.g. '$SPX.X', 'up', 'percent')

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| market | <code>&#x27;$SPX.X&#x27;</code> \| <code>&#x27;$DJI&#x27;</code> \| <code>&#x27;$COMPX&#x27;</code> | Market |
| direction | <code>&#x27;up&#x27;</code> \| <code>&#x27;down&#x27;</code> | Direction |
| change | <code>&#x27;percent&#x27;</code> \| <code>&#x27;value&#x27;</code> | Change Type |

<a name="TDAmeritradeAPI+getPriceHistory"></a>

### tdAmeritradeAPI.getPriceHistory ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
Get Intraday Price History for Ticker Symbol

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| days | <code>number</code> | Number of Days |
| minutes | <code>number</code> | Minutes |
| extHours | <code>boolean</code> | Extended Hours Data |
| endDate | <code>Date</code> \| <code>number</code> | End Date |

<a name="TDAmeritradeAPI+getDailyPriceHistory"></a>

### tdAmeritradeAPI.getDailyPriceHistory ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
Get Daily Price History for Ticker Symbol

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| years | <code>number</code> | Number of Years |
| days | <code>number</code> | Number of Days |

<a name="TDAmeritradeAPI+getWeeklyPriceHistory"></a>

### tdAmeritradeAPI.getWeeklyPriceHistory ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
Get Weekly Price History for Ticker Symbol

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| years | <code>number</code> | Number of Years |

<a name="TDAmeritradeAPI+getPeriodicPriceHistory"></a>

### tdAmeritradeAPI.getPeriodicPriceHistory ⇒ <code>Promise.&lt;APIResponse.&lt;PriceHistory&gt;&gt;</code>
Get Periodic Price History for Ticker Symbol

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| startDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | Start Date |
| endDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | End Date |
| extHours | <code>boolean</code> | Extended Hours Data |

<a name="TDAmeritradeAPI+getMarketMovers"></a>

### tdAmeritradeAPI.getMarketMovers ⇒ <code>Promise.&lt;APIResponse.&lt;MarketMovers&gt;&gt;</code>
Get Market Movers - Current Trending Equities of $SPX.X, $COMPX, $DJI

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  
<a name="TDAmeritradeAPI+getOptionChain"></a>

### tdAmeritradeAPI.getOptionChain ⇒ <code>Promise.&lt;APIResponse.&lt;OptionChainData&gt;&gt;</code>
Get Option Chain

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| range | <code>OptionContractRange</code> | Option Contract Range - (ITM, OTM, NTM, etc..) |
| optionType | <code>OptionContractType</code> | Option Contract Type - (Standard, Non Standard, All) |

<a name="TDAmeritradeAPI+getWatchlists"></a>

### tdAmeritradeAPI.getWatchlists ⇒ <code>Promise.&lt;APIResponse.&lt;Watchlists&gt;&gt;</code>
Get Watchlists

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |

<a name="TDAmeritradeAPI+getWatchlist"></a>

### tdAmeritradeAPI.getWatchlist ⇒ <code>Promise.&lt;APIResponse.&lt;Watchlist&gt;&gt;</code>
Get Watchlist by ID

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |

<a name="TDAmeritradeAPI+placeOrder"></a>

### tdAmeritradeAPI.placeOrder ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Place an Order

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| price | <code>number</code> | Price |
| orderLegCollection | [<code>Array.&lt;TDAmeritradeOrderLeg&gt;</code>](#TDAmeritradeOrderLeg) | Order Leg Collection |

<a name="TDAmeritradeAPI+cancelOrder"></a>

### tdAmeritradeAPI.cancelOrder ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Cancel an Order

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderId | <code>string</code> | Order ID |

<a name="TDAmeritradeAPI+openOrder"></a>

### tdAmeritradeAPI.openOrder ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Opening Order

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |
| isOption | <code>boolean</code> | Is Option Order |
| isShort | <code>boolean</code> | Is Short Position |

<a name="TDAmeritradeAPI+closeOrder"></a>

### tdAmeritradeAPI.closeOrder ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Closing Order

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |
| isOption | <code>boolean</code> | Is Option Order |
| isShort | <code>boolean</code> | Is Short Position |

<a name="TDAmeritradeAPI+buyStock"></a>

### tdAmeritradeAPI.buyStock ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Buy Equtity / Stock Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+sellStock"></a>

### tdAmeritradeAPI.sellStock ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Sell Equtity / Stock Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+shortStock"></a>

### tdAmeritradeAPI.shortStock ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Short Equtity / Stock Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+coverStock"></a>

### tdAmeritradeAPI.coverStock ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Cover Short Equtity / Stock Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+buyOption"></a>

### tdAmeritradeAPI.buyOption ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Buy Option Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+sellOption"></a>

### tdAmeritradeAPI.sellOption ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Sell Option Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+writeOption"></a>

### tdAmeritradeAPI.writeOption ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Write Option Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="TDAmeritradeAPI+closeOption"></a>

### tdAmeritradeAPI.closeOption ⇒ <code>Promise.&lt;APIResponse.&lt;any&gt;&gt;</code>
Close Option Convenience Method

**Kind**: instance property of [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)  

| Param | Type | Description |
| --- | --- | --- |
| orderRequest | [<code>OrderRequest</code>](#OrderRequest) | Order Request |
| orderRequest.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| orderRequest.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| orderRequest.quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| orderRequest.price | <code>number</code> | Price |

<a name="createTDAmeritradeAPIClient"></a>

## createTDAmeritradeAPIClient(config) ⇒ [<code>TDAmeritradeAPI</code>](#TDAmeritradeAPI)
Creates a new instance of the TD Ameritrade API

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>APIClientConfig</code>](#APIClientConfig) | API Client Configuration |

<a name="filterBuyTrades"></a>

## filterBuyTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Buy Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterSellTrades"></a>

## filterSellTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Sell Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterOpeningTrades"></a>

## filterOpeningTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Opening Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterClosingTrades"></a>

## filterClosingTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Closing Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterOpeningShortSales"></a>

## filterOpeningShortSales(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Open Short Sale Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterClosingShortSales"></a>

## filterClosingShortSales(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Closing Short Sale Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterOptionTrades"></a>

## filterOptionTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Option Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="filterEquityTrades"></a>

## filterEquityTrades(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Filter Equity Trades

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByOrderId"></a>

## groupByOrderId(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Order ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByInstrument"></a>

## groupByInstrument(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Instrument

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByInstrumentSymbol"></a>

## groupByInstrumentSymbol(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Instrument Symbol

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByInstrumentUnderlyingSymbol"></a>

## groupByInstrumentUnderlyingSymbol(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Instrument Underlying Symbol

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByInstrumentCUSIP"></a>

## groupByInstrumentCUSIP(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Instrument CUSIP

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="groupByAssetType"></a>

## groupByAssetType(trades) ⇒ [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData)
[td-utils.js] - Group Trades by Asset Type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trades | [<code>Array.&lt;TransactionData&gt;</code>](#TransactionData) | TRADE Transactions |

<a name="DateLikeNullable"></a>

## DateLikeNullable : <code>Date</code> \| <code>string</code> \| <code>number</code> \| <code>null</code>
**Kind**: global typedef  
<a name="TickerSymbol"></a>

## TickerSymbol : <code>string</code>
**Kind**: global typedef  
<a name="CUSIP"></a>

## CUSIP : <code>string</code>
**Kind**: global typedef  
<a name="TDAmeritradeAccountID"></a>

## TDAmeritradeAccountID : <code>string</code>
**Kind**: global typedef  
<a name="AssetType"></a>

## AssetType : <code>&#x27;EQUITY&#x27;</code> \| <code>&#x27;OPTION&#x27;</code>
**Kind**: global typedef  
<a name="AcceptedOrRejected"></a>

## AcceptedOrRejected : <code>&#x27;ACCEPTED&#x27;</code> \| <code>&#x27;REJECTED&#x27;</code>
**Kind**: global typedef  
<a name="PositionEffect"></a>

## PositionEffect : <code>&#x27;OPENING&#x27;</code> \| <code>&#x27;CLOSING&#x27;</code>
**Kind**: global typedef  
<a name="BuyOrder"></a>

## BuyOrder : <code>&#x27;BUY&#x27;</code> \| <code>&#x27;BUY\_TO\_OPEN&#x27;</code> \| <code>&#x27;BUY\_TO\_CLOSE&#x27;</code> \| <code>&#x27;BUY\_TO\_COVER&#x27;</code>
**Kind**: global typedef  
<a name="SellOrder"></a>

## SellOrder : <code>&#x27;SELL&#x27;</code> \| <code>&#x27;SELL\_TO\_OPEN&#x27;</code> \| <code>&#x27;SELL\_TO\_CLOSE&#x27;</code> \| <code>&#x27;SELL\_SHORT&#x27;</code>
**Kind**: global typedef  
<a name="OrderDescription"></a>

## OrderDescription : <code>&#x27;BUY TRADE&#x27;</code> \| <code>&#x27;SELL TRADE&#x27;</code> \| <code>&#x27;SHORT SALE&#x27;</code> \| <code>&#x27;CLOSE SHORT POSITION&#x27;</code>
**Kind**: global typedef  
<a name="GetTransactionsType"></a>

## GetTransactionsType : <code>&#x27;ALL&#x27;</code> \| <code>&#x27;TRADE&#x27;</code> \| <code>&#x27;BUY\_ONLY&#x27;</code> \| <code>&#x27;SELL\_ONLY&#x27;</code> \| <code>&#x27;CASH\_IN\_OR\_CASH\_OUT&#x27;</code> \| <code>&#x27;CHECKING&#x27;</code> \| <code>&#x27;DIVIDEND&#x27;</code> \| <code>&#x27;INTEREST&#x27;</code> \| <code>&#x27;ADVISOR\_FEES&#x27;</code> \| <code>&#x27;OTHER&#x27;</code>
**Kind**: global typedef  
<a name="TDAmeritradeAccounts"></a>

## TDAmeritradeAccounts : [<code>Array.&lt;TDAmeritradeAccount&gt;</code>](#TDAmeritradeAccount)
**Kind**: global typedef  
<a name="APIClientConfig"></a>

## APIClientConfig : <code>Object</code>
Represents the configuration for the API client.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [clientId] | <code>string</code> | The client ID for authentication (optional). |
| [callbackUrl] | <code>string</code> | The callback URL for authentication (optional). |
| [handleRequest] | <code>function</code> | A custom request handler function (optional). |

<a name="APIRequestConfig"></a>

## APIRequestConfig : <code>Object</code>
Represents the configuration for making an API request.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the API endpoint. |
| [method] | <code>string</code> | The HTTP method for the request (default is 'GET'). |
| [params] | <code>Object.&lt;string, string&gt;</code> | Optional query parameters for the request. |
| [headers] | <code>Object.&lt;string, string&gt;</code> | Optional HTTP headers for the request. |
| [data] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>number</code> \| <code>Array.&lt;number&gt;</code> | Optional request payload data. |

<a name="APIResponse"></a>

## APIResponse : <code>Object</code>
Represents an API response.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>null</code> \| <code>undefined</code> | An error message (nullable and optional). |
| data | <code>T</code> \| <code>null</code> \| <code>undefined</code> | The response data (nullable and optional). |

<a name="AuthenticationResponse"></a>

## AuthenticationResponse : <code>Object</code>
TD Ameritrade API Authentication Response

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| access_token | <code>string</code> | Access Token |
| refresh_token | <code>string</code> | Refresh Token |
| scope | <code>string</code> | OAuth2 Scope |
| token_type | <code>string</code> | Token Type |
| expires_in | <code>number</code> | Access Token Expires in (seconds) |
| refresh_token_expires_in | <code>number</code> | Refresh Token Expires in (seconds) |

<a name="RefreshTokenResponse"></a>

## RefreshTokenResponse : <code>Object</code>
TD Ameritrade API Refresh Token Response

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| access_token | <code>string</code> | Access Token |
| scope | <code>string</code> | OAuth2 Scope |
| token_type | <code>string</code> | Token Type |
| expires_in | <code>number</code> | Access Token Expires in (seconds) |

<a name="TDAmeritradeAccount"></a>

## TDAmeritradeAccount : <code>Object</code>
Represents a TD Ameritrade account.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| securitiesAccount | <code>Object</code> | Information about the securities account. |
| securitiesAccount.accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | The account ID. |
| securitiesAccount.currentBalances | [<code>CurrentBalances</code>](#CurrentBalances) | The current balances. |
| securitiesAccount.initialBalances | [<code>InitialBalances</code>](#InitialBalances) | The initial balances. |
| securitiesAccount.projectedBalances | [<code>ProjectedBalances</code>](#ProjectedBalances) | The projected balances. |
| securitiesAccount.isClosingOnlyRestricted | <code>boolean</code> | Indicates if the account is closing-only restricted. |
| securitiesAccount.isDayTrader | <code>boolean</code> | Indicates if the account is a day trader account. |
| securitiesAccount.roundtrips | <code>number</code> | The number of round trips. |
| securitiesAccount.type | <code>string</code> | The account type. |
| securitiesAccount.positions | [<code>Array.&lt;PositionData&gt;</code>](#PositionData) | The positions in the account. |

<a name="InstrumentData"></a>

## InstrumentData : <code>Object</code>
Represents stock information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cusip | [<code>CUSIP</code>](#CUSIP) | The CUSIP (Committee on Uniform Securities Identification Procedures) number. |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The stock symbol. |
| description | <code>string</code> | The description of the stock. |
| exchange | <code>string</code> | The exchange where the stock is traded. |
| assetType | [<code>AssetType</code>](#AssetType) | The asset type, such as "EQUITY". |
| [underlyingSymbol] | <code>string</code> | The underlying symbol of the instrument. |
| [optionExpirationDate] | [<code>DateLikeNullable</code>](#DateLikeNullable) | The option expiration date in ISO 8601 format. |
| [putCall] | <code>&#x27;PUT&#x27;</code> \| <code>&#x27;CALL&#x27;</code> | The type of option (e.g., "CALL" or "PUT"). |

<a name="QuoteData"></a>

## QuoteData : <code>Object</code>
Represents stock data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| assetType | [<code>AssetType</code>](#AssetType) | The asset type. |
| assetMainType | <code>string</code> | The asset main type. |
| cusip | [<code>CUSIP</code>](#CUSIP) | The CUSIP. |
| assetSubType | <code>string</code> | The asset sub type. |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The stock symbol. |
| description | <code>string</code> | The stock description. |
| bidPrice | <code>number</code> | The bid price. |
| bidSize | <code>number</code> | The bid size. |
| bidId | <code>string</code> | The bid ID. |
| askPrice | <code>number</code> | The ask price. |
| askSize | <code>number</code> | The ask size. |
| askId | <code>string</code> | The ask ID. |
| lastPrice | <code>number</code> | The last price. |
| lastSize | <code>number</code> | The last size. |
| lastId | <code>string</code> | The last ID. |
| openPrice | <code>number</code> | The opening price. |
| highPrice | <code>number</code> | The highest price of the day. |
| lowPrice | <code>number</code> | The lowest price of the day. |
| bidTick | <code>string</code> | The bid tick. |
| closePrice | <code>number</code> | The closing price. |
| netChange | <code>number</code> | The net price change. |
| totalVolume | <code>number</code> | The total volume. |
| quoteTimeInLong | <code>number</code> | The quote time in long format. |
| tradeTimeInLong | <code>number</code> | The trade time in long format. |
| mark | <code>number</code> | The mark price. |
| exchange | <code>string</code> | The exchange. |
| exchangeName | <code>string</code> | The exchange name. |
| marginable | <code>boolean</code> | Indicates if it's marginable. |
| shortable | <code>boolean</code> | Indicates if it's shortable. |
| volatility | <code>number</code> | The volatility. |
| digits | <code>number</code> | The number of digits. |
| nAV | <code>number</code> | The NAV (Net Asset Value). |
| peRatio | <code>number</code> | The P/E (Price-to-Earnings) ratio. |
| divAmount | <code>number</code> | The dividend amount. |
| divYield | <code>number</code> | The dividend yield. |
| divDate | <code>string</code> | The dividend date. |
| securityStatus | <code>string</code> | The security status. |
| regularMarketLastPrice | <code>number</code> | The last price in the regular market. |
| regularMarketLastSize | <code>number</code> | The last size in the regular market. |
| regularMarketNetChange | <code>number</code> | The net change in the regular market. |
| regularMarketTradeTimeInLong | <code>number</code> | The trade time in long format in the regular market. |
| netPercentChangeInDouble | <code>number</code> | The net percent change in double format. |
| markChangeInDouble | <code>number</code> | The mark change in double format. |
| markPercentChangeInDouble | <code>number</code> | The mark percent change in double format. |
| delayed | <code>boolean</code> | Indicates if the data is delayed. |
| realtimeEntitled | <code>boolean</code> | Indicates if real-time data is entitled. |

<a name="Fundamentals"></a>

## Fundamentals : <code>Object</code>
Represents fundamental data for a stock.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The stock symbol. |
| high52 | <code>number</code> | The 52-week high price. |
| low52 | <code>number</code> | The 52-week low price. |
| dividendAmount | <code>number</code> | The dividend amount. |
| dividendYield | <code>number</code> | The dividend yield. |
| dividendDate | <code>string</code> | The dividend date. |
| peRatio | <code>number</code> | The Price-to-Earnings (P/E) ratio. |
| pegRatio | <code>number</code> | The Price/Earnings to Growth (PEG) ratio. |
| pbRatio | <code>number</code> | The Price-to-Book (P/B) ratio. |
| prRatio | <code>number</code> | The Price-to-Revenue (P/R) ratio. |
| pcfRatio | <code>number</code> | The Price-to-Cash Flow (P/CF) ratio. |
| grossMarginTTM | <code>number</code> | The gross margin trailing twelve months (TTM). |
| grossMarginMRQ | <code>number</code> | The gross margin most recent quarter (MRQ). |
| netProfitMarginTTM | <code>number</code> | The net profit margin TTM. |
| netProfitMarginMRQ | <code>number</code> | The net profit margin MRQ. |
| operatingMarginTTM | <code>number</code> | The operating margin TTM. |
| operatingMarginMRQ | <code>number</code> | The operating margin MRQ. |
| returnOnEquity | <code>number</code> | The return on equity. |
| returnOnAssets | <code>number</code> | The return on assets. |
| returnOnInvestment | <code>number</code> | The return on investment. |
| quickRatio | <code>number</code> | The quick ratio. |
| currentRatio | <code>number</code> | The current ratio. |
| interestCoverage | <code>number</code> | The interest coverage. |
| totalDebtToCapital | <code>number</code> | The total debt to capital ratio. |
| ltDebtToEquity | <code>number</code> | The long-term debt to equity ratio. |
| totalDebtToEquity | <code>number</code> | The total debt to equity ratio. |
| epsTTM | <code>number</code> | The earnings per share TTM. |
| epsChangePercentTTM | <code>number</code> | The percentage change in earnings per share TTM. |
| epsChangeYear | <code>number</code> | The change in earnings per share in a year. |
| epsChange | <code>number</code> | The overall change in earnings per share. |
| revChangeYear | <code>number</code> | The change in revenue in a year. |
| revChangeTTM | <code>number</code> | The change in revenue TTM. |
| revChangeIn | <code>number</code> | The percentage change in revenue. |
| sharesOutstanding | <code>number</code> | The number of outstanding shares. |
| marketCapFloat | <code>number</code> | The market capitalization (float). |
| marketCap | <code>number</code> | The total market capitalization. |
| bookValuePerShare | <code>number</code> | The book value per share. |
| shortIntToFloat | <code>number</code> | The short interest to float ratio. |
| shortIntDayToCover | <code>number</code> | The short interest days to cover. |
| divGrowthRate3Year | <code>number</code> | The 3-year dividend growth rate. |
| dividendPayAmount | <code>number</code> | The dividend payment amount. |
| dividendPayDate | <code>string</code> | The dividend payment date. |
| beta | <code>number</code> | The beta value. |
| vol1DayAvg | <code>number</code> | The average volume over 1 day. |
| vol10DayAvg | <code>number</code> | The average volume over 10 days. |
| vol3MonthAvg | <code>number</code> | The average volume over 3 months. |

<a name="FundamentalData"></a>

## FundamentalData : <code>Object</code>
Represents Fundamental Data

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fundamental | [<code>Fundamentals</code>](#Fundamentals) | Fundamental data for the stock. |
| cusip | [<code>CUSIP</code>](#CUSIP) | The CUSIP. |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The stock symbol. |
| description | <code>string</code> | The stock description. |
| exchange | <code>string</code> | The exchange where the stock is traded. |
| assetType | <code>string</code> | The asset type. |

<a name="OHLC"></a>

## OHLC : <code>Object</code>
Represents Open, High, Low Close Values

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| open | <code>number</code> | The opening price. |
| high | <code>number</code> | The highest price during the period. |
| low | <code>number</code> | The lowest price during the period. |
| close | <code>number</code> | The closing price. |

<a name="OHLCVolume"></a>

## OHLCVolume : <code>Object</code>
Represents OHLC with Volume Values

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| open | <code>number</code> | The opening price. |
| high | <code>number</code> | The highest price during the period. |
| low | <code>number</code> | The lowest price during the period. |
| close | <code>number</code> | The closing price. |
| volume | <code>number</code> | The trading volume. |

<a name="Candlestick"></a>

## Candlestick : <code>Object</code>
Represents a candlestick.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| open | <code>number</code> | The opening price. |
| high | <code>number</code> | The highest price during the period. |
| low | <code>number</code> | The lowest price during the period. |
| close | <code>number</code> | The closing price. |
| volume | <code>number</code> | The trading volume. |
| datetime | <code>number</code> | The timestamp of the candlestick. |

<a name="PriceHistory"></a>

## PriceHistory : <code>Object</code>
Represents candlestick data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| candles | [<code>Array.&lt;Candlestick&gt;</code>](#Candlestick) | An array of candlesticks. |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The symbol associated with the data. |
| empty | <code>boolean</code> | Indicates whether the data is empty. |

<a name="OptionContractData"></a>

## OptionContractData : <code>Object</code>
Represents option contract data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| putCall | <code>string</code> | The option type (e.g., "CALL" or "PUT"). |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The option symbol. |
| description | <code>string</code> | A description of the option contract. |
| exchangeName | <code>string</code> | The exchange where the option is traded. |
| bid | <code>number</code> | The bid price for the option. |
| ask | <code>number</code> | The ask price for the option. |
| last | <code>number</code> | The last traded price for the option. |
| mark | <code>number</code> | The mark price for the option. |
| bidSize | <code>number</code> | The size of the bid for the option. |
| askSize | <code>number</code> | The size of the ask for the option. |
| bidAskSize | <code>string</code> | The bid and ask sizes (e.g., "45X25"). |
| lastSize | <code>number</code> | The size of the last trade for the option. |
| highPrice | <code>number</code> | The highest price of the option. |
| lowPrice | <code>number</code> | The lowest price of the option. |
| openPrice | <code>number</code> | The opening price of the option. |
| closePrice | <code>number</code> | The closing price of the option. |
| totalVolume | <code>number</code> | The total trading volume for the option. |
| tradeDate | <code>Date</code> \| <code>null</code> | The date of the last trade (nullable). |
| tradeTimeInLong | <code>number</code> | The timestamp of the last trade. |
| quoteTimeInLong | <code>number</code> | The timestamp of the quote. |
| netChange | <code>number</code> | The net change in the option price. |
| volatility | <code>number</code> | The volatility of the option. |
| delta | <code>number</code> | The delta value of the option. |
| gamma | <code>number</code> | The gamma value of the option. |
| theta | <code>number</code> | The theta value of the option. |
| vega | <code>number</code> | The vega value of the option. |
| rho | <code>number</code> | The rho value of the option. |
| openInterest | <code>number</code> | The open interest in the option. |
| timeValue | <code>number</code> | The time value of the option. |
| theoreticalOptionValue | <code>number</code> | The theoretical option value. |
| theoreticalVolatility | <code>number</code> | The theoretical volatility of the option. |
| optionDeliverablesList | <code>string</code> \| <code>null</code> | The list of option deliverables (nullable). |
| strikePrice | <code>number</code> | The strike price of the option. |
| expirationDate | <code>number</code> | The expiration date of the option (timestamp). |
| daysToExpiration | <code>number</code> | The number of days to option expiration. |
| expirationType | <code>string</code> | The type of expiration (e.g., "S" for standard). |
| lastTradingDay | <code>number</code> | The last trading day (timestamp). |
| multiplier | <code>number</code> | The multiplier for the option (e.g., 100 for standard options). |
| settlementType | <code>string</code> | The settlement type (e.g., " " for space). |
| deliverableNote | <code>string</code> | A note about deliverables. |
| isIndexOption | <code>boolean</code> \| <code>null</code> | Indicates if the option is an index option (nullable). |
| percentChange | <code>number</code> | The percentage change in the option price. |
| markChange | <code>number</code> | The change in the mark price. |
| markPercentChange | <code>number</code> | The percentage change in the mark price. |
| intrinsicValue | <code>number</code> | The intrinsic value of the option. |
| pennyPilot | <code>boolean</code> | Indicates if the option is part of the penny pilot program. |
| nonStandard | <code>boolean</code> | Indicates if the option is non-standard. |
| inTheMoney | <code>boolean</code> | Indicates if the option is in the money. |
| mini | <code>boolean</code> | Indicates if the option is a mini option. |

<a name="UnderlyingAsset"></a>

## UnderlyingAsset : <code>Object</code>
Represents information about the underlying asset.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The symbol of the underlying asset. |
| description | <code>string</code> | The description of the underlying asset. |
| change | <code>number</code> | The change in the underlying asset's price. |
| percentChange | <code>number</code> | The percentage change in the underlying asset's price. |
| close | <code>number</code> | The closing price of the underlying asset. |
| quoteTime | <code>number</code> | The timestamp of the underlying asset's quote time. |
| tradeTime | <code>number</code> | The timestamp of the underlying asset's trade time. |
| bid | <code>number</code> | The bid price for the underlying asset. |
| ask | <code>number</code> | The ask price for the underlying asset. |
| last | <code>number</code> | The last traded price for the underlying asset. |
| mark | <code>number</code> | The mark price for the underlying asset. |
| markChange | <code>number</code> | The change in the mark price for the underlying asset. |
| markPercentChange | <code>number</code> | The percentage change in the mark price for the underlying asset. |
| bidSize | <code>number</code> | The size of the bid for the underlying asset. |
| askSize | <code>number</code> | The size of the ask for the underlying asset. |
| highPrice | <code>number</code> | The highest price of the underlying asset. |
| lowPrice | <code>number</code> | The lowest price of the underlying asset. |
| openPrice | <code>number</code> | The opening price of the underlying asset. |
| totalVolume | <code>number</code> | The total trading volume for the underlying asset. |
| exchangeName | <code>string</code> | The name of the exchange where the underlying asset is traded. |
| fiftyTwoWeekHigh | <code>number</code> | The fifty-two week high price of the underlying asset. |
| fiftyTwoWeekLow | <code>number</code> | The fifty-two week low price of the underlying asset. |
| delayed | <code>boolean</code> | Indicates if the data is delayed for the underlying asset. |

<a name="OptionContractDateMap"></a>

## OptionContractDateMap : <code>Object.&lt;string, Array.&lt;OptionContractData&gt;&gt;</code>
Represents a mapping of option contract data by expiration date.

**Kind**: global typedef  
<a name="OptionChainData"></a>

## OptionChainData : <code>Object</code>
Represents option chain data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The symbol. |
| status | <code>string</code> | The status of the option chain (e.g., "SUCCESS"). |
| underlying | [<code>UnderlyingAsset</code>](#UnderlyingAsset) | Information about the underlying asset. |
| strategy | <code>string</code> | The trading strategy (e.g., "SINGLE"). |
| interval | <code>number</code> | The interval. |
| isDelayed | <code>boolean</code> | Indicates if the data is delayed. |
| isIndex | <code>boolean</code> | Indicates if the data is related to an index. |
| interestRate | <code>number</code> | The interest rate. |
| underlyingPrice | <code>number</code> | The price of the underlying asset. |
| volatility | <code>number</code> | The volatility. |
| daysToExpiration | <code>number</code> | The number of days to expiration. |
| numberOfContracts | <code>number</code> | The number of contracts. |
| putExpDateMap | [<code>OptionContractDateMap</code>](#OptionContractDateMap) | Map of put expiration dates and their data. |
| callExpDateMap | [<code>OptionContractDateMap</code>](#OptionContractDateMap) | Map of call expiration dates and their data. |

<a name="WatchlistItemInstrument"></a>

## WatchlistItemInstrument : <code>Object</code>
Represents an instrument.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | The symbol of the instrument. |
| assetType | [<code>AssetType</code>](#AssetType) | The asset type of the instrument (e.g., "EQUITY"). |

<a name="WatchlistItem"></a>

## WatchlistItem : <code>Object</code>
Represents an instrument within a watchlist.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sequenceId | <code>number</code> | The sequence ID of the watchlist item. |
| quantity | <code>number</code> | The quantity of the instrument. |
| averagePrice | <code>number</code> | The average price of the instrument. |
| commission | <code>number</code> | The commission associated with the instrument. |
| instrument | [<code>WatchlistItemInstrument</code>](#WatchlistItemInstrument) | The instrument details. |

<a name="Watchlist"></a>

## Watchlist : <code>Object</code>
Represents a watchlist.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the watchlist. |
| watchlistId | <code>string</code> | The ID of the watchlist. |
| accountId | <code>string</code> | The ID of the account associated with the watchlist. |
| watchlistItems | [<code>Array.&lt;WatchlistItem&gt;</code>](#WatchlistItem) | The list of watchlist items. |

<a name="Watchlists"></a>

## Watchlists : [<code>Array.&lt;Watchlist&gt;</code>](#Watchlist)
Represents multiple watchlists.

**Kind**: global typedef  
<a name="CurrentBalances"></a>

## CurrentBalances : <code>Object</code>
Represents an account's financial summary.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accruedInterest | <code>number</code> | Accrued interest. |
| cashBalance | <code>number</code> | Cash balance. |
| cashReceipts | <code>number</code> | Cash receipts. |
| longOptionMarketValue | <code>number</code> | Long option market value. |
| liquidationValue | <code>number</code> | Liquidation value. |
| longMarketValue | <code>number</code> | Long market value. |
| moneyMarketFund | <code>number</code> | Money market fund. |
| savings | <code>number</code> | Savings amount. |
| shortMarketValue | <code>number</code> | Short market value. |
| pendingDeposits | <code>number</code> | Pending deposits. |
| availableFunds | <code>number</code> | Available funds. |
| availableFundsNonMarginableTrade | <code>number</code> | Available funds for non-marginable trade. |
| buyingPower | <code>number</code> | Buying power. |
| buyingPowerNonMarginableTrade | <code>number</code> | Buying power for non-marginable trade. |
| dayTradingBuyingPower | <code>number</code> | Day trading buying power. |
| equity | <code>number</code> | Equity. |
| equityPercentage | <code>number</code> | Equity percentage. |
| longMarginValue | <code>number</code> | Long margin value. |
| maintenanceCall | <code>number</code> | Maintenance call amount. |
| maintenanceRequirement | <code>number</code> | Maintenance requirement. |
| marginBalance | <code>number</code> | Margin balance. |
| regTCall | <code>number</code> | Regulation T call amount. |
| shortBalance | <code>number</code> | Short balance. |
| shortMarginValue | <code>number</code> | Short margin value. |
| shortOptionMarketValue | <code>number</code> | Short option market value. |
| sma | <code>number</code> | Special memorandum account (SMA). |
| mutualFundValue | <code>number</code> | Mutual fund value. |
| bondValue | <code>number</code> | Bond value. |

<a name="InitialBalances"></a>

## InitialBalances : <code>Object</code>
Represents an account's financial summary.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accruedInterest | <code>number</code> | Accrued interest. |
| availableFundsNonMarginableTrade | <code>number</code> | Available funds for non-marginable trade. |
| bondValue | <code>number</code> | Bond value. |
| buyingPower | <code>number</code> | Buying power. |
| cashBalance | <code>number</code> | Cash balance. |
| cashAvailableForTrading | <code>number</code> | Cash available for trading. |
| cashReceipts | <code>number</code> | Cash receipts. |
| dayTradingBuyingPower | <code>number</code> | Day trading buying power. |
| dayTradingBuyingPowerCall | <code>number</code> | Day trading buying power call. |
| dayTradingEquityCall | <code>number</code> | Day trading equity call. |
| equity | <code>number</code> | Equity. |
| equityPercentage | <code>number</code> | Equity percentage. |
| liquidationValue | <code>number</code> | Liquidation value. |
| longMarginValue | <code>number</code> | Long margin value. |
| longOptionMarketValue | <code>number</code> | Long option market value. |
| longStockValue | <code>number</code> | Long stock value. |
| maintenanceCall | <code>number</code> | Maintenance call amount. |
| maintenanceRequirement | <code>number</code> | Maintenance requirement. |
| margin | <code>number</code> | Margin amount. |
| marginEquity | <code>number</code> | Margin equity. |
| moneyMarketFund | <code>number</code> | Money market fund. |
| mutualFundValue | <code>number</code> | Mutual fund value. |
| regTCall | <code>number</code> | Regulation T call amount. |
| shortMarginValue | <code>number</code> | Short margin value. |
| shortOptionMarketValue | <code>number</code> | Short option market value. |
| shortStockValue | <code>number</code> | Short stock value. |
| totalCash | <code>number</code> | Total cash. |
| isInCall | <code>number</code> | Is in call status. |
| pendingDeposits | <code>number</code> | Pending deposits. |
| marginBalance | <code>number</code> | Margin balance. |
| shortBalance | <code>number</code> | Short balance. |
| accountValue | <code>number</code> | Account value. |

<a name="ProjectedBalances"></a>

## ProjectedBalances : <code>Object</code>
Represents account-related data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| availableFunds | <code>number</code> | The available funds in the account. |
| availableFundsNonMarginableTrade | <code>number</code> | The available funds for non-marginable trades. |
| buyingPower | <code>number</code> | The buying power of the account. |
| dayTradingBuyingPower | <code>number</code> | The buying power for day trading. |
| dayTradingBuyingPowerCall | <code>number</code> | The day trading buying power call. |
| maintenanceCall | <code>number</code> | The maintenance call. |
| regTCall | <code>number</code> | The Regulation T (Reg T) call. |
| isInCall | <code>number</code> | Indicates whether the account is in a call state. |
| stockBuyingPower | <code>number</code> | The buying power for stock trades. |

<a name="PositionData"></a>

## PositionData : <code>Object</code>
Represents data related to a trading position.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shortQuantity | <code>number</code> | The quantity of short positions. |
| averagePrice | <code>number</code> | The average price of the positions. |
| currentDayCost | <code>number</code> | The current day cost. |
| currentDayProfitLoss | <code>number</code> | The current day profit or loss. |
| currentDayProfitLossPercentage | <code>number</code> | The percentage of profit or loss for the current day. |
| longQuantity | <code>number</code> | The quantity of long positions. |
| settledLongQuantity | <code>number</code> | The settled quantity of long positions. |
| settledShortQuantity | <code>number</code> | The settled quantity of short positions. |
| instrument | [<code>InstrumentData</code>](#InstrumentData) | Information about the financial instrument. |
| marketValue | <code>number</code> | The market value of the positions. |
| maintenanceRequirement | <code>number</code> | The maintenance requirement. |
| previousSessionLongQuantity | <code>number</code> | The quantity of long positions from the previous session. |

<a name="ExchangeDelayStatus"></a>

## ExchangeDelayStatus : <code>Object</code>
Represents a delay status for various exchanges.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isNyseDelayed | <code>boolean</code> | Indicates if NYSE data is delayed. |
| isNasdaqDelayed | <code>boolean</code> | Indicates if NASDAQ data is delayed. |
| isOpraDelayed | <code>boolean</code> | Indicates if OPRA data is delayed. |
| isAmexDelayed | <code>boolean</code> | Indicates if AMEX data is delayed. |
| isCmeDelayed | <code>boolean</code> | Indicates if CME data is delayed. |
| isIceDelayed | <code>boolean</code> | Indicates if ICE data is delayed. |
| isForexDelayed | <code>boolean</code> | Indicates if Forex data is delayed. |

<a name="StreamerSubscriptionKey"></a>

## StreamerSubscriptionKey : <code>Object</code>
Represents a single streamer subscription key.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The subscription key. |

<a name="StreamerSubscriptionKeys"></a>

## StreamerSubscriptionKeys : <code>Object</code>
Represents an array of streamer subscription keys.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| keys | [<code>Array.&lt;StreamerSubscriptionKey&gt;</code>](#StreamerSubscriptionKey) | An array of streamer subscription keys. |

<a name="StreamerInfo"></a>

## StreamerInfo : <code>Object</code>
Represents streamer information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accessLevel | <code>string</code> | The access level of the streamer. |
| acl | <code>string</code> | The ACL (Access Control List) of the streamer. |
| appId | <code>string</code> | The application ID of the streamer. |
| streamerBinaryUrl | <code>string</code> | The binary URL of the streamer. |
| streamerSocketUrl | <code>string</code> | The socket URL of the streamer. |
| token | <code>string</code> | The token for authentication. |
| tokenTimestamp | [<code>DateLikeNullable</code>](#DateLikeNullable) | The timestamp of the token. |
| userGroup | <code>string</code> | The user group of the streamer. |

<a name="UserPrincipalsData"></a>

## UserPrincipalsData : <code>Object</code>
Represents principal data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accessLevel | <code>string</code> | The access level of the principal. |
| exchangeAgreements | <code>Object</code> | Exchange agreements status. |
| exchangeAgreements.NASDAQ_EXCHANGE_AGREEMENT | [<code>AcceptedOrRejected</code>](#AcceptedOrRejected) | NASDAQ exchange agreement status. |
| exchangeAgreements.NYSE_EXCHANGE_AGREEMENT | [<code>AcceptedOrRejected</code>](#AcceptedOrRejected) | NYSE exchange agreement status. |
| exchangeAgreements.OPRA_EXCHANGE_AGREEMENT | [<code>AcceptedOrRejected</code>](#AcceptedOrRejected) | OPRA exchange agreement status. |
| lastLoginTime | [<code>DateLikeNullable</code>](#DateLikeNullable) | The timestamp of the last login time. |
| loginTime | [<code>DateLikeNullable</code>](#DateLikeNullable) | The timestamp of the login time. |
| primaryAccountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | The primary account ID. |
| professionaStatus | <code>&#x27;PROFESSIONAL&#x27;</code> \| <code>&#x27;NON\_PROFESSIONAL&#x27;</code> | The professional status. |
| stalePassword | <code>boolean</code> | Indicates if the password is stale. |
| tokenExpirationTime | [<code>DateLikeNullable</code>](#DateLikeNullable) | The timestamp of the token expiration time. |
| userCdDomainId | <code>string</code> | The user's CD domain ID. |
| userId | <code>string</code> | The user ID. |
| streamerSubscriptionKeys | [<code>Array.&lt;StreamerSubscriptionKeys&gt;</code>](#StreamerSubscriptionKeys) | An array of streamer subscription keys. |
| quotes | [<code>ExchangeDelayStatus</code>](#ExchangeDelayStatus) | Exchange delay status. |
| streamerInfo | [<code>StreamerInfo</code>](#StreamerInfo) | Streamer information. |

<a name="TradeTransactionFees"></a>

## TradeTransactionFees : <code>Object</code>
Represents fees associated with a trade transaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rFee | <code>number</code> | The R fee. |
| additionalFee | <code>number</code> | Additional fees. |
| cdscFee | <code>number</code> | CDSC (Contingent Deferred Sales Charge) fee. |
| regFee | <code>number</code> | Registration fee. |
| otherCharges | <code>number</code> | Other charges. |
| commission | <code>number</code> | Commission fee. |
| optRegFee | <code>number</code> | Options registration fee. |
| secFee | <code>number</code> | SEC (U.S. Securities and Exchange Commission) fee. |

<a name="TransactionItem"></a>

## TransactionItem : <code>Object</code>
Represents a trade transaction item.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | The ID of the account associated with the transaction item. |
| amount | <code>number</code> | The amount of the transaction item. |
| price | <code>number</code> | The price of the transaction item. |
| positionEffect | [<code>PositionEffect</code>](#PositionEffect) | The position effect (e.g., "OPENING"). |
| cost | <code>number</code> | The cost associated with the transaction item. |
| instruction | [<code>BuyOrder</code>](#BuyOrder) \| [<code>SellOrder</code>](#SellOrder) | The instruction for the transaction item (e.g., "BUY"). |
| instrument | [<code>InstrumentData</code>](#InstrumentData) | Information about the instrument involved in the transaction item. |

<a name="TransactionData"></a>

## TransactionData : <code>Object</code>
Represents a trade transaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of transaction (e.g., "TRADE"). |
| subAccount | <code>string</code> | The sub-account associated with the transaction. |
| settlementDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | The settlement date of the transaction (e.g., "2022-09-14"). |
| orderId | <code>string</code> | The ID of the order associated with the transaction. |
| netAmount | <code>number</code> | The net amount of the transaction. |
| transactionDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | The date and time of the transaction in ISO 8601 format. |
| orderDate | [<code>DateLikeNullable</code>](#DateLikeNullable) | The date and time when the order was placed in ISO 8601 format. |
| transactionSubType | <code>string</code> | The sub-type of the transaction (e.g., "BY"). |
| transactionId | <code>number</code> | The unique ID of the transaction. |
| cashBalanceEffectFlag | <code>boolean</code> | Indicates whether the transaction affects the cash balance. |
| description | [<code>OrderDescription</code>](#OrderDescription) | A description of the transaction. |
| fees | [<code>TradeTransactionFees</code>](#TradeTransactionFees) | Object containing various fee information related to the transaction. |
| transactionItem | [<code>TransactionItem</code>](#TransactionItem) | Detailed information about the transaction item. |

<a name="OrderRequest"></a>

## OrderRequest : <code>Object</code>
Order Request

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | TD Ameritrade Account ID |
| symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| price | <code>number</code> | Price |

<a name="TDAmeritradeOrderLeg"></a>

## TDAmeritradeOrderLeg : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| instruction | [<code>BuyOrder</code>](#BuyOrder) \| [<code>SellOrder</code>](#SellOrder) | Instruction |
| quantity | <code>number</code> | Quantity of Shares / Option Contracts |
| instrument | <code>Object</code> | Instrument |
| instrument.symbol | [<code>TickerSymbol</code>](#TickerSymbol) | Ticker Symbol |
| instrument.assetType | [<code>AssetType</code>](#AssetType) | Asset Type |

<a name="OrderData"></a>

## OrderData : <code>Object</code>
Represents an order object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| session | <code>string</code> | The trading session for the order (e.g., "SEAMLESS"). |
| duration | <code>string</code> | The duration of the order (e.g., "GOOD_TILL_CANCEL"). |
| orderType | <code>string</code> | The type of the order (e.g., "LIMIT"). |
| complexOrderStrategyType | <code>string</code> | The strategy type for complex orders (e.g., "NONE"). |
| quantity | <code>number</code> | The total quantity of the order. |
| filledQuantity | <code>number</code> | The quantity of the order that has been filled. |
| remainingQuantity | <code>number</code> | The remaining quantity of the order. |
| requestedDestination | <code>string</code> | The requested destination for the order (e.g., "AUTO"). |
| destinationLinkName | <code>string</code> | The link name for the destination (e.g., "AutoRoute"). |
| price | <code>number</code> | The price per unit of the order. |
| orderLegCollection | [<code>Array.&lt;OrderLeg&gt;</code>](#OrderLeg) | An array of order legs. |
| orderStrategyType | <code>string</code> | The strategy type for the order (e.g., "SINGLE"). |
| orderId | <code>number</code> | The unique identifier for the order. |
| cancelable | <code>boolean</code> | Indicates whether the order is cancelable. |
| editable | <code>boolean</code> | Indicates whether the order is editable. |
| status | <code>string</code> | The status of the order (e.g., "WORKING"). |
| enteredTime | [<code>DateLikeNullable</code>](#DateLikeNullable) | The timestamp when the order was entered in ISO 8601 format. |
| tag | <code>string</code> | A tag associated with the order (e.g., "tIP"). |
| accountId | [<code>TDAmeritradeAccountID</code>](#TDAmeritradeAccountID) | The ID of the account associated with the order. |

<a name="OrderLeg"></a>

## OrderLeg : <code>Object</code>
Represents an order leg within an order.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| orderLegType | <code>string</code> | The type of the order leg (e.g., "EQUITY"). |
| legId | <code>number</code> | The unique identifier for the order leg. |
| instrument | [<code>InstrumentData</code>](#InstrumentData) | Information about the financial instrument. |
| instruction | [<code>BuyOrder</code>](#BuyOrder) \| [<code>SellOrder</code>](#SellOrder) | The instruction for the order leg (e.g., "BUY"). |
| positionEffect | [<code>PositionEffect</code>](#PositionEffect) | The position effect of the order leg (e.g., "OPENING"). |
| quantity | <code>number</code> | The quantity of the order leg. |

<a name="TrendingEquity"></a>

## TrendingEquity : <code>Object</code>
Represents Market Mover Trending Equity data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| change | <code>number</code> | The change in stock status. Negative values indicate a decrease. |
| description | <code>string</code> | The description of the stock status. |
| direction | <code>string</code> | The direction of the change (e.g., "up" or "down"). |
| last | <code>number</code> | The last traded price of the stock. |
| symbol | <code>string</code> | The stock symbol. |
| totalVolume | <code>number</code> | The total trading volume for the stock. |

<a name="MarketMovers"></a>

## MarketMovers : <code>Object</code>
Represents Market Movers - Current Trending Equities of $SPX.X, $COMPX, $DJI

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| up | [<code>Array.&lt;TrendingEquity&gt;</code>](#TrendingEquity) | Equities Trending up |
| down | [<code>Array.&lt;TrendingEquity&gt;</code>](#TrendingEquity) | Equities Trending down |

