const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Axon Documentation',
  tagline: 'Axon Documentation',
  url: 'https://docs.axonweb3.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/axon.png',
  organizationName: 'nervosnetwork', // Usually your GitHub org/user name.
  projectName: 'axon-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/js/loadLinks.js',
      async: false
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "NN0YKWI8GH",
        apiKey: "e14bce8f06788d44771935b54870a302",
        indexName: "axonweb3",
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Axon',
          src: 'img/logo_light.png',
          srcDark: 'img/logo_dark.png',
          href: 'https://www.nervos.org/axon',
        },
        items: [

        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                html: `
                <img id="footer-logo" src="/img/logo_light.png" alt="Axon"/>
                <a style="position: absolute; padding: 8px 8px 8px 28px" href="mailto:axon@axonweb3.io">axon@axonweb3.io</a>
                `
              }
            ]
          },
          {
            items: [
              {
                html: `<div id="footer-links-placeholder">
                </div>`,
              }
            ],
          }
        ],
        copyright: 'This website is maintained by axon.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
