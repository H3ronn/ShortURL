import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as HeaderIcon2 } from 'assets/illustration-working2.svg';
import Heading from 'Components/Atoms/Heading';
import Paragraph from 'Components/Atoms/Paragraph';
import Button from 'Components/Atoms/Button';
import gsap from 'gsap';

const StyledWrapper = styled.header`
  @media (min-width: 1000px) {
    /* height: 60vh; */
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-left: 70px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 0 25px;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 15px;
  font-size: 36px;

  @media (min-width: 1000px) {
    font-size: 46px;
    line-height: 1.2;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  padding: 0 15px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  &:last-of-type {
    flex: 0.8;
  }

  @media (min-width: 1000px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const StyledSvg = styled.div`
  transform: translateX(30px);
  @media (min-width: 1000px) {
    transform: translateX(0);
  }
`;

const StyledImg = styled.img`
  width: 500px;
  height: 350px;
  @media (min-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const background = elements.querySelector('#background');
    const character = elements.querySelector('#character');
    const desk = elements.querySelector('#desk');
    const plant = elements.querySelector('#plant');

    var tl = gsap.timeline();

    tl.from(background, { duration: 0.5, x: -50, opacity: 0 });
    tl.from(desk, { duration: 0.8, delay: 0.5, opacity: 0 });
    tl.from(plant, { duration: 0.8, opacity: 0 });
    tl.from(character, {
      duration: 1,
      scale: 0.5,
      x: -200,
      opacity: 0,
    });
  });

  return (
    <StyledWrapper>
      <StyledRow>
        <StyledSvg ref={wrapper}>
          <HeaderIcon2 />
        </StyledSvg>
      </StyledRow>
      <StyledRow>
        <StyledHeading as="h2">More than just shorter links</StyledHeading>
        <StyledParagraph>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </StyledParagraph>
        <Button>Get Started</Button>
      </StyledRow>
    </StyledWrapper>
  );
};

export default Header;
