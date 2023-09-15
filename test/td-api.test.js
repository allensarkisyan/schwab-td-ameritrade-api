/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

const {
  TDAmeritradeAPI,
  createTDAmeritradeAPIClient,
} = require('../dist/cjs/td-api.js');

const {
  getRequestUrl,
  getFetchOptions,
  getAccessTokenExpirationDetails,
} = require('../dist/cjs/utils.js');

const ACCESS_TOKEN_MOCK = {
  error: null,
  data: {
    access_token: '123',
    refresh_token: '123',
    refresh_token_expires_in: 123
  }
};

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
    'TDAmeritradeAPI authenticate should return new access token': ACCESS_TOKEN_MOCK,
    'TDAmeritradeAPI refreshAccessToken should return new access token': ACCESS_TOKEN_MOCK,
    'TDAmeritradeAPI authenticate / refreshAccessToken error handling should return an Error if missing access token': ERROR_RESPONSE,
    'TDAmeritradeAPI getAccounts should return accounts': GET_ACCOUNTS_MOCK,
    'TDAmeritradeAPI getAccount should return account': GET_ACCOUNT_MOCK,
    'TDAmeritradeAPI getUserPrincipals should return user principals': GET_USER_PRINCIPALS_MOCK,
    'TDAmeritradeAPI getMarketMovers should return market movers': MARKET_MOVERS_MOCK,
  };
  
  // Generate test cases...
  const classProperties = Object.getOwnPropertyNames(new TDAmeritradeAPI({ clientId:'1', callbackUrl:'1' }));
  
  classProperties.forEach(prop => {
    const mockResponseProp = `TDAmeritradeAPI ${prop}`;
  
    if (Object.keys(mockResponses).filter(i => i.match(new RegExp(mockResponseProp, 'gim'))).length === 0) {
      mockResponses[`${mockResponseProp} should return generic response`] = GENERIC_DATA_RESPONSE_MOCK;
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

    tdApi.setUserAccessToken('TEST', true, 'TEST', 123);

    done();
  });

  describe('create new TDAmeritradeAPI instance', () => {
    it('should throw an Error if missing `clientId`', async () => {
      expect(() => new TDAmeritradeAPI()).toThrow('Missing TD Ameritrade API Client ID.');
    });

    it('should throw an Error if missing `callbackUrl`', async () => {
      expect(() => new TDAmeritradeAPI({ clientId: '123' })).toThrow('Missing TD Ameritrade API Client Callback URL.');
    });

    it('should create new instance of TDAmeritradeAPI', async () => {
      const result = new TDAmeritradeAPI({ clientId: '123', callbackUrl: 'TEST' });

      expect(true).toEqual(result instanceof TDAmeritradeAPI);
    });
  });

  describe('createTDAmeritradeAPIClient', () => {
    it('should create new instance of TDAmeritradeAPI', async () => {
      const result = createTDAmeritradeAPIClient({ clientId: '123', callbackUrl: 'TEST' });

      expect(true).toEqual(result instanceof TDAmeritradeAPI);
    });
  });

  describe('private utility functions', () => {
    it('getRequestUrl should craft new URL Object', async () => {
      const result = getRequestUrl({
        url: '/v1/marketdata/quotes',
        method: 'GET'
      });

      expect(true).toEqual(result instanceof URL);
      expect(result.toString()).toEqual(`https://api.tdameritrade.com/v1/marketdata/quotes`);
    });

    it('getRequestUrl should return a base URL if nothing is passed', async () => {
      const result = getRequestUrl();

      expect(result.toString()).toEqual(`https://api.tdameritrade.com/`);
    });

    it('getRequestUrl should handle query params', async () => {
      const result = getRequestUrl({
        url: '/v1/marketdata/quotes',
        method: 'GET',
        params: {
          symbol: 'ZXZZT'
        }
      });

      expect(result.toString()).toEqual(`https://api.tdameritrade.com/v1/marketdata/quotes?symbol=ZXZZT`);
    });

    it('getFetchOptions should handle setting default options', async () => {
      const result = getFetchOptions({
        url: '/v1/marketdata/quotes'
      });

      expect(result).toEqual({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });

    it('getFetchOptions should handle POST requests with data as an Object', async () => {
      const result = getFetchOptions({
        url: '/v1/marketdata/quotes',
        method: 'POST',
        data: {
          symbol: 'ZXZZT'
        }
      });

      expect(result).toEqual({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symbol: 'ZXZZT' })
      });

      expect(typeof result.body).toEqual('string');
    });

    it('getFetchOptions should handle POST requests with data as an String', async () => {
      const result = getFetchOptions({
        url: '/v1/marketdata/quotes',
        method: 'POST',
        data: 'symbol=ZXZZT'
      });

      expect(result).toEqual({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: 'symbol=ZXZZT'
      });
    });

    it('getAccessTokenExpirationDetails should handle expired access tokens', async () => {
      const dataStore = {
        userAccessToken: 'TEST',
        accessTokenExpires: new Date().toJSON(),
        refreshToken: 'TEST',
        refreshTokenExpires: new Date().toJSON(),
      };

      const result = getAccessTokenExpirationDetails(dataStore);

      expect(result).toEqual({
        now: result.now,
        isAccessTokenExpired: true,
        isRefreshTokenExpired: true,
      });
    });

    it('getAccessTokenExpirationDetails should return default response', async () => {
      const result = getAccessTokenExpirationDetails();

      expect(result).toEqual({
        now: result.now,
        isAccessTokenExpired: false,
        isRefreshTokenExpired: false,
      });
    });
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

  describe('setUserAccessToken', () => {
    it('should remove access token if nothing is passed', async () => {
      const result = tdApi.setUserAccessToken();

      expect(result).toBe(undefined);
    });

    it('should error if invalid type is passed', async () => {
      const result = tdApi.setUserAccessToken(new Date());

      expect(result).toBe(undefined);
    });

    it('should return generic response', async () => {
      const result = tdApi.setUserAccessToken('TEST');

      expect(result).toBe(undefined);
    });
  });

  describe('authenticate', () => {
    it('should return an Error if missing access token', async () => {
      const result = await tdApi.authenticate('TEST');
      expect(result).toEqual({ error: 'ACCESS TOKEN NOT AVAILABLE', data: null });
    });

    it('should return new access token', async () => {
      const result = await tdApi.authenticate('TEST');

      expect(result).toEqual(ACCESS_TOKEN_MOCK);
    });
  });

  describe('refreshAccessToken', () => {
    it('should return an Error if missing access token', async () => {
      const result = await tdApi.refreshAccessToken('TEST');
      expect(result).toEqual({ error: 'ACCESS TOKEN NOT AVAILABLE', data: null });
    });

    it('should return new access token', async () => {
      const result = await tdApi.refreshAccessToken('TEST');

      expect(result).toEqual(ACCESS_TOKEN_MOCK);
    });
  });

  describe('authenticate / refreshAccessToken error handling', () => {
    it('should return an Error if missing access token', async () => {
      const result = await tdApi.authenticate();
      expect(result).toEqual(ERROR_RESPONSE);
    });

    it('should return an Error if missing access token', async () => {
      const result = await tdApi.refreshAccessToken();
      expect(result).toEqual(ERROR_RESPONSE);
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

      // WORK AROUND FOR MOCKED RESPONSE BEING DUPLICATED THROUGH #handleRequest...
      expect({ error: null, data: result.data.up[0] }).toEqual(MARKET_MOVERS_MOCK);
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

  describe('placeOrder', () => {
    it('should return an Error if orderRequest is invalid', async () => {
      const result = await tdApi.placeOrder();
      expect(result).toEqual({ error: 'INVALID ORDER REQUEST', data: null });
    });

    it('should return generic response', async () => {
      const result = await tdApi.placeOrder(
        'TEST',
        0.01,
        [
          {
            instruction: 'BUY',
            quantity: 1,
            instrument: {
              symbol: 'ZXZZT',
              assetType: 'EQUITY',
            },
          }
        ]
      );

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('cancelOrder', () => {
    it('should return an Error if no accountId or orderId is passed', async () => {
      const result = await tdApi.openOrder();
      expect(result).toEqual({ error: 'INVALID ORDER REQUEST', data: null });
    });

    it('should return generic response', async () => {
      const result = await tdApi.cancelOrder('TEST', 'TEST');

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('openOrder', () => {
    it('should return an Error if orderRequest is invalid', async () => {
      const result = await tdApi.openOrder();
      expect(result).toEqual({ error: 'INVALID ORDER REQUEST', data: null });
    });

    it('should return generic response', async () => {
      const result = await tdApi.openOrder(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

  describe('closeOrder', () => {
    it('should return an Error if orderRequest is invalid', async () => {
      const result = await tdApi.closeOrder();
      expect(result).toEqual({ error: 'INVALID ORDER REQUEST', data: null });
    });

    it('should return generic response', async () => {
      const result = await tdApi.closeOrder(ORDER_REQUEST_CONFIG);

      expect(result).toEqual(GENERIC_DATA_RESPONSE_MOCK);
    });
  });

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