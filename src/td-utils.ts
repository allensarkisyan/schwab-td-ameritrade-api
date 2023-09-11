/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import type {
  TradeTransaction
} from './@types/index.js';

/**
 * Get Buy Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getBuyTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'BUY TRADE');

/**
 * Get Sell Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getSellTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'SELL TRADE');

/**
 * Get Opening Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getOpeningTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.transactionItem.positionEffect === 'OPENING');

/**
 * Get Closing Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getClosingTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.transactionItem.positionEffect === 'CLOSING');

/**
 * Get Open Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getOpeningShortSales = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'SHORT SALE');

/**
 * Get Closing Short Sale Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getClosingShortSales = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'CLOSE SHORT POSITION');

/**
 * Group Trades by Order ID
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByOrderId = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});

/**
 * Get Option Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getOptionTrades = (trades: TradeTransaction[]) => 
  trades?.filter((i) => (i.transactionItem.instrument.assetType === 'OPTION'));

/**
 * Get Equity Trades
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const getEquityTrades = (trades: TradeTransaction[]) => 
  trades?.filter((i) => (i.transactionItem.instrument.assetType === 'EQUITY'));

/**
 * Group Trades by Instrument
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByInstrument = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    if (b.transactionItem.instrument.assetType === 'OPTION') {
      a[b.transactionItem.instrument.underlyingSymbol] = [
        ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
        b
      ];
    } else {
      a[b.transactionItem.instrument.symbol] = [
        ...(a[b.transactionItem.instrument.symbol] || []),
        b
      ];
    }

    return a;
  }, {});

/**
 * Group Trades by Instrument Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByInstrumentSymbol = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b
    ];
    return a;
  }, {});

/**
 * Group Trades by Instrument Underlying Symbol
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByInstrumentUnderlyingSymbol = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b
    ];
    return a;
  }, {});

/**
 * Group Trades by Instrument CUSIP
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByInstrumentCUSIP = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b
    ];
    return a;
  }, {});

/**
 * Group Trades by Asset Type
 * @param {TradeTransaction[]} trades - TRADE Transactions
 * @returns {TradeTransaction[]}
 */
export const groupByAssetType = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
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