/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
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
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="nickname">
        {nickName}
      </a>
      <Table>
        <thead>
          <TableRow data={COLUMN_CAPTIONS} isHeadRow />
        </thead>
        <tbody>
          {workLog.map((work, idx) => (
            <TableRow data={work} isHeadRow={false} key={`${id}-${idx}`} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

WorkLogCard.propTypes = {
  content: PropTypes.shape({
    nickName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    githubUrl: PropTypes.objectOf(PropTypes.string).isRequired,
    workLog: PropTypes.objectOf(PropTypes.array).isRequired,
  }).isRequired,
};

export default WorkLogCard;
