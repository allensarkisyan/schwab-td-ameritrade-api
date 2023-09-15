/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

const { TDAmeritradeAPI } = require('../dist/cjs/td-api.js');

const ACCOUNT_MOCK = {
  securitiesAccount: {
    accountId: '123'
  }
};

const GET_ACCOUNTS_MOCK = {
  error: null,
  data: [ACCOUNT_MOCK]
};

const GET_ACCOUNT_MOCK = {
  error: null,
  data: ACCOUNT_MOCK
};

const GET_USER_PRINCIPALS_MOCK = {
  error: null,
  data: {
    primaryAccountId: '123'
  }
};

const MARKET_MOVERS_MOCK = {
  error: null,
  data: {
    up: [],
    down: []
  }
};

const ERROR_RESPONSE = {
  error: 'ERROR',
  data: null
};

const GENERIC_DATA_RESPONSE_MOCK = {
  error: null,
  data: { test: 'passed' }
};

const ORDER_REQUEST_CONFIG = {
  accountId: 'TEST',
  symbol: 'ZXZZT',
  price: 0.01,
  quantity: 1
};

describe('TDAmeritradeAPI', () => {
  let tdApi;

  const mockResponses = {
    'TDAmeritradeAPI getAccounts should return accounts': GET_ACCOUNTS_MOCK,
    'TDAmeritradeAPI getAccount should return account': GET_ACCOUNT_MOCK,
    'TDAmeritradeAPI getUserPrincipals should return user principals': GET_USER_PRINCIPALS_MOCK,
    'TDAmeritradeAPI getMarketMovers should return market movers': MARKET_MOVERS_MOCK,
  };
  
  // Generate test cases...
  const classProperties = Object.getOwnPropertyNames(new TDAmeritradeAPI({ clientId:'1', callbackUrl:'1' }));
  
  classProperties.forEach(prop => {
    const mockResponseProp = `TDAmeritradeAPI ${prop} should return generic response`;
  
    if (!mockResponses[mockResponseProp]) {
      mockResponses[mockResponseProp] = GENERIC_DATA_RESPONSE_MOCK;
    }
  
    // console.log(`
    // describe(${prop}, () => {
    //   it('should return generic response', async () => {
    //     const result = await tdApi.${prop}();
  
    //     expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    //   });
    // });
    // `)
  });

  beforeEach((done) => {
    const currentMockResponse = mockResponses[expect.getState().currentTestName];

    const handleRequest = jest.fn().mockResolvedValue(currentMockResponse ?? GENERIC_DATA_RESPONSE_MOCK);

    tdApi = new TDAmeritradeAPI({
      clientId: 'TEST',
      callbackUrl: 'http://localhost:3000/callback',
      handleRequest
    });

    tdApi.setUserAccessToken('TEST');

    done();
  });

  describe('getAccounts', () => {
    it('should return accounts', async () => {
      const result = await tdApi.getAccounts();

      expect(result).toEqual(GET_ACCOUNTS_MOCK);
    });
  });

  describe('getAccount', () => {
    it('should return account', async () => {
      const result = await tdApi.getAccount('TEST');

      expect(result).toEqual(GET_ACCOUNT_MOCK);
    });
  });

  describe('getUserPrincipals', () => {
    it('should return user principals', async () => {
      const result = await tdApi.getUserPrincipals();

      expect(result).toEqual(GET_USER_PRINCIPALS_MOCK);
    });
  });

  // describe('setUserAccessToken', () => {
  //   it('should return generic response', async () => {
  //     const result = await tdApi.setUserAccessToken('TEST');

  //     // expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
  //   });
  // });

  describe('authenticate', () => {
    it('should return generic response', async () => {
      const result = await tdApi.authenticate('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('refreshAccessToken', () => {
    it('should return generic response', async () => {
      const result = await tdApi.refreshAccessToken('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getTransactions', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getTransactions('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getOrders', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getOrders('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getQuotes', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getQuotes('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getInstrument', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getInstrument('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getFundamentals', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getFundamentals('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getMarketDirectionalMover', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getMarketDirectionalMover('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getPriceHistory', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getPriceHistory('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getDailyPriceHistory', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getDailyPriceHistory('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getWeeklyPriceHistory', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getWeeklyPriceHistory('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getPeriodicPriceHistory', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getPeriodicPriceHistory('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getMarketMovers', () => {
    it('should return market movers', async () => {
      const result = await tdApi.getMarketMovers();

      expect(result).toEqual(MARKET_MOVERS_MOCK);
    });
  });

  describe('getOptionChain', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getOptionChain('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getWatchlists', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getWatchlists('TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('getWatchlist', () => {
    it('should return generic response', async () => {
      const result = await tdApi.getWatchlist('TEST', 'TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  // describe('placeOrder', () => {
  //   it('should return generic response', async () => {
  //     const result = await tdApi.placeOrder();

  //     expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
  //   });
  // });

  // describe('cancelOrder', () => {
  //   it('should return generic response', async () => {
  //     const result = await tdApi.cancelOrder();

  //     expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
  //   });
  // });

  // describe('openOrder', () => {
  //   it('should return generic response', async () => {
  //     const result = await tdApi.openOrder();

  //     expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
  //   });
  // });

  // describe('closeOrder', () => {
  //   it('should return generic response', async () => {
  //     const result = await tdApi.closeOrder();

  //     expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
  //   });
  // });

  describe('buyStock', () => {
    it('should return generic response', async () => {
      const result = await tdApi.buyStock(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('sellStock', () => {
    it('should return generic response', async () => {
      const result = await tdApi.sellStock(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('shortStock', () => {
    it('should return generic response', async () => {
      const result = await tdApi.shortStock(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('coverStock', () => {
    it('should return generic response', async () => {
      const result = await tdApi.coverStock(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('buyOption', () => {
    it('should return generic response', async () => {
      const result = await tdApi.buyOption(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('sellOption', () => {
    it('should return generic response', async () => {
      const result = await tdApi.sellOption(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('writeOption', () => {
    it('should return generic response', async () => {
      const result = await tdApi.writeOption(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('closeOption', () => {
    it('should return generic response', async () => {
      const result = await tdApi.closeOption(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });
});