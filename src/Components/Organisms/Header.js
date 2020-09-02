import React from 'react';
import styled from 'styled-components';
import HeaderIcon2 from 'assets/illustration-working.svg';
import Heading from 'Components/Atoms/Heading';
import Paragraph from 'Components/Atoms/Paragraph';
import Button from 'Components/Atoms/Button';

const StyledWrapper = styled.header``;

const StyledParagraph = styled(Paragraph)`
  padding: 0 15px 25px;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 15px;
  font-size: 36px;
`;

const StyledColumn = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const StyledSvg = styled.div`
  transform: translateX(30px);
`;

const StyledImg = styled.img`
  width: 500px;
  height: 350px;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <StyledColumn>
        <StyledSvg>
          <StyledImg src={HeaderIcon2} />
        </StyledSvg>
      </StyledColumn>
      <StyledColumn>
        <StyledHeading as="h2">More than just shorter links</StyledHeading>
        <StyledParagraph>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </StyledParagraph>
        <Button>Get Started</Button>
      </StyledColumn>
    </StyledWrapper>
  );
};

export default Header;
