import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.bold};
  font-family: inherit;
  color: white;
  background-color: ${({ theme }) => theme.cyan};
  border: none;
  border-radius: 25px;
  padding: 15px 35px;

  /* font-size: 18px; */
`;

export default Button;
