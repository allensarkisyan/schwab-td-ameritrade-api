/**
 * @author Allen Sarkisyan
 * @copyright 2019 - 2023 XT-TX
 * @license MIT Open Source License
 */

import type {
  APIRequestConfig,
} from './@types/index.js';

export const jsonToQueryString = <TObj extends object>(json: TObj): string => {
  const queryParams: string[] = [];

  for (const [k, v] of Object.entries(json)) {
    queryParams.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  }

  return queryParams.join('&');
};

export const getDistinctArray = <TArr>(arr: TArr[], key: string): TArr[] => arr.filter((i, idx) => arr.findIndex(x => x[key] === i[key]) === idx);

export const getRequestUrl = (config: APIRequestConfig) => {
  const query = config?.params ? `?${new URLSearchParams(config?.params)}` : '';
  const url = new URL(`${config?.url || ''}${query}`, 'https://api.tdameritrade.com');

  return url;
}

export const getFetchOptions = (config: APIRequestConfig) => {
  const requestConfig = <Record<string, any>>{
    method: config?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  };

  if (config?.data) {
    requestConfig.body = (
      typeof config.data === 'string'
      ? config.data
      : JSON.stringify(config.data)
    );
  }

  return requestConfig;
}