import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const CalculatorContainer = styled.div`
  width: 75%;
  padding: ${({ theme }) => theme.spaces.l};
`;
