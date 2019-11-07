import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { layoutTypes } from '../util/types';

const Wrapper = styled.div``;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

Layout.propTypes = layoutTypes;
