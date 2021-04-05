import styled, { css } from 'styled-components'

interface HomeContainerProps {
  hasSession: boolean
}

interface CardProps {
  background: string
}
export const HomeContainer = styled.div<HomeContainerProps>(
  ({ theme: { colors, size }, hasSession }) => css`
    flex: 1;
    position: relative;

    ${!hasSession &&
    css`
      ::after {
        content: 'Por favor, entre na aplicação para ter uma experiência personalizada :)';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        font-size: ${size(5)};
        font-weight: 700;
        color: ${colors.title};
        background: ${colors.background};
        backdrop-filter: grayscale(100%);
        cursor: no-drop;
        text-align: center;
      }
    `};
  `
)

export const Header = styled.section(
  ({ theme: { media } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.tablet(css`
      flex-direction: row;
      align-items: center;
    `)}
  `
)
export const Actions = styled.div(
  ({ theme: { media, size } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${size(2)};

    ${media.tablet(css`
      margin-top: 0;
    `)}
  `
)

export const Transactions = styled.section(
  ({ theme: { media, size } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${size(3)};
    padding: ${size(2)} 0;

    ${media.tablet(css`
      grid-template-columns: repeat(2, 1fr);
      padding: ${size(5)} 0;
    `)}

    > div {
      display: grid;
      grid-gap: ${size(3)};
      height: 100%;

      > div {
        display: grid;
        grid-gap: ${size(3)};
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `
)

export const Card = styled.section<CardProps>(
  ({ theme: { colors, size }, background }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${background};
    background-size: cover;
    min-height: 150px;
    height: 100%;
    width: 100%;
    border-radius: ${size(0.5)};
    padding: ${size(3)};

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        color: ${colors.title};
      }

      > svg {
        height: 40px;
        width: 40px;
        color: ${colors.title};
      }
    }
  `
)
