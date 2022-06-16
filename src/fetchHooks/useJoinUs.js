import { graphql, useStaticQuery } from "gatsby"

export const useJoinUs = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-join-us" } }) {
        frontmatter {
          sectionHeading
          sectionText
          sectionBtnText
        }
      }
    }
  `)

  return data?.markdownRemark?.frontmatter
}
