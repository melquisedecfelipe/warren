import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  hasStyle?: 'button' | 'outline' | 'link' | 'icon'
}

export const ButtonContainer = styled.button<ButtonContainerProps>(
  ({ theme: { colors, size }, hasStyle = 'button' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${size(5)};
    border-radius: ${size(0.5)};
    padding: 0 ${size(2)};
    transition: all 0.25s;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.5;
      cursor: no-drop;
    }

    ${hasStyle === 'button' &&
    css`
      background: ${colors.wheel.blue};
      color: ${colors.title};
    `}

    ${hasStyle === 'outline' &&
    css`
      border: 1px solid ${colors.title};
      color: ${colors.title};

      &:hover {
        background: ${colors.title};
        color: ${colors.background};
      }
    `}

    ${hasStyle === 'link' &&
    css`
      color: ${colors.title};
      text-decoration: underline;
    `}


    ${hasStyle === 'icon' &&
    css`
      background: transparent;
      padding: 0;
    `}
  `
)
