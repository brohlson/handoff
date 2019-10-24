import React from 'react';
import Helmet from 'react-helmet';

import { seoTypes } from '../util/types';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}

SEO.propTypes = seoTypes;
