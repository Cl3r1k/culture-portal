import React from 'react';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import Layout from '../components/base/Layout';
import Types from '../components/common/Typography';
import Box from '../components/common/Box';
import SimpleTable from '../components/common/Table';
import Colors from '../components/common/Colors';
import Header from '../components/base/Header';

export default () => {
  const { t } = useTranslation();
  return (
    <main className="app">
      <Header />
      <Layout>
        <h1 className="page-title">{t('menu.styleguide')}</h1>
        <p className="base-title">Logo</p>
        <div className="box-with-bg">
          <a href="/" className="logo" />
        </div>
        <Colors />
        <Types />
        <p className="base-title">Table</p>
        <div className="box-with-bg">
          <Box>
            <SimpleTable />
          </Box>
        </div>
      </Layout>
    </main>
  );
};
