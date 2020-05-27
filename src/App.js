import React from "react";
import "./styles.scss";
import "@elliemae/ds-system/theme";
import MainLayout from "./MainLayout";
import styled from "styled-components";

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
      <StyledLabel>Select a ticket to render on the right pane</StyledLabel>
      <MainLayout />
    </StyledDiv>
  );
}
