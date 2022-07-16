import {CompanyType} from '@client/graphql'
import {SWrapper} from './CompaniesBySector.styled'
import {CompaniesBySectorSectorItem} from './sectorItem/CompaniesBySectorSectorItem'

const sectors = ['Fintech', 'IOT', 'Roboadvisory', 'Insuretech']

interface Props {
  companies?: CompanyType[]
}

export function CompaniesBySector({companies}: Props) {
  return (
    <div>
      <h2>Companies by sectors</h2>
      <SWrapper>
        {sectors.map((sector) => (
          <CompaniesBySectorSectorItem
            key={sector}
            label={sector}
            quantity={
              companies?.filter((company) => company.sector === sector)
                .length ?? 0
            }
          />
        ))}
      </SWrapper>
    </div>
  )
}
