import theme from '@client/theme'
import styled from 'styled-components'
import {Input} from '../input/Input'
import {Select} from '../select/Select'

export const Wrapper = styled.div`
  width: 640px;
`

export const Header = styled.div`
  background-color: ${theme.colors.sectionbg};
  padding: 30px 40px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 58px;
`

export const Headline = styled.div`
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;

  margin-bottom: 5px;
`

export const Description = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: ${theme.colors.grey};
`

export const Content = styled.div`
  padding: 40px;
`

export const SInput = styled(Input)`
  margin-bottom: 20px;
`

export const SSelect = styled(Select)`
  margin-bottom: 20px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 10px;

  margin-top: 73px;
`

export const CloseIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  color: ${theme.colors.lightGrey};
  cursor: pointer;
`
