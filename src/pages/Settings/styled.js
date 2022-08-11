import styled from 'styled-components';

export const SettingsContainer = styled.section`
  padding: 60px 80px;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 400px;
  height: 90px;
  margin: ${({ theme }) => theme.spaces.xl} 0 0 0;
  padding: 0 0 0 ${({ theme }) => theme.spaces.l};
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.colors.clearButton};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: left;
  transition: filter 300ms ease-out;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    outline: 3px solid ${({ theme }) => theme.colors.border};
    filter: brightness(75%);
  }
`;
