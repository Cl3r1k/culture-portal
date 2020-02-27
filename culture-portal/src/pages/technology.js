import React from 'react';
import Layout from '../components/base/Layout';
import Technology from '../../static/img/technology.png';
import Header from '../components/base/Header';

export default () => (
  <>
    <Header />
    <Layout>
      <div className="technology-page" style={{ overflow: 'hidden' }}>
        <img
          src={Technology}
          alt="Technology diagram"
          style={{ display: 'block', margin: 'auto' }}
        />
      </div>
    </Layout>
  </>
);
