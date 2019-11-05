import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import Text from '../components/Text';
import Button from '../components/Button';
import Layout from '../layouts/Layout';
import useAuth from '../hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';
import { settingsSeo } from '../util/seo';

export default function Settings() {
  const { loading, user } = useAuth();

  if (loading || !user) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <SEO {...settingsSeo} />
      <Text.P text="Settings" />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Layout>
  );
}
