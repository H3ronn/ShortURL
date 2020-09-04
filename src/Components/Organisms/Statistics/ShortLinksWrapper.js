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
      // localStorage.setItem('shortLinks', [...shortLinksTable, `https://rel.ink/${hashid}`]);
      // localStorage.setItem('originalLinks', [...originalLinksTable, originalLinkValue]);
      setShortLinksTable(prevState => [...prevState, `https://rel.ink/${hashid}`]);
      setOriginalLinksTable(prevState => [...prevState, originalLinkValue]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  // localStorage.clear();
  // });

  useEffect(() => {
    // localStorage.clear();
    // if (shortLinksTable.length > 3) {
    //   shortLinksTable.shift();
    //   originalLinksTable.shift();
    //   console.log('shortLinksTable');
    //   console.log(shortLinksTable);
    //   console.log('shortLinksTable');
    //   console.log('originalLinksTable');
    //   console.log(originalLinksTable);
    //   console.log('originalLinksTable');
    //   // const newShortLinksTable = shortLinksTable;
    //   // console.log(shortLinksTable.shift());
    //   // setShortLinksTable([...newShortLinksTable]);
    // }
    console.log('poza ifem');
    console.log(shortLinksTable);
    console.log(originalLinksTable);
    console.log('poza ifem');
    localStorage.setItem('shortLinks', shortLinksTable);
    localStorage.setItem('originalLinks', originalLinksTable);
  }, [originalLinksTable, shortLinksTable]);

  return (
    <StyledWrapper>
      <CutLinkForm getShortLinkFn={getShortLink} />
      {shortLinksTable
        .slice()
        .reverse()
        .map((link, index) => (
          <SavedShortLinks
            shortLink={link}
            originalLink={originalLinksTable[originalLinksTable.length - 1 - index]}
          />
        ))}
      {/* reverse() zeby najnowszy był u góry nie na dole 
      najpierw slice() zeby utworzyć nową tablice a potem dopiro reverse() bo reverse() mutuje oryginał*/}
    </StyledWrapper>
  );
};

export default ShortLinksWrapper;
