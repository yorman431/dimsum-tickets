import React from 'react';
import './styles.scss';
import '@elliemae/ds-system/theme';
import MainLayout from './MainLayout';
import styled, { ThemeProvider } from 'styled-components';
import { DSTheme } from '@elliemae/ds-system';
import pkg from '../package.json';

const StyledDiv = styled.div`
  padding: 8px;
  height: 100vh;
`;
const StyledLabel = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;

export default function App() {
  return (
    <StyledDiv>
      <StyledLabel>
        Select a ticket to render on the right pane
      </StyledLabel>
      <StyledLabel>
        {pkg.dependencies['@elliemae/ds-basic']}
      </StyledLabel>
      <ThemeProvider theme={DSTheme}>
        <MainLayout />
      </ThemeProvider>
    </StyledDiv>
  );
}
