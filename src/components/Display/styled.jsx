import styled from 'styled-components';

const fullSize = '100%';

const inputFontSize = '500';

export const ExpressionInput = styled.input.attrs({ type: 'text' })`
  display: flex;
  width: ${fullSize};
  margin: ${({ theme }) => theme.spaces.s} 0 0 0;
  outline: none;
  border: none;
  background: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${inputFontSize};
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
  width: ${fullSize};
  outline: none;
  border: none;
  background: transparent;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-weight: ${inputFontSize};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
