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
const getBuyTrades = (trades) =>
  trades?.filter((i) => i.description === 'BUY TRADE');
exports.getBuyTrades = getBuyTrades;
const getSellTrades = (trades) =>
  trades?.filter((i) => i.description === 'SELL TRADE');
exports.getSellTrades = getSellTrades;
const getOpeningTrades = (trades) =>
  trades?.filter((i) => i.transactionItem.positionEffect === 'OPENING');
exports.getOpeningTrades = getOpeningTrades;
const getClosingTrades = (trades) =>
  trades?.filter((i) => i.transactionItem.positionEffect === 'CLOSING');
exports.getClosingTrades = getClosingTrades;
const getOpeningShortSales = (trades) =>
  trades?.filter((i) => i.description === 'SHORT SALE');
exports.getOpeningShortSales = getOpeningShortSales;
const getClosingShortSales = (trades) =>
  trades?.filter((i) => i.description === 'CLOSE SHORT POSITION');
exports.getClosingShortSales = getClosingShortSales;
const groupByOrderId = (trades) =>
  trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
exports.groupByOrderId = groupByOrderId;
const getOptionTrades = (trades) =>
  trades?.filter((i) => i.transactionItem.instrument.assetType === 'OPTION');
exports.getOptionTrades = getOptionTrades;
const getEquityTrades = (trades) =>
  trades?.filter((i) => i.transactionItem.instrument.assetType === 'EQUITY');
exports.getEquityTrades = getEquityTrades;
const groupByInstrument = (trades) =>
  trades?.reduce((a, b) => {
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
exports.groupByInstrument = groupByInstrument;
const groupByInstrumentSymbol = (trades) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b,
    ];
    return a;
  }, {});
exports.groupByInstrumentSymbol = groupByInstrumentSymbol;
const groupByInstrumentUnderlyingSymbol = (trades) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b,
    ];
    return a;
  }, {});
exports.groupByInstrumentUnderlyingSymbol = groupByInstrumentUnderlyingSymbol;
const groupByInstrumentCUSIP = (trades) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b,
    ];
    return a;
  }, {});
exports.groupByInstrumentCUSIP = groupByInstrumentCUSIP;
const groupByAssetType = (trades) =>
  trades?.reduce((a, b) => {
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
exports.groupByAssetType = groupByAssetType;
