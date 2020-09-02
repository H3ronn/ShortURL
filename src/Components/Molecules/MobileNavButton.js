import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 25px;
  height: 35px;
  background: none;
  border: none;
  padding: 0;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.gray};
  /* background-color: ${({ theme }) => theme.darkViolet}; */

  &:nth-child(2) {
    margin: 6px 0;
  }
`;

const MobileNavButton = ({ elo }) => {
  return (
    <StyledWrapper onClick={elo}>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
    </StyledWrapper>
  );
};

export default MobileNavButton;
