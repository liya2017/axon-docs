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
      navbar: {
        title: 'Axon',
        logo: {
          alt: 'Axon',
          src: 'img/axon.png',
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
                <img style="width: 50px; height: 50px" src="/img/axon.png" alt="Axon"/>
                <span style="position: absolute; padding: 0.5rem; margin: 0.5rem">axon.org</span>
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
