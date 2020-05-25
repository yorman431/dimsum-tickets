import React from "react";
import "./styles.scss";
import "@elliemae/ds-system/theme";
// import PUI2090 from "./DataGrid/PUI-2090";
// import PUI2098 from "./DataGrid/PUI-2098";
// import PUI2089 from "./DataGrid/PUI-2089";
// import PUI2512 from "./DataGrid/PUI-2512";
// import PUI2604 from "./DataGrid/PUI-2604";
// import ToolbarIssues from "./DataGrid/ToolbarIssues";
// import PUIX from "./Tabs/PUI-X";
// import PUI2468 from "./TooltipTextProvider/PUI-2468";
// import PUI2579 from "./TreeView/PUI-2579";
// import PUI2690B from "./TreeView/PUI-2690-B"; // WORKAROUND THAT creates ENCW-48916
// import PUI2690 from "./TreeView/PUI-2690";
// import TreeViewOverview from "./TreeView/Overview";
import TreeViewExpandAll from "./TreeView/ExpandAll";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 8px;
`;
const StyledLabel = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;

export default function App() {
  const path = "TreeViewOverview";
  return (
    <StyledDiv>
      <StyledLabel>Rendering: {path}</StyledLabel>
      <TreeViewExpandAll />
    </StyledDiv>
  );
}
