import React from "react"
import Layout from "../components/base/Layout"
import Diagram from "../../static/img/workflow.png"
import Header from "../components/base/Header"

export default () => {
  return (
    <main className="app">
      <Header/>
      <Layout>
        <div className="workflow-page" style={{ overflow: "hidden" }}>
          <img src={Diagram} alt="Workflow diagram" style={{ display: "block", margin: "auto" }}></img>
        </div>
      </Layout>
    </main>
  )
}
