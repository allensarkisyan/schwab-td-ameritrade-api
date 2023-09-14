/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

const { TDAmeritradeAPI } = require('../dist/cjs/td-api.js');

const GET_USER_PRINCIPALS_MOCK = {
  error: null,
  data: {
    primaryAccountId: '123'
  }
};

const mockResponses = {
  'TDAmeritradeAPI getUserPrincipals should return user principals': GET_USER_PRINCIPALS_MOCK
};

describe('TDAmeritradeAPI', () => {
  let tdApi;

  beforeEach((done) => {
    const handleRequest = jest.fn().mockResolvedValue(mockResponses[expect.getState().currentTestName]);

    tdApi = new TDAmeritradeAPI({
      clientId: 'TEST',
      callbackUrl: 'http://localhost:3000/callback',
      handleRequest
    });

    tdApi.setUserAccessToken('TEST');

    done();
  });

  describe('getUserPrincipals', () => {
    it('should return user principals', async () => {
      const result = await tdApi.getUserPrincipals();

      expect(result).toEqual(GET_USER_PRINCIPALS_MOCK);
    });
  });
});