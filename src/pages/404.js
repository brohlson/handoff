import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Layout from '../layouts/Layout';
import { notFoundSeo } from '../consts/seo';

export default function About() {
  return (
    <Layout>
      <SEO {...notFoundSeo} />
      <Text.P text={'404'} />
      <Link to="/">
        <Button>Back home</Button>
      </Link>
    </Layout>
  );
}
