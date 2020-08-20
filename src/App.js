import React from 'react';
import './styles.scss';
import '@elliemae/ds-system/theme';
import MainLayout from './MainLayout';
import styled, { ThemeProvider } from 'styled-components';
import { DSTheme } from '@elliemae/ds-system';

const StyledDiv = styled.div`
  padding: 8px;
  height: 100vh;
`;

export default function App() {
  return (
    <StyledDiv>
      <ThemeProvider theme={DSTheme}>
        <MainLayout />
      </ThemeProvider>
    </StyledDiv>
  );
}
