import React from 'react';
import Layout from '../components/base/Layout';
import Workflow from '../../static/img/workflow.png';
import Header from '../components/base/Header';

export default () => (
  <>
    <Header />
    <Layout>
      <div className="workflow-page" style={{ overflow: 'hidden' }}>
        <img
          src={Workflow}
          alt="Workflow diagram"
          style={{ display: 'block', margin: 'auto' }}
        />
      </div>
    </Layout>
  </>
);
