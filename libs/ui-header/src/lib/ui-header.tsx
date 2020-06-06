import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiHeaderProps {}

const StyledUiHeader = styled.div`
  color: pink;
`;

export const UiHeader = (props: UiHeaderProps) => {
  return (
    <StyledUiHeader>
      <h1>Welcome to ui-header!</h1>
    </StyledUiHeader>
  );
};

export default UiHeader;
