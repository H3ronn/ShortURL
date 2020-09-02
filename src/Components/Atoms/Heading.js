import styled from 'styled-components';

const Heading = styled.h1`
  /* font-size: ${({ theme }) => theme.fontSize.normal}; */
  /* font-size: 18px; */
  font-size: ${props => (props.as ? props.theme.fontSize[props.as] : props.theme.fontSize.h1)};
  letter-spacing: 0.01px;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 40px;
  color: ${props => (props.white ? 'white' : 'black')};
`;

export default Heading;
