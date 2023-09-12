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

  scripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.8.4/mermaid.min.js",
    "/init.js"
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
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
                to: '/docs',
              },
              {
                label: 'TD Ameritrade API',
                to: '/docs/td-api',
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
        copyright: `Copyright © ${new Date().getFullYear()} Allen Sarkisyan. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
