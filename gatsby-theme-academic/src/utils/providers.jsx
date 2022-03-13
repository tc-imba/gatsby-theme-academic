import { Container, CustomProvider } from 'rsuite';
import React from 'react';
import { useTheme } from './hooks';

import Footer from '../components/PageLayout/Footer';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';

export const wrapPageElement = ({
  element,
  props,
}) => {
  return (
    <Container className="outerPadding">
      <Container className="container">
        <Header />
        <SidebarWrapper>
          {element}
          <Footer />
        </SidebarWrapper>
      </Container>
    </Container>
  );
};

const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useTheme();
  return (
    <CustomProvider theme={themeMode}>
      {props.children}
    </CustomProvider>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  );
};
