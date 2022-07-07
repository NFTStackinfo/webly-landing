module.exports = {
  siteMetadata: {
    title: `No-Code NFT Smart Contracts`,
    description: `No-code Smart Contract solution for individual artists &
  brands. Deploy your own NFT smart contracts in 2 mins!`,
    author: `Webly`,
    siteUrl: `https://webly-test.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N5TQJ75",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://webly-test.netlify.app/",
        sitemap: "https://webly-test.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-hero`,
        path: `${__dirname}/src/markdown/homepage-hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-how-it-works`,
        path: `${__dirname}/src/markdown/homepage-how-it-works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-team`,
        path: `${__dirname}/src/markdown/homepage-team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-collections`,
        path: `${__dirname}/src/markdown/homepage-collections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-testimonials`,
        path: `${__dirname}/src/markdown/homepage-testimonials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-features`,
        path: `${__dirname}/src/markdown/homepage-features`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social-links`,
        path: `${__dirname}/src/markdown/social-links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `seo`,
        path: `${__dirname}/src/markdown/seo`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `not-found`,
    //     path: `${__dirname}/src/markdown/not-found`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "806603740016223",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 80,
          formats: [`auto`, `webp`, `avif`],
          placeholder: `none`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          `gatsby-remark-external-links`,
          "gatsby-plugin-postcss",
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCC425`,
        theme_color: `#FCC425`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -66,
        duration: 400,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 3030130,
        sv: 6
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1537741193344907",
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify",
  ],
}
