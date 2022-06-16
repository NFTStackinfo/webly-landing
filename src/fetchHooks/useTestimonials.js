import { graphql, useStaticQuery } from "gatsby"

export const useTestimonials = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-testimonials" } }) {
        frontmatter {
          list {
            itemCompany
            itemDescription
            itemName
            itemImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)

  return data?.markdownRemark?.frontmatter
}
