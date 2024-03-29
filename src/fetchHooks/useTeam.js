import { graphql, useStaticQuery } from "gatsby"

export const useTeam = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-team" } }) {
        frontmatter {
          list {
            itemDescription
            itemTitle
            itemImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            socialList {
              icon
              url
            }
          }
          sectionHeading
        }
      }
    }
  `)

  return data?.markdownRemark?.frontmatter
}
