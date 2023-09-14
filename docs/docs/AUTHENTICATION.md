## TD Ameritrade Developer Account / Client Application ID

Follow the instructions provided by Charles Schwab / TD Ameritrade to create a developer account / create a application client ID.

## Authentication & Authorization
```javascript
// Step 1: Initiate Authentication request with TD Ameritrade's servers
// Follow the instructions provided by Charles Schwab / TD Ameritrade.

// Step 2: Get Authorization Response code from the query string to your redirect callback URL.
const searchParams = new URLSearchParams(window.location.search);
const authorizationResponseCode = searchParams.get('code');

// Step 3: Authorize the API Client and retrieve an Access Token
const { data: authResponse } = await tdApi.authenticate(authorizationResponseCode);
```

## Setting Access Token Externally
```javascript
const USER_ACCESS_TOKEN = authResponse?.access_token;

// Set User Access Token externally 
tdApi.setUserAccessToken(USER_ACCESS_TOKEN);
```

## Periodically Refresh Access Token.
```javascript
const REFRESH_TOKEN = authResponse?.refresh_token;

// Set User Access Token externally 
const { data: refreshTokenResponse } = tdApi.refreshAcccessToken(REFRESH_TOKEN);
```