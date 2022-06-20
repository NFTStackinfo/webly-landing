import { graphql, useStaticQuery } from "gatsby"

export const useFeatures = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-features" } }) {
        frontmatter {
          sectionHeading
          list {
            itemHeading
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
