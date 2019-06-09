module.exports = {
  siteMetadata: {
    title: `gatsby-plugin-modal - example site`,
    description: ``,
    author: `@greglobinski`,
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-plugin-modal`,
      options: {
        wrapper: false,
      },
    },
  ],
  plugins: [`gatsby-plugin-emotion`],
}
