import {
  THead,
  THeadRow,
  TBody,
  TBodyRow,
  THeadCell,
  Table,
  TBodyCell,
} from './DataTable.styled'

interface Props {
  columns: string[]
  data?: (string | number)[][]
  spacing?: number[]
}

export function DataTable({columns, data, spacing}: Props) {
  return (
    <Table>
      <THead>
        <THeadRow>
          {columns.map((column) => (
            <THeadCell key={column}>{column}</THeadCell>
          ))}
        </THeadRow>
      </THead>
      <TBody>
        {data?.map((values) => (
          <TBodyRow key={`${values[0]}-${values[1]}`}>
            {values.map((val, i) => (
              <TBodyCell
                key={`${values[0]}-${values[1]}-${val}`}
                width={`${spacing?.[i]}%`}
              >
                {val}
              </TBodyCell>
            ))}
          </TBodyRow>
        )) ?? 'Currently no data'}
      </TBody>
    </Table>
  )
}
