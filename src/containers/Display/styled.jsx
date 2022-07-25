import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'text' })`
  display: flex;
  width: 100%;
  min-height: 120px;
  outline: none;
  border: none;
  background: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 64px;
`;

export const StyledHr = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  outline: none;
`;
