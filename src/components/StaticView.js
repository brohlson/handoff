import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function StaticView({ ...props }) {
  return (
    <Fragment>
      <SEO {...props} />
      <Link to="/widget/*" />
    </Fragment>
  );
}
