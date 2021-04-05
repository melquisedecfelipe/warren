import styled, { css } from 'styled-components'

import Button from '../Button'

export const SignInButtonContainer = styled(Button)(
  ({ theme: { colors, size } }) => css`
    > svg {
      width: 20px;
      height: 20px;
      fill: ${colors.wheel.blueSecondary};
      transition: all 0.25s;

      &:first-child {
        margin-right: ${size(1)};
      }

      &:last-child {
        margin-left: ${size(1)};
      }
    }
  `
)
