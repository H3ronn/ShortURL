import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import NavigationBar from 'Components/Organisms/NavigationBar';
import Header from 'Components/Organisms/Header';
import Statistics from 'Components/Organisms/Statistics/Statistics';
import Boost from 'Components/Molecules/Boost';
import Footer from 'Components/Organisms/Footer/Footer';

const StyledMainWrapper = styled.main``;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledMainWrapper>
        <NavigationBar />
        <Header />
        <Statistics />
        <Boost />
        <Footer />
      </StyledMainWrapper>
    </ThemeProvider>
  );
};

export default App;
