import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'Components/Atoms/Button';
import Input from 'Components/Atoms/Input';
import background from 'assets/bg-shorten-mobile.svg';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.darkViolet};
  background-image: url(${background});
  background-position: 100% 0%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-top: 15px;
`;

const CutLink = () => {
  const [inputLinkValue, setInputLinkValue] = useState('');
  const changeInputLinkValue = e => setInputLinkValue(e.target.value);

  return (
    <StyledWrapper>
      <Input
        placeholder="Shorten a link here..."
        value={inputLinkValue}
        onChange={changeInputLinkValue}
      />
      <StyledButton>Shorten It!</StyledButton>
    </StyledWrapper>
  );
};

export default CutLink;
