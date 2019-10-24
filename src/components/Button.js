import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../style/consts';
import { isLight } from '../util/helpers';
import { buttonTypes } from '../util/types';

const Element = styled.button`
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  border: none;
  background: ${colors.grey};
  color: ${colors.black};
  ${props => props.background && bgcss};
  ${props => props.fullWidth && fwcss};
  span {
    user-select: none;
  }
`;

const bgcss = css`
  background: ${props => props.background};
  color: ${props =>
    props.background && (isLight(props.background) ? 'black' : 'white')};
`;

const fwcss = css`
  width: 100%;
`;

export default function Button({
  id,
  children,
  onClick,
  fullWidth,
  background,
}) {
  return (
    <Element
      data-testid={id}
      onClick={onClick ? onClick : () => null}
      background={background}
      fullWidth={fullWidth}
    >
      <span>{children}</span>
    </Element>
  );
}

Button.propTypes = buttonTypes;
