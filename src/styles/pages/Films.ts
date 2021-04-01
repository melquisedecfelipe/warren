import styled, { css } from 'styled-components'

export const FilmsContainer = styled.div(
  ({ theme: { colors, media, size } }) => css`
    padding: ${size(2)};

    ${media.tablet(css`
      padding: ${size(10)} ${size(5)};
    `)}

    ${media.desktop(css`
      max-width: 950px;
      width: 100%;
      margin: 0 auto;
    `)}

    > div {
      padding: ${size(4)} 0;

      > h2 {
        color: ${colors.primary};
        font-weight: 700;
      }

      > p {
        color: ${colors.primary};
      }
    }

    ${media.tablet(css`
      > section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${size(2)};
      }
    `)}
  `
)
