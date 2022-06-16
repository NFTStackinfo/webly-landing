import { graphql, useStaticQuery } from "gatsby"

export const useHowItWorks = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-how-it-works" } }) {
        frontmatter {
          sectionHeading
          sectionText
          list {
            itemTitle
            itemDescription
            itemImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return data?.markdownRemark?.frontmatter
}
