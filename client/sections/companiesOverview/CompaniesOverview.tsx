import {AddNewCompanyModal} from '@client/components/addNewCompanyModal/AddNewCompanyModal'
import {DataTable} from '@client/components/dataTable/DataTable'
import {ModalContext} from '@client/components/modal/ModalContext'
import {CompanyType} from '@client/graphql'
import {useContext} from 'react'
import {SWrapper} from './CompaniesOverview.styled'

interface Props {
  companies?: CompanyType[]
}

export function CompaniesOverview({companies}: Props) {
  const {openModal} = useContext(ModalContext)
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
        <button type="button" onClick={handleModal}>
          Add new company
        </button>
      </SWrapper>
    </div>
  )
}
