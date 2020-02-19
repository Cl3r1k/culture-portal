import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import WorkLogCard from '../WorkLogCard/WorkLogCard';

const WorklogTable = () => {

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
    }
  `);

  const allContentfulDeveloper = data.allContentfulDeveloper.nodes;

  return (
    <div>
      <h3>Worklog Table</h3>

      {allContentfulDeveloper.map(workLog => (<WorkLogCard key={workLog.id} content={workLog} />))}
    </div>
  );
}

export default WorklogTable;