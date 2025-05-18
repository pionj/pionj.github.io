module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `PION`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/index",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
          `${__dirname}/../readme.md`,
          `${__dirname}/../foam-templates/**`
        ],
        // parseWikiLinks: true
      },
    }
  ],
};
