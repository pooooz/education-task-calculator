import styled from 'styled-components';

export const SettingsContainer = styled.section`
  padding: 60px 80px;
`;

export const SettingHeading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 64px;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 400px;
  height: 90px;
  margin: 32px 0 0 0;
  padding: 0 0 0 25px;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.colors.clearButton};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
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
