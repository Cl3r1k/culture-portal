import React from "react"
import Layout from "../components/base/Layout"
import Technology from "../../static/img/technology.png"
import Header from "../components/base/Header"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const bounceAnimation = keyframes`${fadeIn
  }`
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`

export default () => (
  <>
    <Header/>
    <Layout>
      <BouncyDiv>
        <div className="technology-page" style={{ overflow: "hidden" }}>
          <img
            src={Technology}
            alt="Technology diagram"
            style={{ display: "block", margin: "auto" }}
          />
        </div>
      </BouncyDiv>
    </Layout>
  </>
);
