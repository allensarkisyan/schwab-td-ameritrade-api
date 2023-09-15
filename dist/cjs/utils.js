'use strict';
/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.getFetchOptions =
  exports.getRequestUrl =
  exports.getDistinctArray =
  exports.jsonToQueryString =
    void 0;
const jsonToQueryString = (json) => {
  const queryParams = [];
  for (const [k, v] of Object.entries(json)) {
    queryParams.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  }
  return queryParams.join('&');
};
exports.jsonToQueryString = jsonToQueryString;
const getDistinctArray = (arr, key) =>
  arr.filter((i, idx) => arr.findIndex((x) => x[key] === i[key]) === idx);
exports.getDistinctArray = getDistinctArray;
const getRequestUrl = (config) => {
  const query = config?.params ? `?${new URLSearchParams(config?.params)}` : '';
  const url = new URL(
    `${config?.url || ''}${query}`,
    'https://api.tdameritrade.com',
  );
  return url;
};
exports.getRequestUrl = getRequestUrl;
const getFetchOptions = (config) => {
  const requestConfig = {
    method: config?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  };
  if (config?.data) {
    requestConfig.body =
      typeof config.data === 'string'
        ? config.data
        : JSON.stringify(config.data);
  }
  return requestConfig;
};
exports.getFetchOptions = getFetchOptions;
