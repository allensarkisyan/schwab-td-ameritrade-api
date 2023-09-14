'use strict';
/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.initializeTDAmeritradeAPIAgent = void 0;
const fs_1 = __importDefault(require('fs'));
const td_api_js_1 = require('./td-api.js');
let tdApi = null;
let isRefreshingAcessToken = false;
let isInitialized = false;
let interval = null;
const refreshTDAmeritradeAccessToken = async () => {
  if (isRefreshingAcessToken || !tdApi) {
    return;
  }
  try {
    const data = JSON.parse(
      fs_1.default.readFileSync('./td-token.json').toString('utf-8'),
    );
    let {
      principals,
      userAccessToken,
      accessTokenExpires,
      refreshToken,
      refreshTokenExpires,
    } = data;
    const now = Date.now();
    const fiveMinsFromNow = now + 60 * 1000 * 5;
    const accessTokenExpiresDt = new Date(accessTokenExpires).getTime();
    const isAccessTokenExpired =
      userAccessToken &&
      accessTokenExpires &&
      fiveMinsFromNow > accessTokenExpiresDt;
    console.log(
      'ACCESS TOKEN EXPIRES',
      accessTokenExpires,
      isAccessTokenExpired,
    );
    if (isAccessTokenExpired && !isRefreshingAcessToken) {
      isRefreshingAcessToken = true;
      console.log('ACCESS TOKEN REFRESH');
      const authResponse = await tdApi.refreshAccessToken(refreshToken);
      if (!authResponse?.access_token) {
        return null;
      }
      console.log('ACCESS TOKEN REFRESH authResponse', authResponse?.scope);
      tdApi.setUserAccessToken(authResponse.access_token, true);
      const expires = new Date(now + authResponse.expires_in * 1000).toJSON();
      fs_1.default.writeFileSync(
        './td-token.json',
        JSON.stringify(
          {
            userAccessToken: authResponse.access_token,
            accessTokenExpires: expires,
            refreshToken,
            refreshTokenExpires,
            principals,
          },
          null,
          2,
        ),
      );
      isRefreshingAcessToken = false;
    }
  } catch (e) {
    console.log(e);
  }
};
async function initializeTDAmeritradeAPIAgent({
  userAccessToken,
  accessTokenExpires,
  refreshToken,
  refreshTokenExpires,
}) {
  if (isInitialized) {
    return;
  }
  tdApi = new td_api_js_1.TDAmeritradeAPI();
  const now = Date.now();
  const fiveMinsFromNow = now + 60 * 1000 * 5;
  const accessTokenExpiresDt = new Date(accessTokenExpires).getTime();
  const refreshTokenExpiresDt = new Date(refreshTokenExpires).getTime();
  const isAccessTokenExpired =
    userAccessToken &&
    accessTokenExpires &&
    fiveMinsFromNow > accessTokenExpiresDt;
  const isRefreshTokenExpired =
    refreshToken &&
    refreshTokenExpires &&
    fiveMinsFromNow > refreshTokenExpiresDt;
  if (refreshToken && isRefreshTokenExpired) {
    // TODO: FORCE LOG OUT
    console.log('FORCE LOG OUT');
  } else if (userAccessToken && isAccessTokenExpired) {
    await refreshTDAmeritradeAccessToken();
  }
  if (userAccessToken) {
    if (!isAccessTokenExpired) {
      // ASSUME ACCESS TOKEN HAS ALREADY BEEN UPDATED
      tdApi.setUserAccessToken(userAccessToken);
    }
    const { data: principals } = await tdApi.getUserPrincipals();
    interval = setInterval(refreshTDAmeritradeAccessToken, 60000);
    fs_1.default.writeFileSync(
      './td-token.json',
      JSON.stringify(
        {
          userAccessToken,
          accessTokenExpires,
          refreshToken,
          refreshTokenExpires,
          principals,
        },
        null,
        2,
      ),
    );
  }
  isInitialized = true;
}
exports.initializeTDAmeritradeAPIAgent = initializeTDAmeritradeAPIAgent;
