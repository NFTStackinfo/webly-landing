import { graphql, useStaticQuery } from "gatsby"

export const useCollections = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-collections" } }) {
        frontmatter {
          sectionHeading
          list {
            itemImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            itemName
            url
          }
        }
      }
    }
  `)

  return data?.markdownRemark?.frontmatter
}
