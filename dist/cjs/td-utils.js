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
  exports.getEquityTrades =
  exports.getOptionTrades =
  exports.groupByOrderId =
  exports.getClosingShortSales =
  exports.getOpeningShortSales =
  exports.getClosingTrades =
  exports.getOpeningTrades =
  exports.getSellTrades =
  exports.getBuyTrades =
    void 0;
/**
 * Get Buy Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getBuyTrades(trades) {
  return trades?.filter((i) => i.description === 'BUY TRADE');
}
exports.getBuyTrades = getBuyTrades;
/**
 * Get Sell Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getSellTrades(trades) {
  return trades?.filter((i) => i.description === 'SELL TRADE');
}
exports.getSellTrades = getSellTrades;
/**
 * Get Opening Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getOpeningTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'OPENING');
}
exports.getOpeningTrades = getOpeningTrades;
/**
 * Get Closing Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getClosingTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'CLOSING');
}
exports.getClosingTrades = getClosingTrades;
/**
 * Get Open Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getOpeningShortSales(trades) {
  return trades?.filter((i) => i.description === 'SHORT SALE');
}
exports.getOpeningShortSales = getOpeningShortSales;
/**
 * Get Closing Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getClosingShortSales(trades) {
  return trades?.filter((i) => i.description === 'CLOSE SHORT POSITION');
}
exports.getClosingShortSales = getClosingShortSales;
/**
 * Group Trades by Order ID
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByOrderId(trades) {
  return trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
}
exports.groupByOrderId = groupByOrderId;
/**
 * Get Option Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getOptionTrades(trades) {
  return trades?.filter(
    (i) => i.transactionItem.instrument.assetType === 'OPTION',
  );
}
exports.getOptionTrades = getOptionTrades;
/**
 * Get Equity Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function getEquityTrades(trades) {
  return trades?.filter(
    (i) => i.transactionItem.instrument.assetType === 'EQUITY',
  );
}
exports.getEquityTrades = getEquityTrades;
/**
 * Group Trades by Instrument
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByInstrument(trades) {
  return trades?.reduce((a, b) => {
    if (b.transactionItem.instrument.assetType === 'OPTION') {
      a[b.transactionItem.instrument.underlyingSymbol] = [
        ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
        b,
      ];
    } else {
      a[b.transactionItem.instrument.symbol] = [
        ...(a[b.transactionItem.instrument.symbol] || []),
        b,
      ];
    }
    return a;
  }, {});
}
exports.groupByInstrument = groupByInstrument;
/**
 * Group Trades by Instrument Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByInstrumentSymbol(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b,
    ];
    return a;
  }, {});
}
exports.groupByInstrumentSymbol = groupByInstrumentSymbol;
/**
 * Group Trades by Instrument Underlying Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByInstrumentUnderlyingSymbol(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b,
    ];
    return a;
  }, {});
}
exports.groupByInstrumentUnderlyingSymbol = groupByInstrumentUnderlyingSymbol;
/**
 * Group Trades by Instrument CUSIP
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByInstrumentCUSIP(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b,
    ];
    return a;
  }, {});
}
exports.groupByInstrumentCUSIP = groupByInstrumentCUSIP;
/**
 * Group Trades by Asset Type
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
function groupByAssetType(trades) {
  return trades?.reduce((a, b) => {
    const symbol =
      b.transactionItem.instrument.assetType === 'OPTION'
        ? b.transactionItem.instrument.underlyingSymbol
        : b.transactionItem.instrument.symbol;
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
