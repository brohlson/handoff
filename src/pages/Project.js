import React from 'react';

import SEO from '../components/SEO';
import Text from '../components/Text';
import Layout from '../layouts/Layout';
import useAuth from '../hooks/useAuth';
import LoadingScreen from '../components/LoadingScreen';

export default function Project() {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <SEO title="Project" />
      <Text.P text="Project" />
    </Layout>
  );
}
