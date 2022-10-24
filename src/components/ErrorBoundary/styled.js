import styled from 'styled-components';

const errorHeadingTextColor = '#FF0000FF';

const reloadButtonWidth = '300px';
const reloadButtonHeight = '50px';
const reloadButtonBackground = '#17D917';
const reloadButtonTextColor = '#FFFFFF';

const activeButtonOutlineColor = '#008000';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorHeading = styled.h1`
  color: ${errorHeadingTextColor};
`;

export const ReloadButton = styled.button`
  cursor: pointer;
  width: ${reloadButtonWidth};
  height: ${reloadButtonHeight};
  margin: ${({ theme }) => theme.spaces.xl} 0 0 0;
  text-transform: capitalize;
  background-color: ${reloadButtonBackground};
  border: none;
  outline: 2px solid black;
  border-radius: 8px;
  color: ${reloadButtonTextColor};
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
  transition: filter 300ms ease-out;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    outline: 3px solid ${activeButtonOutlineColor};
    filter: brightness(120%);
  }
`;
