/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
/**
 * Get Buy Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getBuyTrades(trades) {
  return trades?.filter((i) => i.description === 'BUY TRADE');
}
/**
 * Get Sell Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getSellTrades(trades) {
  return trades?.filter((i) => i.description === 'SELL TRADE');
}
/**
 * Get Opening Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getOpeningTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'OPENING');
}
/**
 * Get Closing Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getClosingTrades(trades) {
  return trades?.filter((i) => i.transactionItem.positionEffect === 'CLOSING');
}
/**
 * Get Open Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getOpeningShortSales(trades) {
  return trades?.filter((i) => i.description === 'SHORT SALE');
}
/**
 * Get Closing Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getClosingShortSales(trades) {
  return trades?.filter((i) => i.description === 'CLOSE SHORT POSITION');
}
/**
 * Group Trades by Order ID
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByOrderId(trades) {
  return trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
}
/**
 * Get Option Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getOptionTrades(trades) {
  return trades?.filter(
    (i) => i.transactionItem.instrument.assetType === 'OPTION',
  );
}
/**
 * Get Equity Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function getEquityTrades(trades) {
  return trades?.filter(
    (i) => i.transactionItem.instrument.assetType === 'EQUITY',
  );
}
/**
 * Group Trades by Instrument
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByInstrument(trades) {
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
/**
 * Group Trades by Instrument Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByInstrumentSymbol(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Instrument Underlying Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByInstrumentUnderlyingSymbol(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Instrument CUSIP
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByInstrumentCUSIP(trades) {
  return trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b,
    ];
    return a;
  }, {});
}
/**
 * Group Trades by Asset Type
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export function groupByAssetType(trades) {
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
