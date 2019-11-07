import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { z, colors } from '../style/consts';
import useAuth from '../hooks/useAuth';
import Button from './Button';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.greyLight};
  border-bottom: 1px solid ${colors.greyLightTint};
  ${z.header}
`;
const Logo = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  span {
    font-size: 3rem;
    position: relative;
    top: 0.3rem;
  }
`;
const Menu = styled.div``;

export default function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth();
  return (
    <Wrapper>
      <Logo to="/">
        <span aria-label="Handoff emoji logo" role="img">
          👋
        </span>
      </Logo>
      <Menu>
        {!isAuthenticated && (
          <Button onClick={loginWithRedirect}>Log in</Button>
        )}
      </Menu>
    </Wrapper>
  );
}
