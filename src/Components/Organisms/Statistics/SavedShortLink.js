import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'Components/Atoms/Button';

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 10px 25px;
  padding: 10px 0 20px;
  text-align: start;
  font-size: 16px;
  overflow: hidden;
  @media (min-width: 1000px) {
    display: flex;
    padding: 20px 0;
    align-items: center;
  }
`;

const StyledOriginalLink = styled.p`
  padding: 5px 10px 10px;
  width: 100%;
  border-bottom: 1px gray solid;
  font-weight: 500;
  /* text-overflow: ellipsis; */
  word-break: break-all;
  @media (min-width: 1000px) {
    border-bottom: none;
    flex: 3;
  }
`;

const ShortLink = styled.p`
  padding: 10px;
  font-weight: 500;
  @media (min-width: 1000px) {
    flex: 1;
    text-align: end;
  }
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
  ${({ isCopied }) =>
    isCopied &&
    css`
      background-color: ${({ theme }) => theme.darkViolet};
    `}

  @media (min-width: 1000px) {
    flex: 0.6;
    height: 44px;
  }
`;

const SavedShortLink = ({ originalLink, shortLink, copyShortLinkFn, isCopied, setIsCopied }) => {
  return (
    <StyledWrapper>
      <StyledOriginalLink>{originalLink}</StyledOriginalLink>
      <ShortLink>
        <StyledA id="test" href={shortLink}>
          {shortLink}
        </StyledA>
      </ShortLink>
      <StyledButton isCopied={isCopied} onClick={() => copyShortLinkFn(shortLink)}>
        {isCopied ? 'Copied' : 'Copy'}
      </StyledButton>
    </StyledWrapper>
  );
};

export default SavedShortLink;
