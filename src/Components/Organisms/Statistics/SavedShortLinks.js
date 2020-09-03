import React from 'react';
import styled from 'styled-components';
import Button from 'Components/Atoms/Button';

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 10px 25px;
  padding: 10px 0 20px;
  text-align: start;
  font-size: 16px;
  overflow: hidden;
`;

const OriginalLink = styled.p`
  padding: 5px 10px 10px;
  width: 100%;
  border-bottom: 1px gray solid;
  font-weight: 500;
`;

const ShortLink = styled.p`
  padding: 10px;
  font-weight: 500;
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.cyan};
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  width: calc(100% - 20px);
  border-radius: 10px;
  padding: 8px 0;
  margin: 0 10px;
`;

const SavedShortLinks = ({ originalLink, shortLink }) => {
  const copyShortLink = () => navigator.clipboard.writeText(shortLink);
  return (
    <StyledWrapper>
      <OriginalLink>{originalLink}</OriginalLink>
      <ShortLink>
        <StyledA id="test" href={shortLink}>
          {shortLink}
        </StyledA>
      </ShortLink>
      <StyledButton onClick={copyShortLink}>Copy</StyledButton>
    </StyledWrapper>
  );
};

export default SavedShortLinks;
