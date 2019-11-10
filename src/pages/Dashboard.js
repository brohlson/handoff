import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Layout from '../layouts/Layout';
import LoadingScreen from '../components/LoadingScreen';
import PageNavItem from '../components/PageNavItem';
import SEO from '../components/SEO';
import { PageWrapper } from '../components/Elements';
import DashboardSettings from '../views/DashboardSettings';
import DashboardProjects from '../views/DashboardProjects';

import { dashboardSeo } from '../util/seo';

import { colors } from '../style/consts';
import { urls } from '../util/consts';

const PageContentWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 6rem;
  left: 0;
  height: calc(100% - 6rem);
  width: 100%;
`;

const PageNav = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.greyLight};
  border-right: 1px solid ${colors.greyLightTint};
  width: 24rem;
`;

const PageContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 2rem;
`;

export default function Dashboard() {
  const { loading, user } = useAuth();

  const getLogoutUrl = () => {
    return process.env.NODE_ENV === 'production'
      ? urls.logoutProd
      : urls.logoutDev;
  };

  if (loading || !user) {
    return <LoadingScreen />;
  }

  function getDashboardRoutes() {
    return (
      <Switch>
        <Route path="/dashboard/settings" component={DashboardSettings} />
        <Route path="/dashboard/projects" component={DashboardProjects} />
      </Switch>
    );
  }

  return (
    <Layout>
      <SEO {...dashboardSeo} />
      <PageWrapper>
        <PageContentWrapper>
          <PageNav>
            <PageNavItem path="/dashboard/projects" text="Projects" />
            <PageNavItem path="/dashboard/settings" text="Settings" />
            <PageNavItem path={getLogoutUrl()} text="Log out" external />
          </PageNav>
          <PageContent>{getDashboardRoutes()}</PageContent>
        </PageContentWrapper>
      </PageWrapper>
    </Layout>
  );
}
