import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import NavigationBar from 'Components/Organisms/NavigationBar';
import Header from 'Components/Organisms/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Wrapper">
        <NavigationBar />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
