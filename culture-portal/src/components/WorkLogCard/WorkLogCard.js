import React from 'react';
import Table from '../Table/Table';
import TableRow from '../tableRow/tableRow';

// Constants
import { WORKLOG_TABLE_DATA } from '../../constants/constants';
const { COLUMN_CAPTIONS } = WORKLOG_TABLE_DATA;

const WorkLogCard = ({
  content: {
    nickName,
    githubUrl: {
      githubUrl,
    },
    workLog: {
      workLog
    }
  }
}) => {

  return (
    <div className="worklog-card">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">{nickName}</a>
      <Table>
        <thead>
          <TableRow data={COLUMN_CAPTIONS} isHeadRow={true} />
        </thead>
        <tbody>
          {
            workLog.map(
              (work, index) => {
                return <TableRow data={work} isHeadRow={false} key={`${nickName}${index}`} />
              }
            )
          }
        </tbody>
      </Table>
    </div>
  );
};

export default WorkLogCard;