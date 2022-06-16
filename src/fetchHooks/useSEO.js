import { graphql, useStaticQuery } from "gatsby"

export const useSEO = () => {
  const homeHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "seo" } }) {
        frontmatter {
          metaTitle
          metaDescription
          author
        }
      }
    }
  `)

  return homeHeroData?.markdownRemark?.frontmatter
}
