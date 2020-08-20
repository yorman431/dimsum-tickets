import styled from 'styled-components';

/** Fixes tree height issue */
export const TreeContainer = styled.div`
  height: calc(100% - ${(props) => props.offsetHeight || 80}px);
`;
