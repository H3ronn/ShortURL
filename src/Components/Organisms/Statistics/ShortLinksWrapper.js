import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CutLinkForm from 'Components/Organisms/Statistics/CutLinkForm';
import SavedShortLink from 'Components/Organisms/Statistics/SavedShortLink';
import axios from 'axios';

const StyledWrapper = styled.div`
  transform: ${({ height }) => `translateY(-${height / 2}px)`};
`;

const StyledCutLinkForm = styled(CutLinkForm)`
  /* transform: translateY(-50%); */
`;

const ShortLinksWrapper = () => {
  const [shortLinksTable, setShortLinksTable] = useState(
    localStorage.getItem('shortLinks') ? localStorage.getItem('shortLinks').split(',') : [],
  );
  const [originalLinksTable, setOriginalLinksTable] = useState(
    localStorage.getItem('originalLinks') ? localStorage.getItem('originalLinks').split(',') : [],
  );
  const [handleCopiedLink, setHandleCopiedLink] = useState('');

  const [handleInputHeight, setHandleInputHeight] = useState(0);

  const inputFieldRef = useRef(null);

  const getShortLink = async e => {
    e.preventDefault();
    console.log('poszlo');
    const originalLinkValue = e.target[0].value;

    try {
      const {
        data: { hashid },
      } = await axios.post('https://rel.ink/api/links/', {
        url: originalLinkValue,
      });
      // localStorage.setItem('shortLinks', [...shortLinksTable, `https://rel.ink/${hashid}`]);
      // localStorage.setItem('originalLinks', [...originalLinksTable, originalLinkValue]);
      setShortLinksTable(prevState => [...prevState, `https://rel.ink/${hashid}`]);
      setOriginalLinksTable(prevState => [...prevState, originalLinkValue]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setHandleInputHeight(inputFieldRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if (shortLinksTable.length > 5) {
      shortLinksTable.shift();
      originalLinksTable.shift();
    }

    localStorage.setItem('shortLinks', shortLinksTable);
    localStorage.setItem('originalLinks', originalLinksTable);
  }, [originalLinksTable, shortLinksTable]);

  const copyShortLink = shortLink => {
    console.log(`elo ${shortLink}`);
    navigator.clipboard.writeText(shortLink);

    setHandleCopiedLink(shortLink);
  };

  return (
    <StyledWrapper height={handleInputHeight}>
      <StyledCutLinkForm getShortLinkFn={getShortLink} inputFieldRef={inputFieldRef} />
      {shortLinksTable
        .slice()
        .reverse()
        .map((shortLink, index) => {
          return (
            <SavedShortLink
              key={shortLink}
              shortLink={shortLink}
              originalLink={originalLinksTable[originalLinksTable.length - 1 - index]}
              copyShortLinkFn={copyShortLink}
              isCopied={shortLink === handleCopiedLink ? true : false}
            />
          );
        })}
      {/* reverse() zeby najnowszy był u góry nie na dole 
      najpierw slice() zeby utworzyć nową tablice a potem dopiro reverse() bo reverse() mutuje oryginał*/}
    </StyledWrapper>
  );
};

export default ShortLinksWrapper;
