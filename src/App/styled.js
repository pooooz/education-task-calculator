import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    margin: 0;
    font-family: 'Helvetica Neue', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  #root {
    height: 100%;
  }
  
  main {
    height: 87%;
  }
`;
