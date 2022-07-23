import styled from 'styled-components';

export const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.header};
`;
