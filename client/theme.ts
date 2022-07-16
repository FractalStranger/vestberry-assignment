import {createGlobalStyle} from 'styled-components'

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#AAAAAA',
    bg: '#141518',
    text: '#f1f4fa',
    sectionbg: 'rgba(255, 255, 255, 0.03)',
    sectionbgLight: 'rgba(255, 255, 255, 0.06)',
    sectionbgLightest: 'rgba(255, 255, 255, 0.02)',
    sectionbgMid: 'rgba(255, 255, 255, 0.05)',
    sectionbgLighter: 'rgba(255, 255, 255, 0.2)',
    chart: [
      '#04C9C1',
      '#3D96FF',
      '#AB5EFF',
      '#EF5681',
      '#FF8A5B',
      '#FBC91A',
      '#5CD06D',
      '#DBB7A0',
    ],
    cta: '#06AC72',
    error: '#EF5681',
  },
  shadows: [
    '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '0px 2px 25px rgba(0, 0, 0, 0.1)',
  ],
}

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gotham';
    src: url('Gotham-Font/GothamBold.ttf');
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${theme.colors.text};
    font-size: 14px;
    font-family: 'Be Vietnam Pro', sans-serif;
    background-color: ${theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;

    color: ${theme.colors.text};
  }

  input::placeholder {
    color: ${theme.colors.grey};
  }
`

export default theme
