import React from 'react';
import { useTranslation } from 'react-i18next';
import Table from '../Table/Table';
import TableRow from '../TableRow/TableRow';

const WorkLogCard = ({
  content: {
    nickName,
    id,
    githubUrl: { githubUrl },
    workLog: { workLog },
  },
}) => {
  const { t } = useTranslation();
  const COLUMN_CAPTIONS = {
    FIRST_COLUMN: t('WORKLOG_TABLE_DATA.COLUMN_CAPTIONS.FIRST_COLUMN'),
    SECOND_COLUMN: t('WORKLOG_TABLE_DATA.COLUMN_CAPTIONS.SECOND_COLUMN'),
  };

  return (
    <div className="worklog-card">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        {nickName}
      </a>
      <Table>
        <thead>
          <TableRow data={COLUMN_CAPTIONS} isHeadRow />
        </thead>
        <tbody>
          {workLog.map((work) => (
            <TableRow data={work} isHeadRow={false} key={`${id}`} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WorkLogCard;
