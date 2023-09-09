'use strict';

/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

const getBuyTrades = (trades) => trades.filter(i => i.description === 'BUY TRADE');

const getSellTrades = (trades) => trades.filter(i => i.description === 'SELL TRADE');

const getOpeningTrades = (trades) => trades.filter(i => i.transactionItem.positionEffect === 'OPENING');

const getClosingTrades = (trades) => trades.filter(i => i.transactionItem.positionEffect === 'CLOSING');

const getOpeningShortSales = (trades) => trades.filter(i => i.description === 'SHORT SALE');

const getClosingShortSales = (trades) => trades.filter(i => i.description === 'CLOSE SHORT POSITION');

const groupByOrderId = (trades) => trades.reduce((a, b) => {
  a[b.orderId] = [...(a[b.orderId] || []), b];
  return a;
}, {});

const getOptionTrades = (trades) => trades.filter((i) => (i.transactionItem.instrument.assetType === 'OPTION'));

const getEquityTrades = (trades) => trades.filter((i) => (i.transactionItem.instrument.assetType === 'EQUITY'));

const groupByInstrument = (trades) => trades.reduce((a, b) => {
  if (b.transactionItem.instrument.assetType === 'OPTION') {
    a[b.transactionItem.instrument.underlyingSymbol] = [...(a[b.transactionItem.instrument.underlyingSymbol] || []), b];
  } else {
    a[b.transactionItem.instrument.symbol] = [...(a[b.transactionItem.instrument.symbol] || []), b];
  }

  return a;
}, {});

const groupByInstrumentSymbol = (trades) => trades.reduce((a, b) => {
  a[b.transactionItem.instrument.symbol] = [...(a[b.transactionItem.instrument.symbol] || []), b];
  return a;
}, {});

const groupByInstrumentUnderlyingSymbol = (trades) => trades.reduce((a, b) => {
  a[b.transactionItem.instrument.underlyingSymbol] = [...(a[b.transactionItem.instrument.underlyingSymbol] || []), b];
  return a;
}, {});

const groupByInstrumentCUSIP = (trades) => trades.reduce((a, b) => {
  a[b.transactionItem.instrument.cusip] = [...(a[b.transactionItem.instrument.cusip] || []), b];
  return a;
}, {});

const groupByAssetType = (trades) => !trades ? [] : trades.reduce((a, b) => {
  const symbol = (b.transactionItem.instrument.assetType === 'OPTION'
    ? b.transactionItem.instrument.underlyingSymbol
    : b.transactionItem.instrument.symbol
  );

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

exports.getBuyTrades = getBuyTrades;
exports.getClosingShortSales = getClosingShortSales;
exports.getClosingTrades = getClosingTrades;
exports.getEquityTrades = getEquityTrades;
exports.getOpeningShortSales = getOpeningShortSales;
exports.getOpeningTrades = getOpeningTrades;
exports.getOptionTrades = getOptionTrades;
exports.getSellTrades = getSellTrades;
exports.groupByAssetType = groupByAssetType;
exports.groupByInstrument = groupByInstrument;
exports.groupByInstrumentCUSIP = groupByInstrumentCUSIP;
exports.groupByInstrumentSymbol = groupByInstrumentSymbol;
exports.groupByInstrumentUnderlyingSymbol = groupByInstrumentUnderlyingSymbol;
exports.groupByOrderId = groupByOrderId;
