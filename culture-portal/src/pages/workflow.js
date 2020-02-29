import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Layout from '../components/base/Layout';
import Workflow from '../../static/img/workflow.png';
import Header from '../components/base/Header';

const bounceAnimation = keyframes`${fadeIn}`;
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

export default () => (
  <main className="app">
    <Header />
    <Layout>
      <BouncyDiv>
        <div className="workflow-page" style={{ overflow: 'hidden' }}>
          <img
            src={Workflow}
            alt="Workflow diagram"
            style={{ display: 'block', margin: 'auto' }}
          />
        </div>
      </BouncyDiv>
    </Layout>
  </main>
);
