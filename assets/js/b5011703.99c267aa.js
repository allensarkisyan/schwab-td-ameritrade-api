"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,A=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(A,o(o({ref:t},p),{},{components:n})):r.createElement(A,o({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Authentication",c={unversionedId:"AUTHENTICATION",id:"AUTHENTICATION",title:"Authentication",description:"TD Ameritrade Developer Account / Client Application ID",source:"@site/docs/AUTHENTICATION.md",sourceDirName:".",slug:"/AUTHENTICATION",permalink:"/schwab-td-ameritrade-api/AUTHENTICATION",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/schwab-td-ameritrade-api/getting-started"},next:{title:"Examples",permalink:"/schwab-td-ameritrade-api/EXAMPLES"}},s={},l=[{value:"TD Ameritrade Developer Account / Client Application ID",id:"td-ameritrade-developer-account--client-application-id",level:2},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:2},{value:"Setting Access Token Externally",id:"setting-access-token-externally",level:2},{value:"Automatically Refresh Access Token with <code>startAccessTokenExpirationMonitor</code>",id:"automatically-refresh-access-token-with-startaccesstokenexpirationmonitor",level:2},{value:"Periodically Refresh Access Token Manually.",id:"periodically-refresh-access-token-manually",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("h2",{id:"td-ameritrade-developer-account--client-application-id"},"TD Ameritrade Developer Account / Client Application ID"),(0,a.kt)("p",null,"Follow the instructions provided by Charles Schwab / TD Ameritrade to create a developer account / create a application client ID."),(0,a.kt)("h2",{id:"authentication--authorization"},"Authentication & Authorization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Step 1: Initiate Authentication request with TD Ameritrade's servers\n// Follow the instructions provided by Charles Schwab / TD Ameritrade.\n\n// Step 2: Get Authorization Response code from the query string to your redirect callback URL.\nconst searchParams = new URLSearchParams(window.location.search);\nconst authorizationResponseCode = searchParams.get('code');\n\n// Step 3: Authorize the API Client and retrieve an Access Token\nconst { data: authResponse } = await tdApi.authenticate(authorizationResponseCode);\n")),(0,a.kt)("h2",{id:"setting-access-token-externally"},"Setting Access Token Externally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const USER_ACCESS_TOKEN = authResponse?.access_token;\nconst REFRESH_TOKEN = authResponse?.refresh_token;\n\n// Set User Access Token externally \ntdApi.setUserAccessToken({\n  userAccessToken: USER_ACCESS_TOKEN,\n  accessTokenExpires: authResponse?.expires_in,\n  refreshToken: REFRESH_TOKEN,\n  refreshTokenExpires: authResponse?.refresh_token_expires_in,\n});\n")),(0,a.kt)("h2",{id:"automatically-refresh-access-token-with-startaccesstokenexpirationmonitor"},"Automatically Refresh Access Token with ",(0,a.kt)("inlineCode",{parentName:"h2"},"startAccessTokenExpirationMonitor")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"startAccessTokenExpirationMonitor")," method will check for access token expiration every 1 minute and will refresh for you when nearing expiry")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Call `startAccessTokenExpirationMonitor` with \n// an optional callback function to access and save updated credentials data\ntdApi.startAccessTokenExpirationMonitor((credentials) => {\n  console.log(credentials);\n\n  // SAVE CREDENTIALS TO FILE SYSTEM FOR FUTURE USAGE...\n});\n")),(0,a.kt)("h2",{id:"periodically-refresh-access-token-manually"},"Periodically Refresh Access Token Manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Set User Access Token externally \nconst { data: refreshTokenResponse } = tdApi.refreshAcccessToken(REFRESH_TOKEN);\n")),(0,a.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    User->> Client Application: Initiate Authentication Request\n    Client Application--xTD Ameritrade: Authenticate with Credentials\n    TD Ameritrade--xClient Application: Responds with Authorization Code\n    %% Client Application--xUser: Success\n    Client Application--\x3e>TD Ameritrade: Initiate API Authorization and Get Access Token\n    TD Ameritrade->>Client Application: Responds with Access Token\n    loop Loop Every 30 Minutes\n        Client Application--\x3eClient Application: Check Access Token Status with TD Ameritrade...\n        alt is Access Token Valid\n            Client Application->>TD Ameritrade: Use Access Token\n        else is Access Token Expired\n            Client Application->>TD Ameritrade: Refresh Access Token\n        end\n    end\n    User->>TD Ameritrade: Make API Requests"}),(0,a.kt)("p",null,"Copyright (c) 2019 - 2023 Allen Sarkisyan. XT-TX. All Rights Reserved."))}d.isMDXComponent=!0}}]);