import { graphql, useStaticQuery } from "gatsby"

export const useHomepageHero = () => {
  const homeHeroData = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-hero" } }) {
        frontmatter {
          sectionHeading
          sectionText
          sectionBtnText
        }
      }
    }
  `)

  return homeHeroData?.markdownRemark?.frontmatter
}
