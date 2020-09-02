import React from 'react';
import styled from 'styled-components';
import background from 'assets/bg-boost-mobile.svg';
import Heading from 'Components/Atoms/Heading';
import Button from 'Components/Atoms/Button';

const StyledWrapper = styled.section`
  width: 100%;
  height: 300px;
  background: url(${background}) no-repeat;
  background-color: ${({ theme }) => theme.darkViolet};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const Boost = () => {
  return (
    <StyledWrapper>
      <Heading white as="h2">
        Boost your links today
      </Heading>
      <StyledButton>Get Started</StyledButton>
    </StyledWrapper>
  );
};

export default Boost;
