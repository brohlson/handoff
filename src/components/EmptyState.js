import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { emptyTypes } from '../util/types';
import { font } from '../style/consts';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .emoji {
    margin-bottom: 1.2rem;
  }
  .emoji span {
    font-size: 3rem;
  }
  p {
    ${font.p};
    margin-bottom: 1.6rem;
  }
`;

export default function EmptyState({ message, action, cta }) {
  return (
    <Wrapper>
      <div className="emoji">
        <span aria-label="shocked emoji" role="img">
          😮
        </span>
      </div>
      <p>{message}</p>
      <Button onClick={action}>{cta}</Button>
    </Wrapper>
  );
}

EmptyState.propTypes = emptyTypes;
