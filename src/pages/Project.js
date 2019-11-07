import React from 'react';

import SEO from '../components/SEO';
import Text from '../components/Text';
import Layout from '../layouts/Layout';
import useAuth from '../hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';
import { settingsSeo } from '../util/seo';

export default function Project() {
  const { loading, user } = useAuth();

  if (loading || !user) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <SEO {...settingsSeo} />
      <Text.P text="Project" />
    </Layout>
  );
}
