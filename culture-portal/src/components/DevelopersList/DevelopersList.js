import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Developer from "../Developer/Developer"

const DevelopersList = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulDeveloper {
          edges {
            node {
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
      }
    `}
    render={({ allContentfulDeveloper: { edges } }) =>
      edges.map(({ node }) => <Developer key={node.id} content={node} />)
    }
  />
)

export default DevelopersList
