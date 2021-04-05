import styled, { css } from 'styled-components'

interface ModalContentProps {
  width?: string
}

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`

export const ModalContent = styled.section<ModalContentProps>(
  ({ theme: { colors, media, size }, width }) => css`
    background: ${colors.background};
    padding: ${size(3)};
    margin: auto ${size(2)};
    width: 100%;
    border-radius: ${size(0.5)};

    ${media.tablet(css`
      padding: ${size(5)};
      margin: auto;
      max-width: ${width || '400px'};
    `)}

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > button {
        > svg {
          color: ${colors.title};
          width: 20px;
          height: 20px;
        }
      }
    }
  `
)
