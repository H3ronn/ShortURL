import React from 'react';
import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';
import Paragraph from 'Components/Atoms/Paragraph';

const StyledWrapper = styled.article`
  background-color: white;
  margin: 100px 20px 0;
  padding: 0 10px 40px;
  position: relative;
  z-index: 1;
`;

const StyledImgWrapper = styled.div`
  background-color: ${({ theme }) => theme.darkViolet};
  width: 90px;
  height: 90px;
  /* padding: px; */
  margin: 0 auto;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 10px;
  margin-top: -15px;
`;

const Card = ({ head, children, img }) => {
  return (
    <StyledWrapper>
      <StyledImgWrapper>
        <img src={img} />
      </StyledImgWrapper>
      <StyledHeading as="h3">{head}</StyledHeading>
      <Paragraph>{children}</Paragraph>
    </StyledWrapper>
  );
};

export default Card;
