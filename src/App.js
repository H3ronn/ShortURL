import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import { ReactComponent as Logo } from 'Assets/logo.svg';
import MobileNavButton from 'Components/Molecules/MobileNavButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Wrapper">
        <StyledNav>
          <Logo />
          <MobileNavButton elo="hehe" />
        </StyledNav>
      </div>
    </ThemeProvider>
  );
};

export default App;
