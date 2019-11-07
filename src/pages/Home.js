import React from 'react';
import { Redirect } from 'react-router-dom';

import SEO from '../components/SEO';

import Layout from '../layouts/Layout';

import { homeSeo } from '../util/seo';

import useAuth from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  if (user) {
    return <Redirect to="/dashboard/projects" />;
  }

  return (
    <Layout>
      <SEO {...homeSeo} />
    </Layout>
  );
}
