import React from 'react';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';
import DevelopersList from '../components/DevelopersList/DevelopersList';

export default () => (
  <main className="app">
    <Header />
    <Layout>
      <div className="team-page">
        <DevelopersList />
      </div>
    </Layout>
  </main>
);
