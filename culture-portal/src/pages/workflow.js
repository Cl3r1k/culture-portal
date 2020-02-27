import React from "react"
import Layout from "../components/base/Layout"
import Diagram from "../../static/img/workflow.png"

export default () => {
  return (
    <Layout>
      <div className="workflow-page" style={{overflow: "hidden"}}>
        <img src={Diagram} alt="Workflow diagram" style={{display: "block", margin: "auto"}}></img>
      </div>
    </Layout>
  )
}
