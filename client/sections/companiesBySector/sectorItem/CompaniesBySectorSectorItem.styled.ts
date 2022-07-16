import theme from '@client/theme'
import styled from 'styled-components'

export const SWrapper = styled.div`
  background: ${theme.colors.sectionbg};
  box-shadow: ${theme.shadows[0]};
  border-radius: 10px;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
  height: 138px;

  cursor: pointer;

  &:hover {
    background: ${theme.colors.sectionbgLight};
    box-shadow: none;
  }
`

export const SQuantity = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
`

export const SLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #aaaaaa;
`
