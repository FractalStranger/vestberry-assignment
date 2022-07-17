import {useController, useFormState} from 'react-hook-form'
import {ReactComponent as Arrow} from '@assets/arrow.svg'
import {REQUIRED_ERROR_MESSAGE} from '@client/constants/validation'
import {Label, SSelect, Wrapper, IconWrapper, Error} from './Select.styled'

interface Props {
  name: string
  label: string
  options: {value: string; label: string}[]
  required?: boolean
  className?: string
  placeholder?: string
}

export function Select({
  name,
  label,
  options,
  required,
  className,
  placeholder,
}: Props) {
  const {
    field: {value, onChange},
  } = useController({
    name,
    rules: {required: required ? REQUIRED_ERROR_MESSAGE : undefined},
  })

  const {errors} = useFormState()

  return (
    <div className={className}>
      <Label>{label}</Label>
      <Wrapper>
        <SSelect
          value={value}
          onChange={onChange}
          defaultValue=""
          required={required}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SSelect>
        <IconWrapper>
          <Arrow />
        </IconWrapper>
      </Wrapper>
      {errors[name]?.message && <Error>{errors[name]?.message}</Error>}
    </div>
  )
}
