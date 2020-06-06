import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageTitleProps {}

const StyledPageTitle = styled.div`
  color: pink;
`;

export const PageTitle = (props: PageTitleProps) => {
  return (
    <StyledPageTitle>
      <h1>Welcome to page-title!</h1>
    </StyledPageTitle>
  );
};

export default PageTitle;
