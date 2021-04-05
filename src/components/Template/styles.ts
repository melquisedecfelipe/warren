import styled, { css } from 'styled-components'

export const ContainerTemplate = styled.main(
  ({ theme: { colors, media, size } }) => css`
    flex: 1;
    min-height: 100vh;
    background: ${colors.background};

    > section {
      padding: ${size(2)};

      ${media.tablet(css`
        padding: ${size(10)} ${size(2)};
      `)}

      ${media.desktop(css`
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
      `)}
    }
  `
)
export const Hero = styled.div(
  ({ theme: { colors, media, size } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: ${size(2)};
    padding: ${size(2)};

    ${media.tablet(css`
      grid-template-columns: repeat(2, 1fr);
      padding: ${size(10)} ${size(2)};
    `)}

    ${media.desktop(css`
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
    `)}

    > section {
      > h1 {
        max-width: 400px;
        margin-bottom: ${size(2)};
      }

      > h3 {
        color: ${colors.text};
        font-weight: 400;
      }

      > button {
        margin-top: ${size(5)};
      }
    }

    > img {
      display: none;
    }

    ${media.tablet(css`
      > img {
        display: block;
        margin-left: auto;
        max-width: 300px;
        border-radius: ${size(0.5)};
      }
    `)}
  `
)
