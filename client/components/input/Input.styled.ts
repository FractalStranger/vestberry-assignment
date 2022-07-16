import theme from '@client/theme'
import styled from 'styled-components'

export const Label = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 5px;
`

export const InputWrapper = styled.div`
  height: 42px;
  width: 100%;

  background-color: transparent;
  border: 1px solid ${theme.colors.grey};
  border-radius: 4px;

  display: flex;
`

export const SInput = styled.input`
  background-color: transparent;
  border: 0;

  height: 100%;
  width: 100%;
  padding: 0 15px;

  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: ${theme.colors.grey};

  &:focus {
    outline: none;
  }
`

export const Error = styled.div`
  color: ${theme.colors.error};

  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;
`

export const Suffix = styled.div`
  height: 100%;
  padding: 0 11px;

  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  justify-content: center;
`
