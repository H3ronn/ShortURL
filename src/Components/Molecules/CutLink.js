import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'Components/Atoms/Button';
import Input from 'Components/Atoms/Input';
import background from 'assets/bg-shorten-mobile.svg';
import axios from 'axios';

const StyledWrapper = styled.div`
  background: url(${background}) no-repeat;
  background-color: ${({ theme }) => theme.darkViolet};
  background-position: 100% 0%;
  background-size: 71%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-top: 15px;
`;

const CutLink = () => {
  const [inputLinkValue, setInputLinkValue] = useState('');
  const changeInputLinkValue = e => setInputLinkValue(e.target.value);

  const getShortLink = e => {
    console.log(e);

    const inputValue = document.querySelector('#shortLinkInput').value;

    axios
      .post('https://rel.ink/api/links/', {
        url: inputValue,
      })
      .then(shortLink => {
        console.log(shortLink);
        console.log(`https://rel.ink/${shortLink.data.hashid}`);
      })
      .catch(e => alert(e));
    //     POST https://rel.ink/api/links/

    // {
    //   "url": "https://news.ycombinator.com/"
    // }
  };

  return (
    <StyledWrapper>
      <Input
        placeholder="Shorten a link here..."
        value={inputLinkValue}
        onChange={changeInputLinkValue}
        name="shortLinkInput"
        id="shortLinkInput"
      />
      <StyledButton onClick={getShortLink}>Shorten It!</StyledButton>
    </StyledWrapper>
  );
};

export default CutLink;
