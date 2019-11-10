import React from 'react';
import styled from 'styled-components';
import { errorStateTypes } from '../util/types';
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
    ${font.p}
  }
`;

export default function ErrorState({ message }) {
  return (
    <Wrapper>
      <div className="emoji">
        <span aria-label="mind blown emoji" role="img">
          🤯
        </span>
      </div>
      <p>Error: {message}</p>
    </Wrapper>
  );
}

ErrorState.propTypes = errorStateTypes;
