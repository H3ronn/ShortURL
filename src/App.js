import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import NavigationBar from 'Components/Organisms/NavigationBar';
import Header from 'Components/Organisms/Header';
import Statistics from 'Components/Organisms/Statistics';
import Boost from 'Components/Molecules/Boost';
import Footer from 'Components/Organisms/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavigationBar />
        <Header />
        <Statistics />
        <Boost />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
