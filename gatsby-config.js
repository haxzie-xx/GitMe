module.exports = {
  siteMetadata: {
    title: 'GitMe!',
    author: 'haxzie',
    profile: 'https://github.com/haxzie'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/profiles`,
        name: 'profiles',
      },
    },
  ]
}
