import styled from 'styled-components';

const Pararaph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.gray};
  /* font-size: 18px; */
`;

export default Pararaph;
