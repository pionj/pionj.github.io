module.exports = {
  pathPrefix: `/pionj.github.io`,
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
          "readme.md"
        ],
      },
    },
  ],
};
