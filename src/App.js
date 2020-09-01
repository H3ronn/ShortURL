import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import NavigationBar from 'Components/Organisms/NavigationBar';
import Header from 'Components/Organisms/Header';
import Statistics from 'Components/Organisms/Statistics';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Wrapper">
        <NavigationBar />
        <Header />
        <Statistics />
      </div>
    </ThemeProvider>
  );
};

export default App;
