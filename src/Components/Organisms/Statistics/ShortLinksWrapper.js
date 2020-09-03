import React, { useState } from 'react';
import styled from 'styled-components';
import CutLinkForm from 'Components/Organisms/Statistics/CutLinkForm';
import axios from 'axios';

const StyledWrapper = styled.div`
  transform: translateY(-83.5px);
`;

const ShortLinksWrapper = () => {
  const [shortLinksTable, setShortLinksTable] = useState([]);

  const getShortLink2 = e => {
    e.preventDefault();

    console.log(e.target);

    axios
      .post('https://rel.ink/api/links/', {
        url: e.target[0].value,
      })
      .then(shortLink => {
        console.log(shortLink);
        console.log(`https://rel.ink/${shortLink.data.hashid}`);
        setShortLinksTable(prevState => [...prevState, `https://rel.ink/${shortLink.data.hashid}`]);
      })
      .catch(e => console.log('Nieprawidłowy lub za krótki link'));
  };

  const getShortLink = async e => {
    e.preventDefault();

    try {
      const {
        data: { hashid },
      } = await axios.post('https://rel.ink/api/links/', {
        url: e.target[0].value,
      });
      setShortLinksTable(prevState => [...prevState, `https://rel.ink/${hashid}`]);
    } catch (error) {
      console.log(error);
    }

    // console.log(`https://rel.ink/${shortLink.data.hashid}`);
  };

  return (
    <StyledWrapper>
      <CutLinkForm getShortLinkFn={getShortLink} />
    </StyledWrapper>
  );
};

export default ShortLinksWrapper;
