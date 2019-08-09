const regexExclude404 = /^(?!\/(dev-404-page|404)).*$/;

module.exports = {
  siteMetadata: {
    siteTitle: "Nuno Santos",
    siteUrl: "https://nuno-santos.netlify.com",
    url: "https://nuno-santos.netlify.com",
    name: "Nuno Santos",
    email: "nunosantoswebdesigner@gmail.com",
    segment: "KrpuBOMB62nTKrcoFBpMoZQEKKIJllxU",
    description:
      "Website for Nuno Santos: Interactive designer and developer currently in Portugal.",
    twitter: "",
    shareImage: "",
    siteName: "N"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage(
            filter: {
              path: {
                regex: "${regexExclude404}"
              }
            }
          )  {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: "daily",
              priority: 0.7
            };
          })
      }
    }
  ]
};
