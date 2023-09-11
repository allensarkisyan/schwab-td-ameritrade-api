/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
/**
 * Filter Buy Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterBuyTrades(trades) {
  return trades?.filter(({ description }) => description === 'BUY TRADE');
}
/**
 * Filter Sell Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterSellTrades(trades) {
  return trades?.filter(({ description }) => description === 'SELL TRADE');
}
/**
 * Filter Opening Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOpeningTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'OPENING');
}
/**
 * Filter Closing Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterClosingTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'CLOSING');
}
/**
 * Filter Open Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOpeningShortSales(trades) {
  return trades?.filter(({ description }) => description === 'SHORT SALE');
}
/**
 * Filter Closing Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterClosingShortSales(trades) {
  return trades?.filter(
    ({ description }) => description === 'CLOSE SHORT POSITION',
  );
}
/**
 * Filter Option Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOptionTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) =>
      transactionItem?.instrument?.assetType === 'OPTION',
  );
}
/**
 * Filter Equity Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterEquityTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) =>
      transactionItem?.instrument?.assetType === 'EQUITY',
  );
}
/**
 * Group Trades by Order ID
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByOrderId(trades) {
  return trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
}
/**
 * Group Trades by Instrument
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrument(trades) {
  return trades?.reduce((a, b) => {
    if (b?.transactionItem?.instrument?.assetType === 'OPTION') {
      if (!b?.transactionItem?.instrument?.underlyingSymbol) {
        return a;
      }
      a[b?.transactionItem?.instrument?.underlyingSymbol] = [
        ...(a[b?.transactionItem?.instrument?.underlyingSymbol] || []),
        b,
      ];
    } else {
      a[b?.transactionItem?.instrument?.symbol] = [
        ...(a[b?.transactionItem?.instrument?.symbol] || []),
        b,
      ];
    }
    return a;
  }, {});
}
/**
 * Group Trades by Instrument Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentSymbol(trades) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.symbol) {
      return a;
    }
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Instrument Underlying Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentUnderlyingSymbol(trades) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.underlyingSymbol) {
      return a;
    }
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Instrument CUSIP
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentCUSIP(trades) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.cusip) {
      return a;
    }
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Asset Type
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByAssetType(trades) {
  return trades?.reduce((a, b) => {
    const symbol =
      b?.transactionItem?.instrument?.assetType === 'OPTION'
        ? b?.transactionItem?.instrument?.underlyingSymbol
        : b?.transactionItem?.instrument?.symbol;
    if (!symbol) {
      return a;
    }
    if (!a[symbol]) {
      a[symbol] = { symbol, equity: [], options: [] };
    }
    if (b.transactionItem.instrument.assetType === 'OPTION') {
      a[symbol].options = [...(a[symbol].options || []), b];
    } else {
      a[symbol].equity = [...(a[symbol].equity || []), b];
    }
    return a;
  }, {});
}
