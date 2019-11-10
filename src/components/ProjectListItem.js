import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../style/consts';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.greyLight};
  border-bottom: 0.1rem solid ${colors.greyLightTint};
  margin-bottom: 1.2rem;
  padding: 1.6rem;
`;
const Name = styled.div``;
const Controls = styled.div``;

export default function ProjectListItem({ data }) {
  return (
    <Wrapper>
      <Name>
        <span>{data.title}</span>
      </Name>
      <Controls>
        <Link to={`project/${data.handle}`}>
          <Button>Open</Button>
        </Link>
      </Controls>
    </Wrapper>
  );
}
