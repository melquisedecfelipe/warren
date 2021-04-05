import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle(
  ({ theme: { colors, media, size } }) => css`
    * {
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      scroll-behavior: smooth;
    }

    h1 {
      font-size: ${size(5)};
      color: ${colors.title};
      font-weight: 700;
    }

    h2 {
      font-size: ${size(3)};
      color: ${colors.title};
      font-weight: 700;
    }

    h3 {
      font-size: ${size(2.5)};
      color: ${colors.title};
      font-weight: 700;
    }

    h4 {
      font-size: ${size(2)};
      color: ${colors.title};
      font-weight: 700;
    }

    p {
      font-size: ${size(2)};
      color: ${colors.text};
    }

    small {
      font-size: ${size(1.5)};
      color: ${colors.text};
    }

    ${media.tablet(css`
      h1 {
        font-size: ${size(7)};
      }

      h2 {
        font-size: ${size(5)};
      }

      h3 {
        font-size: ${size(3)};
      }
    `)};

    a {
      cursor: pointer;
      text-decoration: none;
    }

    button {
      border: 0;
      background: none;
      cursor: pointer;
    }

    input:focus,
    select:focus,
    button:focus {
      outline: none;
    }
  `
)

export default GlobalStyles
