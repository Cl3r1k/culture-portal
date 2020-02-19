import React from "react"
import Layout from "../components/base/Layout"
import AuthorsListWrapper from "../components/AuthorsListWrapper"

export default () => {
  return (
    <Layout>
      <div className="authors-page">
        <AuthorsListWrapper />
      </div>
    </Layout>
  )
}
