import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.bold};
  font-family: inherit;
  color: white;
  background-color: ${({ theme }) => theme.cyan};
  /* background-color: ${props => (props.white ? 'white' : props.theme.cyan)}; */
  border: none;
  border-radius: 25px;
  padding: 15px 35px;
  cursor: pointer;
  /* outline: none; */
`;

export default Button;
