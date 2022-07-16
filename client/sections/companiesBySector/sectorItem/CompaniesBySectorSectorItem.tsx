import {ReactNode} from 'react'
import {
  SIcon,
  SLabel,
  SQuantity,
  SWrapper,
} from './CompaniesBySectorSectorItem.styled'

interface Props {
  label: string
  quantity: number
  icon: ReactNode
}

export function CompaniesBySectorSectorItem({label, quantity, icon}: Props) {
  return (
    <SWrapper>
      <div>
        <SQuantity>{quantity}</SQuantity>
        <SLabel>{label}</SLabel>
      </div>
      <SIcon>{icon}</SIcon>
    </SWrapper>
  )
}
