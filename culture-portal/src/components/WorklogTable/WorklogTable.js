import React from 'react'
import WorkLogCard from '../WorkLogCard/WorkLogCard'
import { useTranslation } from 'react-i18next'
import { useWorklogMetadata } from '../../hooks/useWorklog.hook'
import { DEVELOPERS_LANGUAGE_QUERY } from '../../helpers/Constants'

const WorklogTable = () => {
  const { t, i18n } = useTranslation()
  const queryDevelopersWorklog = DEVELOPERS_LANGUAGE_QUERY[i18n.language]
  const developersWorklog = useWorklogMetadata()[queryDevelopersWorklog].nodes

  return (
    <>
      <h3 className="base-title_md">{t("worklog-table-header")}</h3>
      <div className="box-with-bg">
        {developersWorklog.map(workLog => (<WorkLogCard key={workLog.id} content={workLog}/>))}
      </div>
    </>
  )
}

export default WorklogTable
