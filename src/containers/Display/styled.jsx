import styled from 'styled-components';

export const ExpressionInput = styled.input.attrs({ type: 'text' })`
  display: flex;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.s} 0 0 0;
  outline: none;
  border: none;
  background: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ColoredHr = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  outline: none;
`;

export const ValueInput = styled.input.attrs({ type: 'text' })`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
