/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import type {
  TradeTransaction
} from './@types/index.js';

export const getBuyTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'BUY TRADE');

export const getSellTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'SELL TRADE');

export const getOpeningTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.transactionItem.positionEffect === 'OPENING');

export const getClosingTrades = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.transactionItem.positionEffect === 'CLOSING');

export const getOpeningShortSales = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'SHORT SALE');

export const getClosingShortSales = (trades: TradeTransaction[]) =>
  trades?.filter(i => i.description === 'CLOSE SHORT POSITION');

export const groupByOrderId = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.orderId] = [...(a[b.orderId] || []), b];
    return a;
  }, {});

export const getOptionTrades = (trades: TradeTransaction[]) => 
  trades?.filter((i) => (i.transactionItem.instrument.assetType === 'OPTION'));

export const getEquityTrades = (trades: TradeTransaction[]) => 
  trades?.filter((i) => (i.transactionItem.instrument.assetType === 'EQUITY'));

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

export const groupByInstrumentSymbol = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.symbol] = [
      ...(a[b.transactionItem.instrument.symbol] || []),
      b
    ];
    return a;
  }, {});

export const groupByInstrumentUnderlyingSymbol = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.underlyingSymbol] = [
      ...(a[b.transactionItem.instrument.underlyingSymbol] || []),
      b
    ];
    return a;
  }, {});

export const groupByInstrumentCUSIP = (trades: TradeTransaction[]) =>
  trades?.reduce((a, b) => {
    a[b.transactionItem.instrument.cusip] = [
      ...(a[b.transactionItem.instrument.cusip] || []),
      b
    ];
    return a;
  }, {});

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