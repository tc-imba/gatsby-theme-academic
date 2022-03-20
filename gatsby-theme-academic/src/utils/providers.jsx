import React from 'react';
import { Container } from 'rsuite';

import Footer from '../components/PageLayout/Footer';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';

import { ContextProvider } from './context';

export const wrapPageElement = ({
  element,
  props,
}) => {
  return (
    <ContextProvider>
      <Container className="outerPadding">
        <Container className="container">
          <Header />
          <SidebarWrapper>
            <div>
              {element}
            </div>
            <Footer />
          </SidebarWrapper>
        </Container>
      </Container>
    </ContextProvider>
  );
};

// const ThemeProvider = (props) => {
//   const [themeMode, setThemeMode] = useTheme();
//   return (
//     <CustomProvider theme={themeMode}>
//       {props.children}
//     </CustomProvider>
//   );
// };
//
// export const wrapRootElement = ({ element }) => {
//   return (
//     <ThemeProvider>
//       {element}
//     </ThemeProvider>
//   );
// };
