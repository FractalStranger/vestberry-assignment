import theme from '@client/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  width: 15px;
  color: ${theme.colors.sectionbgLighter};
`

export const Label = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 5px;
`

export const SSelect = styled.select`
  height: 42px;
  width: 100%;
  padding: 0 15px;

  background-color: transparent;
  border: 1px solid ${theme.colors.grey};
  border-radius: 4px;

  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: ${theme.colors.grey};

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  option {
    color: ${theme.colors.black};
  }
`

export const Error = styled.div`
  color: ${theme.colors.error};

  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;
`
