import theme from '@client/theme'
import styled from 'styled-components'

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  outline: 2px solid ${theme.colors.outline};
  border-radius: 10px;
  overflow: hidden;
`

export const THead = styled.thead`
  background: ${theme.colors.sectionbgLighter};
`
export const THeadRow = styled.tr`
  height: 60px;
`
export const THeadCell = styled.th`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: right;

  &:first-of-type {
    text-align: left;
    padding: 0 30px;
  }

  &:last-of-type {
    padding: 0 30px;
  }
`
export const TBody = styled.tbody``
export const TBodyRow = styled.tr`
  height: 60px;

  &:nth-child(even) {
    background: ${theme.colors.sectionbgLightest};
  }
`
export const TBodyCell = styled.td`
  text-align: right;

  &:first-of-type {
    text-align: left;
    padding: 0 30px;
    font-weight: 700;
  }

  &:last-of-type {
    padding: 0 30px;
  }
`
