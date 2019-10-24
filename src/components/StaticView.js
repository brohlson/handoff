import React, { Fragment } from 'react';
import SEO from './SEO';

export default function StaticView({ ...props }) {
  return (
    <Fragment>
      <SEO {...props} />
    </Fragment>
  );
}
