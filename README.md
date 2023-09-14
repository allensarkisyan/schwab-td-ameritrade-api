# JavaScript / TypeScript TD Ameritrade API Client Implementation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/allensarkisyan/schwab-td-ameritrade-api)](LICENSE)

## Overview

This is an unofficial JavaScript/TypeScript client implementation for the Charles Schwab / TD Ameritrade API. It allows developers to interact with TD Ameritrade's services and access financial data programmatically. Please note that this implementation is not affiliated with or endorsed by Charles Schwab and/or TD Ameritrade.

## Features

- MIT Licensed: This project is fully open source and available under the MIT License.
- Cross-Platform: It is designed to work in both Node.js and Browser environments.
- Strongly Typed: The codebase is strongly typed using JSDoc annotations for enhanced code quality and autocompletion support in TypeScript.
- Uses Zod: [Zod](https://github.com/colinhacks/zod) (for type safety / schema validation)
- Implementation of Official API Endpoints: [Official TD Ameritrade API Documentation](https://developer.tdameritrade.com/apis)
- Derived from proprietary & internally developed quantitative trading and research software.

## Installation

To install and use this TD Ameritrade API client, you can add it to your project using npm or yarn:

```bash
npm install @allensarkisyan/schwab-td-ameritrade-api
```

```bash
yarn add @allensarkisyan/schwab-td-ameritrade-api
```

# Getting Started
To get started with this library, follow the documentation provided [here](td-api.md) for detailed instructions on how to set up and use the client to access TD Ameritrade's API.

## Required Environment Variables
| Environment Variable | Value |
| ----------- | ----------- |
| TD_AMERITRADE_CLIENT_ID | YOUR_TD_AMERITRADE_APPLICATION_CLIENT_ID |
| TD_AMERITRADE_CALLBACK_URL | http://localhost:3000/tdcallback |


## Import Module
```javascript
/** Using ECMAScript Modules */
import { TDAmeritradeAPI } from '@allensarkisyan/schwab-td-ameritrade-api';

/** Using CommonJS */
const { TDAmeritradeAPI } = require('@allensarkisyan/schwab-td-ameritrade-api');
```

## API Client Initialization
```javascript
/** Create a new instance of TDAmeritradeAPI */
const tdApi = new TDAmeritradeAPI({
  clientId: process.env.TD_AMERITRADE_CLIENT_ID,
  callbackUrl: process.env.TD_AMERITRADE_CALLBACK_URL
});
```

#### createTDAmeritradeAPIClient Factory
```javascript
import { createTDAmeritradeAPIClient } from '@allensarkisyan/schwab-td-ameritrade-api';

const tdApi = createTDAmeritradeAPIClient({
  clientId: process.env.TD_AMERITRADE_CLIENT_ID,
  callbackUrl: process.env.TD_AMERITRADE_CALLBACK_URL
});
```

## Authentication & Authorization
```javascript
// Step 1: Initiate Authentication request with TD Ameritrade's servers
// Follow the instructions provided by Charles Schwab / TD Ameritrade.

// Step 2: Get Authorization Response code from the query string to your redirect callback URL.
const searchParams = new URLSearchParams(window.location.search);
const authorizationResponseCode = searchParams.get('code');

// Step 3: Authorize the API Client and retrieve an Access Token
const authResponse = await tdApi.authenticate(authorizationResponseCode);
```

## Setting Access Token Externally
```javascript
const USER_ACCESS_TOKEN = authResponse?.access_token;

// Set User Access Token externally 
tdApi.setUserAccessToken(USER_ACCESS_TOKEN);
```

## Available APIs
NONE: &#9744;

PARTIAL: &#9746;

FULL: &#9745;

| APIs | AVAILABLE | IMPLEMENTATION |
| ---------| ----------  | ------ |
| Accounts & Trading | &#9745; | &#9746; |
| Authentication | &#9745; | &#9745; |
| Instruments | &#9745; | &#9746; |
| Market Hours | &#9744; | &#9744; |
| Movers | &#9745; | &#9745; |
| Option Chains | &#9745; | &#9745; |
| Price History | &#9745; | &#9745; |
| Quotes | &#9745; | &#9746; |
| Transaction History | &#9745; | &#9746; |
| User Info & Preferences | &#9744; | &#9746; |
| Watchlist | &#9745; | &#9746; |

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) 2023 Allen Sarkisyan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing
Contributions are welcome! If you have suggestions, bug reports, or would like to contribute to this project,
please open an issue or submit a pull request.

## Author

[Allen Sarkisyan](https://github.com/allensarkisyan)

Copyright (c) 2019 - 2023 XT-TX. All Rights Reserved.