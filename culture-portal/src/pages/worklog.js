import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Layout from '../components/base/Layout';
import WorklogTable from '../components/WorklogTable/WorklogTable';
import SelfEvaluation from '../components/SelfEvaluation/SelfEvaluation';
import Difficulties from '../components/Difficulties/Difficulties';
import Header from '../components/base/Header';

const bounceAnimation = keyframes`${fadeIn}`;
const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;


export default () => {
  const { t } = useTranslation();
  return (
    <main className="app">
      <Header />
      <Layout>
        <BouncyDiv>
          <div className="worlklog-page">
            <h1 className="page-title">{t('menu.worklog')}</h1>
            <WorklogTable />
            <Difficulties />
            <SelfEvaluation />
          </div>
        </BouncyDiv>
      </Layout>
    </main>
  );
};
