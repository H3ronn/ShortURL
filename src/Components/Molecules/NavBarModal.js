import React from 'react';
import styled from 'styled-components';
import Button from 'Components/Atoms/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 370px;
  position: absolute;
  top: 60px;
  border-radius: 15px;
  z-index: 10;
  background-color: ${({ theme }) => theme.darkViolet};
  text-align: center;
  color: white;
  padding-top: 30px;
`;

const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 0;
  font-weight: 700;
`;

const StyledMenuWrapper = styled.ul``;

const StyledLoginButtonsWrapper = styled.ul`
  border-top: 1px solid white;
  margin-top: 30px;
  padding-top: 10px;
`;

const StyledButtonLogin = styled(Button)`
  background-color: inherit;
  font-weight: 500;
  font-weight: 700;
`;

const StyledButton = styled(Button)`
  margin-top: 5px;
  width: 80%;
`;

const NavBarModal = () => {
  return (
    <StyledWrapper>
      <StyledMenuWrapper>
        <li>
          <StyledA href="#">Features</StyledA>
        </li>
        <li>
          <StyledA href="#">Pricing</StyledA>
        </li>
        <li>
          <StyledA href="#">Resources</StyledA>
        </li>
      </StyledMenuWrapper>
      <StyledLoginButtonsWrapper>
        <li>
          <StyledButtonLogin>Login</StyledButtonLogin>
        </li>
        <li>
          <StyledButton>Sign Up</StyledButton>
        </li>
      </StyledLoginButtonsWrapper>
    </StyledWrapper>
  );
};

export default NavBarModal;
