import {graphql, useStaticQuery} from 'gatsby';

export const useSocials = () => {
  const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: {title: {eq: "social-links"}}) {
            frontmatter {
                socialList {
                    icon
                    url
                }
            }
        }
    }
  `);

  return data?.markdownRemark?.frontmatter;
};
