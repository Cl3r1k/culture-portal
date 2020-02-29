import { useStaticQuery, graphql } from 'gatsby';

const useAuthorsMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAuthor(sort: { fields: surname, order: ASC }) {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
      allContentfulAuthorRussian(sort: { fields: surname, order: ASC }) {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
      allContentfulAuthorBelarusian(sort: { fields: surname, order: ASC }) {
        nodes {
          surname
          json {
            id
            name
            surname
            fullName
            photo {
              link
              path
            }
            description
            birth {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            death {
              date
              description
              location {
                lat
                lng
                name
                zoom
              }
            }
            biography {
              date
              description
            }
            works {
              date
              description
            }
            gallery {
              link
              path
            }
            video {
              startTime
              youtubeId
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useAuthorsMetadata;
