import styled, { css } from 'styled-components'

export const Table = styled.form(
  ({ theme: { colors, size } }) => css`
    display: flex;
    overflow: auto;
    max-height: 400px;
    margin-top: ${size(3)};

    &::-webkit-scrollbar {
      width: ${size(0.5)};
      height: ${size(0.5)};
    }

    &::-webkit-scrollbar-track {
      background: ${colors.background};
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.backgroundInput};
      border-radius: ${size(1)};
    }

    > table {
      width: 100%;
      border-spacing: 0;
      color: ${colors.title};

      > thead {
        & th {
          text-align: left;
          padding: ${size(2)} 0;

          & + th {
            padding-left: ${size(2)};
          }
        }
      }

      > tbody {
        & td {
          border-bottom: 1px solid ${colors.border};
          padding: ${size(2)} 0;

          & + td {
            padding-left: ${size(2)};
          }
        }
      }
    }
  `
)
