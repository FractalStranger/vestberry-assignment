import {SLabel, SQuantity, SWrapper} from './CompaniesBySectorSectorItem.styled'

interface Props {
  label: string
  quantity: number
}

export function CompaniesBySectorSectorItem({label, quantity}: Props) {
  return (
    <SWrapper>
      <div>
        <SQuantity>{quantity}</SQuantity>
        <SLabel>{label}</SLabel>
      </div>
      <div>icon</div>
    </SWrapper>
  )
}
