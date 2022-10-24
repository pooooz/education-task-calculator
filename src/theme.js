import { createGlobalStyle } from 'styled-components';

export const light = {
  white: '#FFFFFF',
  text: '#000000',
  header: '#434343',
  background: '#FFFFFF',
  border: '#707070',
  button: '#F2F2F2',
  clearButton: '#F2F2F2',
  equal: '#F2F2F2',
};

export const dark = {
  white: '#FFFFFF',
  text: '#FFFFFF',
  header: '#434343',
  background: '#242424',
  border: '#c4c4c4',
  button: '#8a8888',
  clearButton: '#f85149',
  equal: '#FF9500',
};

export const colors = {
  light,
  dark,
};

export const spaces = {
  s: '8px',
  l: '25px',
  xl: '32px',
  xxl: '50px',
};

export const fontSizes = {
  s: '24px',
  m: '32px',
  l: '48px',
  xl: '64px',
};

export const getColoredTheme = (currentTheme) => ({
  colors: colors[currentTheme],
  spaces,
  fontSizes,
});

const fullScreen = '100%';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: ${fullScreen};
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
    height: ${fullScreen};
  }
  
  main {
    height: 87%;
  }
`;
