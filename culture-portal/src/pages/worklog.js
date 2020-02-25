import React from "react"
import Layout from "../components/base/Layout"
import WorklogTable from "../components/WorklogTable/WorklogTable"
import SelfEvaluation from "../components/SelfEvaluation/SelfEvaluation"
import Difficulties from "../components/Difficulties/Difficulties"

export default () => {
  return (
    <Layout>
      <div className="worlklog-page">
        <WorklogTable />

        <Difficulties />

        <SelfEvaluation />
      </div>
    </Layout>
  )
}
