import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: black;
  /* background-color: ${({ theme }) => theme.darkViolet}; */
  margin: 5px 0;
`;

const MobileNavButton = props => {
  return (
    <StyledWrapper>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
    </StyledWrapper>
  );
};

export default MobileNavButton;
