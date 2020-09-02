import React from 'react';
import styled from 'styled-components';
import Heading from 'Components/Atoms/Heading';
import socialMediaIcon1 from 'assets/icon-facebook.svg';
import socialMediaIcon2 from 'assets/icon-twitter.svg';
import socialMediaIcon3 from 'assets/icon-pinterest.svg';
import socialMediaIcon4 from 'assets/icon-instagram.svg';
// // import Header from 'Components/Organisms/Header';

const StyledWrapper = styled.footer`
  /* height: 100vh; */
  background-color: ${({ theme }) => theme.veryDarkViolet};
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  padding: 50px 0 30px;
`;

const StyledListHeadig = styled(Heading)`
  padding: 20px 0 10px;
`;

const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.gray};
  padding: 0 0 10px;
  font-size: 16px;
`;

const StyledSocialMediaList = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 50px;
`;

const StyledSocialMediaLink = styled.a`
  display: block;
  padding: 0 10px;
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledHeading white>Shortly</StyledHeading>
      <nav>
        <ul>
          <li>
            <StyledListHeadig white as="h4">
              Features
            </StyledListHeadig>
          </li>
          <li>
            <StyledA href="#">Link Shortening</StyledA>
          </li>
          <li>
            <StyledA href="#">Branded Links</StyledA>
          </li>
          <li>
            <StyledA href="#">Analytics</StyledA>
          </li>
          <li>
            <StyledListHeadig white as="h4">
              Resources
            </StyledListHeadig>
          </li>
          <li>
            <StyledA href="#">Blog</StyledA>
          </li>
          <li>
            <StyledA href="#">Developers</StyledA>
          </li>
          <li>
            <StyledA href="#">Support</StyledA>
          </li>
          <li>
            <StyledListHeadig white as="h4">
              Company
            </StyledListHeadig>
          </li>
          <li>
            <StyledA href="#">About</StyledA>
          </li>
          <li>
            <StyledA href="#">Our Team</StyledA>
          </li>
          <li>
            <StyledA href="#">Careers</StyledA>
          </li>
          <li>
            <StyledA href="#">Contact</StyledA>
          </li>
        </ul>
        <StyledSocialMediaList>
          <StyledSocialMediaLink href="https://www.facebook.com">
            <img src={socialMediaIcon1} />
          </StyledSocialMediaLink>
          <StyledSocialMediaLink href="https://www.twitter.com">
            <img src={socialMediaIcon2} />
          </StyledSocialMediaLink>
          <StyledSocialMediaLink href="https://www.pinterest.com">
            <img src={socialMediaIcon3} />
          </StyledSocialMediaLink>
          <StyledSocialMediaLink href="https://www.instagram.com">
            <img src={socialMediaIcon4} />
          </StyledSocialMediaLink>
        </StyledSocialMediaList>
      </nav>
    </StyledWrapper>
  );
};

export default Footer;
