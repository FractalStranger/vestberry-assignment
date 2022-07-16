import theme from '@client/theme'
import styled from 'styled-components'

export const SWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 127px;

  padding: 53px 94px 56px 126px;

  background: ${theme.colors.sectionbg};
  box-shadow: ${theme.shadows[0]};
  border-radius: 10px;
`

export const SChart = styled.div`
  height: 246px;
  width: 246px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SQuantity = styled.div`
  position: absolute;
  text-align: center;
  margin-bottom: 15px;
`

export const SQuantityCount = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
`

export const SQuantityCompanies = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #aaaaaa;
`

export const SCompanyList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px 40px;

  max-height: 130px;
`

export const ScompanyListItem = styled.span<{
  color: string
}>`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  &:before {
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    background-color: ${({color}) => color};

    border-radius: 100%;
  }
`
