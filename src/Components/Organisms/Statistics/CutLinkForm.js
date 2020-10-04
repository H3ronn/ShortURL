import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'Components/Atoms/Button';
import Input from 'Components/Atoms/Input';
import background from 'assets/bg-shorten-mobile.svg';

const StyledForm = styled.form`
  background: url(${background}) no-repeat;
  background-color: ${({ theme }) => theme.darkViolet};
  background-position: 100% 0%;
  background-size: 71%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 0.25fr;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-top: 15px;
  @media (min-width: 1000px) {
    margin: 0 0 0 20px;
    padding: 5px 35px;
  }
`;

const CutLinkForm = ({ getShortLinkFn, inputFieldRef, className }) => {
  const [inputLinkValue, setInputLinkValue] = useState('');
  const changeInputLinkValue = e => setInputLinkValue(e.target.value);

  return (
    <StyledForm className={className} onSubmit={getShortLinkFn} ref={inputFieldRef}>
      <Input
        placeholder="Shorten a link here..."
        value={inputLinkValue}
        onChange={changeInputLinkValue}
        name="shortLinkInput"
        id="shortLinkInput"
      />
      <StyledButton type="submit">Shorten It!</StyledButton>
    </StyledForm>
  );
};

export default CutLinkForm;
