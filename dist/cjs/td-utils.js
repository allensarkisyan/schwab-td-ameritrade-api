'use strict';
/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.groupByAssetType =
  exports.groupByInstrumentCUSIP =
  exports.groupByInstrumentUnderlyingSymbol =
  exports.groupByInstrumentSymbol =
  exports.groupByInstrument =
  exports.groupByOrderId =
  exports.filterEquityTrades =
  exports.filterOptionTrades =
  exports.filterClosingShortSales =
  exports.filterOpeningShortSales =
  exports.filterClosingTrades =
  exports.filterOpeningTrades =
  exports.filterSellTrades =
  exports.filterBuyTrades =
    void 0;
/**
 * [td-utils.js] - Filter Buy Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterBuyTrades(trades) {
  return trades?.filter(({ description }) => description === 'BUY TRADE');
}
exports.filterBuyTrades = filterBuyTrades;
/**
 * [td-utils.js] - Filter Sell Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterSellTrades(trades) {
  return trades?.filter(({ description }) => description === 'SELL TRADE');
}
exports.filterSellTrades = filterSellTrades;
/**
 * [td-utils.js] - Filter Opening Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterOpeningTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) => transactionItem?.positionEffect === 'OPENING',
  );
}
exports.filterOpeningTrades = filterOpeningTrades;
/**
 * [td-utils.js] - Filter Closing Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterClosingTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) => transactionItem?.positionEffect === 'CLOSING',
  );
}
exports.filterClosingTrades = filterClosingTrades;
/**
 * [td-utils.js] - Filter Open Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterOpeningShortSales(trades) {
  return trades?.filter(({ description }) => description === 'SHORT SALE');
}
exports.filterOpeningShortSales = filterOpeningShortSales;
/**
 * [td-utils.js] - Filter Closing Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterClosingShortSales(trades) {
  return trades?.filter(
    ({ description }) => description === 'CLOSE SHORT POSITION',
  );
}
exports.filterClosingShortSales = filterClosingShortSales;
/**
 * [td-utils.js] - Filter Option Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterOptionTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) =>
      transactionItem?.instrument?.assetType === 'OPTION',
  );
}
exports.filterOptionTrades = filterOptionTrades;
/**
 * [td-utils.js] - Filter Equity Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function filterEquityTrades(trades) {
  return trades?.filter(
    ({ transactionItem }) =>
      transactionItem?.instrument?.assetType === 'EQUITY',
  );
}
exports.filterEquityTrades = filterEquityTrades;
/**
 * [td-utils.js] - Group Trades by Order ID
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByOrderId(trades) {
  return trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
}
exports.groupByOrderId = groupByOrderId;
/**
 * [td-utils.js] - Group Trades by Instrument
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByInstrument(trades) {
  return trades?.reduce((a, b) => {
    if (b?.transactionItem?.instrument?.assetType === 'OPTION') {
      if (!b?.transactionItem?.instrument?.underlyingSymbol) {
        return b;
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
exports.groupByInstrument = groupByInstrument;
/**
 * [td-utils.js] - Group Trades by Instrument Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByInstrumentSymbol(trades) {
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
exports.groupByInstrumentSymbol = groupByInstrumentSymbol;
/**
 * [td-utils.js] - Group Trades by Instrument Underlying Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByInstrumentUnderlyingSymbol(trades) {
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
exports.groupByInstrumentUnderlyingSymbol = groupByInstrumentUnderlyingSymbol;
/**
 * [td-utils.js] - Group Trades by Instrument CUSIP
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByInstrumentCUSIP(trades) {
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
exports.groupByInstrumentCUSIP = groupByInstrumentCUSIP;
/**
 * [td-utils.js] - Group Trades by Asset Type
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
function groupByAssetType(trades) {
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
exports.groupByAssetType = groupByAssetType;
