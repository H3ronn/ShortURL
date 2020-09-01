import styled from 'styled-components';

const Heading = styled.h1`
  /* font-size: ${({ theme }) => theme.fontSize.normal}; */
  /* font-size: 18px; */
  font-weight: ${({ theme }) => theme.bold};
  line-height: 40px;
`;

export default Heading;
