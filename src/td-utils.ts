/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import type {
  TransactionData
} from './@types/index.js';

/**
 * [td-utils.js] - Filter Buy Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterBuyTrades(trades: TransactionData[]) {
  return trades?.filter(({ description }) => description === 'BUY TRADE');
}

/**
 * [td-utils.js] - Filter Sell Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterSellTrades(trades: TransactionData[]) {
  return trades?.filter(({ description }) => description === 'SELL TRADE');
}

/**
 * [td-utils.js] - Filter Opening Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOpeningTrades(trades: TransactionData[]) {
  return trades?.filter(i => i.transactionItem.positionEffect === 'OPENING');
}

/**
 * [td-utils.js] - Filter Closing Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterClosingTrades(trades: TransactionData[]) {
  return trades?.filter(i => i.transactionItem.positionEffect === 'CLOSING');
}

/**
 * [td-utils.js] - Filter Open Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOpeningShortSales(trades: TransactionData[]) {
  return trades?.filter(({ description }) => description === 'SHORT SALE');
}

/**
 * [td-utils.js] - Filter Closing Short Sale Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterClosingShortSales(trades: TransactionData[]) {
  return trades?.filter(({ description }) => description === 'CLOSE SHORT POSITION');
}

/**
 * [td-utils.js] - Filter Option Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterOptionTrades(trades: TransactionData[]) {
  return trades?.filter(({ transactionItem }) => (transactionItem?.instrument?.assetType === 'OPTION'));
}

/**
 * [td-utils.js] - Filter Equity Trades
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function filterEquityTrades(trades: TransactionData[]) {
  return trades?.filter(({ transactionItem }) => (transactionItem?.instrument?.assetType === 'EQUITY'));
}

/**
 * [td-utils.js] - Group Trades by Order ID
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByOrderId(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});
}

/**
 * [td-utils.js] - Group Trades by Instrument
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrument(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    if (b?.transactionItem?.instrument?.assetType === 'OPTION') {
      if (!b?.transactionItem?.instrument?.underlyingSymbol) {
        return a;
      }

      a[b?.transactionItem?.instrument?.underlyingSymbol] = [
        ...(a[b?.transactionItem?.instrument?.underlyingSymbol] || []),
        b
      ];
    } else {
      a[b?.transactionItem?.instrument?.symbol] = [
        ...(a[b?.transactionItem?.instrument?.symbol] || []),
        b
      ];
    }

    return a;
  }, {});
}

/**
 * [td-utils.js] - Group Trades by Instrument Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentSymbol(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.symbol) {
      return a;
    }

    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b
    ];
    return a;
  }, {});
}

/**
 * [td-utils.js] - Group Trades by Instrument Underlying Symbol
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentUnderlyingSymbol(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.underlyingSymbol) {
      return a;
    }

    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b
    ];
    return a;
  }, {});
}

/**
 * [td-utils.js] - Group Trades by Instrument CUSIP
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByInstrumentCUSIP(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    if (!b?.transactionItem?.instrument?.cusip) {
      return a;
    }

    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b
    ];
    return a;
  }, {});
}

/**
 * [td-utils.js] - Group Trades by Asset Type
 * @param {TransactionData[]} trades - TRADE Transactions
 * @returns {TransactionData[]}
 */
export function groupByAssetType(trades: TransactionData[]) {
  return trades?.reduce((a, b) => {
    const symbol = (b?.transactionItem?.instrument?.assetType === 'OPTION'
      ? b?.transactionItem?.instrument?.underlyingSymbol
      : b?.transactionItem?.instrument?.symbol
    );

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