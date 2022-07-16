import {
  REQUIRED_ERROR_MESSAGE,
  NOT_A_NUMBER_ERROR_MESSAGE,
  TOO_LONG_NUMBER,
} from '@client/constants/validation'
import {ChangeEvent} from 'react'
import {useController, useFormState} from 'react-hook-form'
import {Label, SInput, Error, Suffix, InputWrapper} from './Input.styled'

interface Props {
  name: string
  label: string
  required?: boolean
  type?: HTMLInputElement['type']
  className?: string
  placeholder?: string
  suffix?: string
}

export function Input({
  name,
  label,
  required,
  type,
  className,
  placeholder,
  suffix,
}: Props) {
  const {
    field: {value, onChange},
  } = useController({
    name,
    rules: {
      required: required ? REQUIRED_ERROR_MESSAGE : undefined,
      validate: {
        isNumber: (val) =>
          type === 'number' ? val > 0 || NOT_A_NUMBER_ERROR_MESSAGE : true,
        // GraphQL API doesn't want too long integers, whatever
        numberTooLong: (val) =>
          type === 'number' ? val.length < 10 || TOO_LONG_NUMBER : true,
      },
    },
  })

  const {errors} = useFormState()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      return onChange(e.target.value.replace(/\D/, ''))
    }
    return onChange(e.target.value)
  }

  return (
    <div className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        <SInput
          type="text"
          placeholder={placeholder}
          value={value || ''}
          onChange={handleChange}
        />
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputWrapper>
      {errors[name]?.message && <Error>{errors[name]?.message}</Error>}
    </div>
  )
}
