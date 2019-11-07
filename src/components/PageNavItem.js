import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, font } from '../style/consts';
import { pageNavItemTypes } from '../util/types';

const ButtonCss = css(
  props => `
button[aria-current="true"] {
    background: ${colors.greyLightTint};
}
button {
    &:active {
        background: ${colors.greyLightTint};
        outline: none;
    }
  height: 5.2rem;
  width: 100%;
  border: none;
  transition: background .2s;
  background: ${props.itemActive ? colors.greyLightTint : colors.greyLight};
  border-bottom: 1px solid ${colors.greyLightTint};
  ${font.ui.regular};
}
`
);

const PageNavItemWrapper = styled(Link)`
  ${ButtonCss};
`;
const PageNavItemWrapperExternal = styled.a`
  ${ButtonCss};
`;

export default function PageNavItem({ path, text, external }) {
  if (external) {
    return (
      <PageNavItemWrapperExternal href={path}>
        <button aria-current={window.location.pathname === path}>{text}</button>
      </PageNavItemWrapperExternal>
    );
  }
  return (
    <PageNavItemWrapper to={path}>
      <button aria-current={window.location.pathname === path}>{text}</button>
    </PageNavItemWrapper>
  );
}

PageNavItem.propTypes = pageNavItemTypes;
