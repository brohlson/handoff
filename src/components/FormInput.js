import React from 'react';
import styled from 'styled-components';
import { formInputTypes } from '../util/types';
import { colors } from '../style/consts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  p.error {
    color: ${colors.error};
    font-size: 1.2rem;
    margin: 0;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
  }
  &::last-child {
    margin-bottom: none;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  border: 0.2rem solid ${colors.greyLightTint};
  margin-top: 0.4rem;

  &.error {
    border: 0.2rem solid ${colors.error};
  }
  &:focus {
    outline: none;
    border: 0.2rem solid ${colors.yellow};
  }
  ::placeholder {
    color: ${colors.placeholder};
  }
`;

export default function FormInput({
  value,
  onChange,
  label,
  placeholder,
  error,
}) {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <Input
        className={error && 'error'}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        autoComplete="false"
        type="text"
      />
      {error && <p className="error">{error}</p>}
    </Wrapper>
  );
}

FormInput.propTypes = formInputTypes;
