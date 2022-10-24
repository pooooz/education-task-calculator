import styled from 'styled-components';

const fullSize = '100%';

const calculatorWidth = '75%';

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: ${fullSize};
`;

export const CalculatorContainer = styled.div`
  width: ${calculatorWidth};
  padding: ${({ theme }) => theme.spaces.l};
`;
