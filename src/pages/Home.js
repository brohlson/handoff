import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import Text from '../components/Text';
import Button from '../components/Button';
import Layout from '../layouts/Layout';
import { homeSeo } from '../util/seo';

export default function Home() {
  return (
    <Layout>
      <SEO {...homeSeo} />
      <Text.P text="Home" />
      <Link to="/settings">
        <Button>Settings</Button>
      </Link>
    </Layout>
  );
}
