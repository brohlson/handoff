import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import Text from '../components/Text';
import Button from '../components/Button';
import Layout from '../layouts/Layout';
import useAuth from '../hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';
import { dashboardSeo } from '../util/seo';

export default function Dashboard() {
  const { loading, user } = useAuth();

  if (loading || !user) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <SEO {...dashboardSeo} />
      <Text.P text="Dashboard" />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Layout>
  );
}
