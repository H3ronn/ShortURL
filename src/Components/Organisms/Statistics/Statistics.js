import React from 'react';
import styled from 'styled-components';
import ShortLinksWrapper from 'Components/Organisms/Statistics/ShortLinksWrapper';
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

const Statistics = () => {
  return (
    <StyledWrapper>
      <ShortLinksWrapper />
      <StyledHeading as="h2">Advanced Statistics</StyledHeading>
      <Paragraph>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Paragraph>
      <StyledCardWrapper>
        <Card head="Brand Recognition" img={icons2[0]}>
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
          links help instil confidence in your content.
        </Card>
        <Card head="Detailed Records" img={icons2[1]}>
          Gain insights into who is clicking your links. Knowing when and where people engage with
          your content helps inform better decisions.
        </Card>
        <Card head="Fully Customizable" img={icons2[2]}>
          Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement.
        </Card>
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default Statistics;
