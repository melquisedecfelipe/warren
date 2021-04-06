import styled, { css } from 'styled-components'

interface CardProps {
  background: string
}

export const CardContainer = styled.section<CardProps>(
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

    > div {
      > small {
        color: ${colors.title};
        font-weight: 700;
      }
    }
  `
)
