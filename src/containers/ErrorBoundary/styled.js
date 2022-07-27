import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorHeading = styled.h1`
  color: red;
`;

export const ReloadButton = styled.button`
  cursor: pointer;
  width: 300px;
  height: 50px;
  margin: 32px 0 0 0;
  text-transform: capitalize;
  background-color: #17d917;
  border: none;
  outline: 2px solid black;
  border-radius: 8px;
  color: white;
  font-size: 32px;
  text-align: center;
  transition: filter 300ms ease-out;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    outline: 3px solid green;
    filter: brightness(120%);
  }
`;
