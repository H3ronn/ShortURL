import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';
import MobileNavButton from 'Components/Molecules/MobileNavButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const NavigationBar = () => {
  return (
    <StyledNav>
      <Logo />
      <MobileNavButton elo="hehe" />
    </StyledNav>
  );
};

export default NavigationBar;
