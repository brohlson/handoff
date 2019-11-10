import React, { useContext } from 'react';
import styled from 'styled-components';
import { modalTypes } from '../util/types';
import { z, colors, font } from '../style/consts';
import ModalContext from '../store/modals';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  ${z.modal}
`;
const ModalWrapper = styled.div`
  width: 40rem;
  max-width: 100%;
  background: ${colors.light};
  border-radius: 0.4rem;
  overflow: hidden;
`;
const Title = styled.div`
  background: ${colors.greyLight};
  padding: 1.6rem 2rem;
  border-bottom: 1px solid ${colors.greyLightTint};
  span {
    ${font.ui.title}
  }
`;
const Body = styled.div`
  padding: 2rem;
`;

const Footer = styled.div`
  display: flex;
  border-top: 1px solid ${colors.greyLightTint};
  button {
    width: 100%;
    border-radius: 0;
    padding: 1.6rem 0;
    border: none;
    background: ${colors.greyLightTint};
    &:first-child {
      background: ${colors.greyLight};
    }
    &[aria-disabled='true'] {
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
`;

export default function Modal({ title, children, onSubmit, disabled }) {
  const { hideModal } = useContext(ModalContext);
  return (
    <Wrapper>
      <ModalWrapper>
        <Title>
          <span>{title}</span>
        </Title>
        <Body>{children}</Body>
        <Footer>
          <button onClick={hideModal}>Cancel</button>
          <button aria-disabled={disabled && 'true'} onClick={onSubmit}>
            Submit
          </button>
        </Footer>
      </ModalWrapper>
    </Wrapper>
  );
}

Modal.propTypes = modalTypes;
