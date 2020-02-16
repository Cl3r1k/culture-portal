import React from "react"
import Layout from "../components/base/Layout"

export default () => {
  return (
    <Layout>
      <div class="home-page">
        <div>
          Example of the Author page: <a href="/Kupala">Link</a>{" "}
        </div>
        <div>portal's description</div>
        <div>'author of the day' block</div>
        <div>
          developer team description (userpics + github accounts +
          nicknames/names), and contribution of each member
        </div>
      </div>
    </Layout>
  )
}
