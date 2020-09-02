import React from 'react';
import styled from 'styled-components';
import CutLink from 'Components/Molecules/CutLink';
import Card from 'Components/Molecules/Card/Card';
import Heading from 'Components/Atoms/Heading';
import Paragraph from 'Components/Atoms/Paragraph';
import { iconsTable2 as icons2 } from 'assets/iconsTable';

const StyledWrapper = styled.section`
  background-color: hsl(230, 25%, 95%);
  margin-top: 170px;
  text-align: center;
  padding-bottom: 100px;
`;

const StyledCutLinksWrapper = styled.div`
  transform: translateY(-50%);
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 25px;
`;

const StyledCardWrapper = styled.div`
  margin-top: 100px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 99%;
    background-color: ${({ theme }) => theme.cyan};
    transform: translateX(-50%);
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 2225px;
  z-index: 21;
`;

const Statistics = () => {
  return (
    <StyledWrapper>
      <StyledCutLinksWrapper>
        <CutLink />
      </StyledCutLinksWrapper>
      <StyledHeading as="h2">Advanced Statistics</StyledHeading>
      <Paragraph>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Paragraph>
      <StyledCardWrapper>
        <StyledCard head="Brand Recognition" img={icons2[0]}>
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
          links help instil confidence in your content.
        </StyledCard>
        <StyledCard head="Detailed Records" img={icons2[1]}>
          Gain insights into who is clicking your links. Knowing when and where people engage with
          your content helps inform better decisions.
        </StyledCard>
        <StyledCard head="Fully Customizable" img={icons2[2]}>
          Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement.
        </StyledCard>
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default Statistics;
