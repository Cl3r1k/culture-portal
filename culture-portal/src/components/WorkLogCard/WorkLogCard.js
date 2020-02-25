import React from 'react';
import Table from '../Table/Table';
import TableRow from '../TableRow/TableRow';
import { useTranslation } from 'react-i18next';

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
  const  { t } = useTranslation();
  const COLUMN_CAPTIONS = {
    FIRST_COLUMN: t('WORKLOG_TABLE_DATA.COLUMN_CAPTIONS.FIRST_COLUMN'),
    SECOND_COLUMN: t('WORKLOG_TABLE_DATA.COLUMN_CAPTIONS.SECOND_COLUMN')
  }

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