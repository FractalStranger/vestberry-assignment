import {AddNewCompanyModal} from '@client/components/addNewCompanyModal/AddNewCompanyModal'
import {Button} from '@client/components/button/Button'
import {DataTable} from '@client/components/dataTable/DataTable'
import {useModal} from '@client/components/modal/Model.utils'
import {CompanyType} from '@client/graphql'
import {SWrapper} from './CompaniesOverview.styled'

interface Props {
  companies?: CompanyType[]
}

export function CompaniesOverview({companies}: Props) {
  const {openModal} = useModal()
  const handleModal = () =>
    openModal({
      content: <AddNewCompanyModal />,
    })

  return (
    <div>
      <h2>Companies overview</h2>
      <SWrapper>
        <DataTable
          columns={['Company name', 'stage', 'sector', 'investment size']}
          data={companies?.map((company) => [
            company.name,
            company.stage,
            company.sector,
            `${company.investmentSize} EUR`,
          ])}
          spacing={[20, 15, 15, 50]}
        />
        <Button type="button" onClick={handleModal}>
          Add new company
        </Button>
      </SWrapper>
    </div>
  )
}
