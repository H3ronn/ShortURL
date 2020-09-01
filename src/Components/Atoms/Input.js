import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  font-family: inherit;
  font-size: 18px;
  color: ${({ theme }) => theme.gray};
  height: 50px;
  padding-left: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

export default Input;
