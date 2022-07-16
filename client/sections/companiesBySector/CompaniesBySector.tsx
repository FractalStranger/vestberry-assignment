import {CompanyType} from '@client/graphql'
import {ReactComponent as FintechIcon} from '@assets/sectors/fintech.svg'
import {ReactComponent as InsuretechIcon} from '@assets/sectors/insuretech.svg'
import {ReactComponent as RoboadvisoryIcon} from '@assets/sectors/roboadvisory.svg'
import {ReactComponent as IOTIcon} from '@assets/sectors/iot.svg'
import {CompaniesBySectorSectorItem} from './sectorItem/CompaniesBySectorSectorItem'
import {SWrapper} from './CompaniesBySector.styled'

type Sector = 'Fintech' | 'IOT' | 'Roboadvisory' | 'Insuretech'

const sectors: Sector[] = ['Fintech', 'Insuretech', 'Roboadvisory', 'IOT']

interface Props {
  companies?: CompanyType[]
}

export function CompaniesBySector({companies}: Props) {
  const renderIcon = (sector: Sector) => {
    switch (sector) {
      case 'Fintech':
        return <FintechIcon />
      case 'IOT':
        return <IOTIcon />
      case 'Roboadvisory':
        return <RoboadvisoryIcon />
      case 'Insuretech':
        return <InsuretechIcon />
      default:
        return null
    }
  }
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
            icon={renderIcon(sector)}
          />
        ))}
      </SWrapper>
    </div>
  )
}
