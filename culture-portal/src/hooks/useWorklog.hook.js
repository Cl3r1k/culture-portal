import { useStaticQuery, graphql } from "gatsby"

export const useWorklogMetadata = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulDeveloper(sort: {fields: name, order: ASC}) {
      nodes {
        id
        nickName
        githubUrl {
          githubUrl
        }
        workLog {
          workLog {              
            spent
            feature
          }
        }
      }
    }
    allContentfulDeveloperRussian(sort: {fields: name, order: ASC}) {
      nodes {
        id
        nickName
        githubUrl {
          githubUrl
        }
        workLog {
          workLog {              
            spent
            feature
          }
        }
      }
    }
    allContentfulDeveloperBelarusian(sort: {fields: name, order: ASC}) {
      nodes {
        id
        nickName
        githubUrl {
          githubUrl
        }
        workLog {
          workLog {              
            spent
            feature
          }
        }
      }
    }
  }
`)

  return data
}