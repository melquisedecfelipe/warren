import styled, { css } from 'styled-components'

export const Form = styled.form(
  ({ theme: { colors, size } }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${size(3)};

    > div {
      width: 100%;
      margin-top: ${size(2)};

      > label {
        color: ${colors.title};
      }

      > select,
      input {
        background: ${colors.backgroundInput};
        border: 1px solid ${colors.border};
        padding: ${size(0.5)} ${size(1)};
        margin-top: ${size(0.5)};
        color: ${colors.title};
        border-radius: ${size(0.5)};
        height: ${size(5)};
        width: 100%;
      }
    }

    > small {
      color: ${colors.wheel.red};
      font-weight: 700;
      margin-top: ${size(2)};
    }

    > button {
      margin-top: ${size(2)};
    }
  `
)
