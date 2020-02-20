import React from "react"
import Layout from "../components/base/Layout"
import Button from "../components/common/Button"
import Types from "../components/common/Typography"
import Box from "../components/common/Box"
import SimpleTable from "../components/common/Table"

export default () => {
  return (
      <Layout>
        <Box>
          <Button color="primary" buttonName="Primary"/>
        </Box>
        <Box>
          <Button color="secondary" buttonName="Secondary"/>
        </Box>
        <Types/>
        <div className="styleguide-page">
          <div>Style Guide</div>
        </div>
        <Box>
          <SimpleTable/>
        </Box>
      </Layout>

  )
}
