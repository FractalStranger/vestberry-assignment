import theme from '@client/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: ${theme.colors.sectionbgLightest};
`

export const Content = styled.div`
  background: ${theme.colors.bg};
  box-shadow: ${theme.shadows[1]};
  border-radius: 20px;
`
