import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';
import MobileNavButton from 'Components/Molecules/MobileNavButton';
import NavBarModal from 'Components/Molecules/NavBarModal';
import Button from 'Components/Atoms/Button';

const StyledNav = styled.nav`
  @media (min-width: 1000px) {
    padding: 10px 70px;
  }
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const DesktopMenuWrapper = styled.div`
  display: none;
  justify-content: space-between;
  padding: 10px;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLinksButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledA = styled.a`
  padding-right: 20px;
  color: ${({ theme }) => theme.gray};
  font-weight: 700;

  text-decoration: none;
  &:first-of-type {
    padding-left: 40px;
  }
`;

const StyledButtonLogin = styled(Button)`
  color: ${({ theme }) => theme.gray};
  background-color: transparent;
`;
const StyledButtonSign = styled(Button)``;

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledNav>
      <DesktopMenuWrapper>
        <StyledLinksWrapper>
          <Logo />
          <StyledA href="#">Features</StyledA>
          <StyledA href="#">Pricing</StyledA>
          <StyledA href="#">Resources</StyledA>
        </StyledLinksWrapper>
        <StyledLinksButtonWrapper>
          <StyledButtonLogin>Login</StyledButtonLogin>
          <StyledButtonSign>Sign Up</StyledButtonSign>
        </StyledLinksButtonWrapper>
      </DesktopMenuWrapper>
      <MobileMenuWrapper>
        <Logo />
        <MobileNavButton showModalFn={() => setIsModalOpen(prevState => !prevState)} />
        {isModalOpen && <NavBarModal />}
      </MobileMenuWrapper>
    </StyledNav>
  );
};

export default NavigationBar;
