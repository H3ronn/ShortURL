import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CutLinkForm from 'Components/Organisms/Statistics/CutLinkForm';
import SavedShortLinks from 'Components/Organisms/Statistics/SavedShortLinks';
import axios from 'axios';

const StyledWrapper = styled.div`
  transform: translateY(-83.5px);
`;

const ShortLinksWrapper = () => {
  const [shortLinksTable, setShortLinksTable] = useState(
    localStorage.getItem('shortLinks') ? localStorage.getItem('shortLinks').split(',') : [],
  );
  const [originalLinksTable, setOriginalLinksTable] = useState(
    localStorage.getItem('originalLinks') ? localStorage.getItem('originalLinks').split(',') : [],
  );

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
      localStorage.setItem('shortLinks', [...shortLinksTable, `https://rel.ink/${hashid}`]);
      localStorage.setItem('originalLinks', [...originalLinksTable, originalLinkValue]);
      setShortLinksTable(prevState => [...prevState, `https://rel.ink/${hashid}`]);
      setOriginalLinksTable(prevState => [...prevState, originalLinkValue]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // localStorage.clear();
  }, []);

  return (
    <StyledWrapper>
      <CutLinkForm getShortLinkFn={getShortLink} />
      {shortLinksTable.map((link, index) => (
        <SavedShortLinks shortLink={link} originalLink={originalLinksTable[index]} />
      ))}
    </StyledWrapper>
  );
};

export default ShortLinksWrapper;
