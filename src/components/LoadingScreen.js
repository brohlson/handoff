import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../public/loading.svg';

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 12%;
  }
`;

export default function LoadingScreen() {
  return (
    <Wrapper>
      <img src={LoadingIcon} alt="Loading..." />
    </Wrapper>
  );
}
