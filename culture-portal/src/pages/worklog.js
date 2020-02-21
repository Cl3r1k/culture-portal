import React from "react"
import Layout from "../components/base/Layout"
import WorklogTable from "../components/WorklogTable/WorklogTable"
import SelfEvaluation from "../components/SelfEvaluation/SelfEvaluation"

export default () => {
  return (
    <Layout>
      <div className="worlklog-page">
        <WorklogTable />

        <h3>Main difficulties for the team during implementation</h3>
        <ol>
          <li>It was a good idea to use "git flow" initially</li>
          <li>Difficulty #2</li>
          <li>Difficulty #3</li>
        </ol>

        <SelfEvaluation />
      </div>
    </Layout>
  )
}
