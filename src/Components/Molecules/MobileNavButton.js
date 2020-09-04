import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  width: 25px;
  max-height: 35px;
  margin: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  /* outline: none; */
`;

const StyledLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.gray};

  &:nth-child(2) {
    margin: 6px 0;
  }
`;

const MobileNavButton = ({ showModalFn }) => {
  return (
    <StyledWrapper onClick={showModalFn}>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
      <StyledLine></StyledLine>
    </StyledWrapper>
  );
};

export default MobileNavButton;
