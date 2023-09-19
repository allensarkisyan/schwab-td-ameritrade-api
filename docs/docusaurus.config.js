// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Charles Schwab / TD Ameritrade API',
  tagline: 'TD Ameritrade API SDK Client',
  favicon: 'img/favicon.ico',
  url: 'https://allensarkisyan.github.io',
  // Set the /<baseUrl>/
  baseUrl: '/schwab-td-ameritrade-api/',
  organizationName: 'allensarkisyan',
  projectName: 'schwab-td-ameritrade-api',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Charles Schwab / TD Ameritrade API',
        // logo: {
        //   alt: 'Charles Schwab / TD Ameritrade API',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://github.com/allensarkisyan/schwab-td-ameritrade-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'README',
                to: '/',
              },
              {
                label: 'TD Ameritrade API',
                to: '/td-api',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     // {
          //     //   label: 'Stack Overflow',
          //     //   href: 'https://stackoverflow.com/questions/tagged/schwab-td-ameritrade-api',
          //     // },
          //     // {
          //     //   label: 'Discord',
          //     //   href: 'https://discordapp.com/invite',
          //     // },
          //     // {
          //     //   label: 'Twitter',
          //     //   href: 'https://twitter.com/allensarkisyan',
          //     // },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/allensarkisyan/schwab-td-ameritrade-api',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Allen Sarkisyan. XT-TX. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      algolia: {
        appId: 'XRXQL7KP3W',
        apiKey: 'a9cdd0f8083f143ffac084777540885d',
        indexName: 'schwab-td-ameritrade-api',
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
