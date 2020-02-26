exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query programQuery {
      allContentfulAuthor(sort: {fields: surname, order: ASC}) {
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
      allContentfulAuthorRussian(sort: {fields: surname, order: ASC}) {
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
      allContentfulAuthorBelarusian(sort: {fields: surname, order: ASC}) {
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const authorsEn = result.data.allContentfulAuthor.nodes.map(author => author.json)
    const authorsRu = result.data.allContentfulAuthorRussian.nodes.map(author => author.json)
    const authorsBy = result.data.allContentfulAuthorBelarusian.nodes.map(author => author.json)

    authorsEn.forEach((author, index) => {
      createPage({
        path: `/${author.surname}`,
        component: require.resolve("./src/templates/author-template.js"),
        context: { en: author, ru: authorsRu[index] || author, by: authorsBy[index] || author },
      })
    })
  })
}
