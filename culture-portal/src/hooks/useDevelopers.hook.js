import { useStaticQuery, graphql } from 'gatsby';

const useDevelopersMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulDeveloper(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          nickName
          description {
            description
          }
          avatar {
            file {
              url
            }
          }
          githubUrl {
            githubUrl
          }
          contribution {
            contribution
          }
        }
      }
      allContentfulDeveloperRussian(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          nickName
          description {
            description
          }
          avatar {
            file {
              url
            }
          }
          githubUrl {
            githubUrl
          }
          contribution {
            contribution
          }
        }
      }
      allContentfulDeveloperBelarusian(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          nickName
          description {
            description
          }
          avatar {
            file {
              url
            }
          }
          githubUrl {
            githubUrl
          }
          contribution {
            contribution
          }
        }
      }
    }
  `);

  return data;
};

export default useDevelopersMetadata;
