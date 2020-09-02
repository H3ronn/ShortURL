import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';
import MobileNavButton from 'Components/Molecules/MobileNavButton';
import NavBarModal from 'Components/Molecules/NavBarModal';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledNav>
      <Logo />
      <MobileNavButton
        // onClick={() => {
        //   console.log('elo');
        // }}
        elo={() => setIsModalOpen(prevState => !prevState)}
      />
      {isModalOpen && <NavBarModal />}
    </StyledNav>
  );
};

export default NavigationBar;
