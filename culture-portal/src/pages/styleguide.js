import React from "react"
import Layout from "../components/base/Layout"
import Types from "../components/common/Typography"
import Box from "../components/common/Box"
import SimpleTable from "../components/common/Table"
import Colors from "../components/common/Colors"

export default () => {
  return (
    <Layout>
      <p className="base-title">Logo</p>
      <div className="box-with-bg">
        <a href="/" className="logo"></a>
      </div>
      <Colors/>
      <Types/>
      <p className="base-title">Table</p>
      <div className="box-with-bg">
        <Box>
          <SimpleTable/>
        </Box>
      </div>
    </Layout>

  )
}
