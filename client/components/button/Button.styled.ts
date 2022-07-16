import theme from '@client/theme'
import styled from 'styled-components'

export const SButton = styled.button<{textOnly?: boolean}>`
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: ${theme.colors.white};

  background-color: ${({textOnly}) =>
    textOnly ? 'transparent' : theme.colors.cta};
  border-radius: 20px;
  padding: 0 41px;
  height: 40px;
  border: 0;

  cursor: pointer;
`
