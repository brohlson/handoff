import React from 'react';
import styled from 'styled-components';

import Nav from '../components/Nav';
import { layoutTypes } from '../util/types';

const Wrapper = styled.div``;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
}

Layout.propTypes = layoutTypes;
