/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

const {
  filterBuyTrades,
  filterSellTrades,
  filterOpeningTrades,
  filterClosingTrades,
  filterOpeningShortSales,
  filterClosingShortSales,
  filterOptionTrades,
  filterEquityTrades,
  groupByOrderId,
  groupByInstrument,
  groupByInstrumentSymbol,
  groupByInstrumentUnderlyingSymbol,
  groupByInstrumentCUSIP,
  groupByAssetType
} = require('../dist/cjs/td-utils.js')

/* Generate test cases
const utils = [
  'filterBuyTrades',
  'filterSellTrades',
  'filterOpeningTrades',
  'filterClosingTrades',
  'filterOpeningShortSales',
  'filterClosingShortSales',
  'filterOptionTrades',
  'filterEquityTrades',
  'groupByOrderId',
  'groupByInstrument',
  'groupByInstrumentSymbol',
  'groupByInstrumentUnderlyingSymbol',
  'groupByInstrumentCUSIP',
  'groupByAssetType',
];

utils.forEach(prop => {
  const mockResponseProp = `TDAmeritrade Utils ${prop} should return generic response`;

  console.log(`
  describe('${prop}', () => {
    it('should return generic response', async () => {
      const result = await ${prop}(TRADES);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });
  `)
});
*/

const TRADES = [
  {
    orderId: '1',
    description: 'BUY TRADE'
  },
  {
    description: 'SELL TRADE'
  },
  {
    orderId: '1',
    transactionItem: {
      positionEffect: 'OPENING'
    }
  },
  {
    transactionItem: {
      positionEffect: 'CLOSING'
    }
  },
  {
    description: 'SHORT SALE'
  },
  {
    description: 'CLOSE SHORT POSITION'
  },
  {
    transactionItem: {
      instrument: {
        cusip: 'ZXZZT',
        symbol: 'ZXZZT',
        underlyingSymbol: 'ZXZZT',
        assetType: 'OPTION',
      }
    }
  },
  {
    transactionItem: {
      instrument: {
        cusip: 'ZXZZT',
        symbol: 'ZXZZT',
        assetType: 'EQUITY',
      }
    }
  },
  {
    transactionItem: {
      instrument: {
        cusip: 'NTEST',
        symbol: 'NTEST',
        underlyingSymbol: 'NTEST',
        assetType: 'OPTION',
      }
    }
  },
  {
    transactionItem: {
      instrument: {
        cusip: 'NTEST',
        symbol: 'NTEST',
        assetType: 'EQUITY',
      }
    }
  },
];

const GROUPED_RESPONSE_GENERIC = {
  'ZXZZT': [
    {
      transactionItem: {
        instrument: {
          cusip: 'ZXZZT',
          symbol: 'ZXZZT',
          underlyingSymbol: 'ZXZZT',
          assetType: 'OPTION',
        }
      }
    },
    {
      transactionItem: {
        instrument: {
          cusip: 'ZXZZT',
          symbol: 'ZXZZT',
          assetType: 'EQUITY',
        }
      }
    },
  ],
  'NTEST': [
    {
      transactionItem: {
        instrument: {
          cusip: 'NTEST',
          symbol: 'NTEST',
          underlyingSymbol: 'NTEST',
          assetType: 'OPTION',
        }
      }
    },
    {
      transactionItem: {
        instrument: {
          cusip: 'NTEST',
          symbol: 'NTEST',
          assetType: 'EQUITY',
        }
      }
    },
  ],
};

describe('TDAmeritrade Utils', () => {
  describe('filterBuyTrades', () => {
    it('should return generic response', async () => {
      const result = filterBuyTrades(TRADES);
  
      expect(result).toEqual([{
        orderId: '1',
        description: 'BUY TRADE'
      }]);
    });
  });
  
  describe('filterSellTrades', () => {
    it('should return generic response', async () => {
      const result = filterSellTrades(TRADES);
  
      expect(result).toEqual([{
        description: 'SELL TRADE'
      }]);
    });
  });
  
  describe('filterOpeningTrades', () => {
    it('should return generic response', async () => {
      const result = filterOpeningTrades(TRADES);
  
      expect(result).toEqual([{
        orderId: '1',
        transactionItem: {
          positionEffect: 'OPENING'
        }
      }]);
    });
  });
  
  describe('filterClosingTrades', () => {
    it('should return generic response', async () => {
      const result = filterClosingTrades(TRADES);
  
      expect(result).toEqual([{
        transactionItem: {
          positionEffect: 'CLOSING'
        }
      }]);
    });
  });
  
  describe('filterOpeningShortSales', () => {
    it('should return generic response', async () => {
      const result = filterOpeningShortSales(TRADES);
  
      expect(result).toEqual([{
        description: 'SHORT SALE'
      }]);
    });
  });
  
  describe('filterClosingShortSales', () => {
    it('should return generic response', async () => {
      const result = filterClosingShortSales(TRADES);
  
      expect(result).toEqual([{
        description: 'CLOSE SHORT POSITION'
      }]);
    });
  });
  
  describe('filterOptionTrades', () => {
    it('should return generic response', async () => {
      const result = filterOptionTrades(TRADES);
  
      expect(result).toEqual([
        {
          transactionItem: {
            instrument: {
              cusip: 'ZXZZT',
              symbol: 'ZXZZT',
              underlyingSymbol: 'ZXZZT',
              assetType: 'OPTION',
            }
          }
        },
        {
          transactionItem: {
            instrument: {
              cusip: 'NTEST',
              symbol: 'NTEST',
              underlyingSymbol: 'NTEST',
              assetType: 'OPTION',
            }
          }
        },
      ]);
    });
  });
  
  describe('filterEquityTrades', () => {
    it('should return generic response', async () => {
      const result = filterEquityTrades(TRADES);
  
      expect(result).toEqual([
        {
          transactionItem: {
            instrument: {
              cusip: 'ZXZZT',
              symbol: 'ZXZZT',
              assetType: 'EQUITY',
            }
          }
        },
        {
          transactionItem: {
            instrument: {
              cusip: 'NTEST',
              symbol: 'NTEST',
              assetType: 'EQUITY',
            }
          }
        }
      ]);
    });
  });
  
  describe('groupByOrderId', () => {
    it('should return generic response', async () => {
      const result = groupByOrderId(TRADES);
  
      expect({ '1': result['1'] }).toEqual({
        '1': [
          {
            orderId: '1',
            description: 'BUY TRADE'
          },
          {
            orderId: '1',
            transactionItem: {
              positionEffect: 'OPENING'
            }
          }
        ]
      });
    });
  });
  
  describe('groupByInstrument', () => {
    it('should return generic response', async () => {
      const result = groupByInstrument(TRADES);
  
      expect({
        'ZXZZT': result['ZXZZT'],
        'NTEST': result['NTEST']
      }).toEqual(GROUPED_RESPONSE_GENERIC);
    });
  });
  
  describe('groupByInstrumentSymbol', () => {
    it('should return generic response', async () => {
      const result = groupByInstrumentSymbol(TRADES);
  
      expect({
        'ZXZZT': result['ZXZZT'],
        'NTEST': result['NTEST']
      }).toEqual(GROUPED_RESPONSE_GENERIC);
    });
  });
  
  describe('groupByInstrumentUnderlyingSymbol', () => {
    it('should return generic response', async () => {
      const result = groupByInstrumentUnderlyingSymbol(TRADES);
  
      expect({
        'ZXZZT': result['ZXZZT'],
        'NTEST': result['NTEST']
      }).toEqual({
        'ZXZZT': [
          {
            transactionItem: {
              instrument: {
                cusip: 'ZXZZT',
                symbol: 'ZXZZT',
                underlyingSymbol: 'ZXZZT',
                assetType: 'OPTION',
              }
            }
          },
        ],
        'NTEST': [
          {
            transactionItem: {
              instrument: {
                cusip: 'NTEST',
                symbol: 'NTEST',
                underlyingSymbol: 'NTEST',
                assetType: 'OPTION',
              }
            }
          },
        ]
      });
    });
  });
  
  describe('groupByInstrumentCUSIP', () => {
    it('should return generic response', async () => {
      const result = groupByInstrumentCUSIP(TRADES);
  
      expect({ 'ZXZZT': result['ZXZZT'], 'NTEST': result['NTEST'] }).toEqual(GROUPED_RESPONSE_GENERIC);
    });
  });
  
  describe('groupByAssetType', () => {
    it('should return generic response', async () => {
      const result = groupByAssetType(TRADES);
  
      expect({ 'ZXZZT': result['ZXZZT'], 'NTEST': result['NTEST'] }).toEqual({
        'ZXZZT': {
          symbol: 'ZXZZT',
          equity: [
            {
              transactionItem: {
                instrument: {
                  cusip: 'ZXZZT',
                  symbol: 'ZXZZT',
                  assetType: 'EQUITY',
                }
              }
            },
          ],
          options: [
            {
              transactionItem: {
                instrument: {
                  cusip: 'ZXZZT',
                  symbol: 'ZXZZT',
                  underlyingSymbol: 'ZXZZT',
                  assetType: 'OPTION',
                }
              }
            }
          ]
        },
        'NTEST': {
          symbol: 'NTEST',
          equity: [
            {
              transactionItem: {
                instrument: {
                  cusip: 'NTEST',
                  symbol: 'NTEST',
                  assetType: 'EQUITY',
                }
              }
            },
          ],
          options: [
            {
              transactionItem: {
                instrument: {
                  cusip: 'NTEST',
                  symbol: 'NTEST',
                  underlyingSymbol: 'NTEST',
                  assetType: 'OPTION',
                }
              }
            }
          ]
        }
      });
    });
  });
});