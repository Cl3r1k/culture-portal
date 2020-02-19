import React from "react"
import Layout from "../components/base/Layout"
import DevelopersList from "../components/DevelopersList/DevelopersList"

export default () => {
  return (
    <Layout>
      <div className="team-page">
        <DevelopersList />
      </div>
    </Layout>
  )
}
