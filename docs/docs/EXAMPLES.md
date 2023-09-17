# Examples
## Get Accounts / Account / User Principals
```javascript
const { data: accounts } = await tdApi.getAccounts();

// Get Account by Account ID
const { data: account } = await tdApi.getAccount(accountId);

const { data: userPrincipals } = await tdApi.getUserPrincipals();
```

## Get Quotes / Fundamentals
```javascript
const { data: quotes } = await tdApi.getQuotes('TSLA');
const { data: fundamentals } = await tdApi.getFundamentals('TSLA');

const bidPrice = quotes['TSLA'].bidPrice;
const askPrice = quotes['TSLA'].askPrice;
const vol10DayAvg = fundamentals['TSLA'].fundamental.vol10DayAvg;
```

## Get Market Movers
```javascript
// Get Market Movers for '$SPX.X' && '$DJI' && '$COMPX'
const { data: marketMovers } = await tdApi.getMarketMovers();

// Get Market Movers by Market / Direction
const { data: spxTrendingUp } = await tdApi.getMarketDirectionalMover('$SPX.X', 'up', 'percent');

const { data: nasdaqTrendingUp } = await tdApi.getMarketDirectionalMover('$COMPX', 'up', 'percent');
```

## Get Option Chain
```javascript
const { data: optionChain } = await tdApi.getOptionChain('TSLA');
```

## Get Watchlists / Watchlist
```javascript
const { data: watchlists } = await tdApi.getWatchlists(accountId);

const { data: watchlist } = await tdApi.getWatchlist(accountId, watchlists[0].watchlistId);
```

## Get Transactions
```javascript
const { data: transactions } = await tdApi.getTransactions(accountId);
```

## Orders
```javascript
// Get Orders
const { data: orders } = await tdApi.getOrders(accountId);

// Equity Orders
const equityOrderRequestConfig = {
  accountId: '133742069',
  symbol: 'TSLA',
  quantity: 100,
  price: 420.69,
};

await tdApi.buyStock(equityOrderRequestConfig);

await tdApi.sellStock(equityOrderRequestConfig);

await tdApi.shortStock(equityOrderRequestConfig);

await tdApi.coverStock(equityOrderRequestConfig);

// Option Orders
const optionOrderRequestConfig = {
  accountId: '133742069',
  symbol: 'TSLA',
  quantity: 100,
  price: 4.20,
};

await tdApi.buyOption(optionOrderRequestConfig);

await tdApi.sellOption(optionOrderRequestConfig);

await tdApi.writeOption(optionOrderRequestConfig);

await tdApi.closeOption(optionOrderRequestConfig);

// Canceling Orders
const { data: cancelOrderData } = await tdApi.cancelOrder(accountId, orderId);
```

Copyright (c) 2019 - 2023 Allen Sarkisyan. XT-TX. All Rights Reserved.