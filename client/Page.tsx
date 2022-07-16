import {useQuery} from '@apollo/client'
import styled from 'styled-components'
import {GET_COMPANIES, CompanyType} from '@client/graphql'
import {CompaniesBySector} from './sections/companiesBySector/CompaniesBySector'
import {CompaniesByInvestmentSize} from './sections/companiesByInvestmentSize/CompaniesByInvestmentSize'
import {CompaniesOverview} from './sections/companiesOverview/CompaniesOverview'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const LoadingDiv = styled.div`
  text-align: center;
`

const Section = styled.div`
  margin-bottom: 60px;
`

export function Page() {
  const {loading, error, data} = useQuery<{companies: CompanyType[]}>(
    GET_COMPANIES
  )

  if (loading) {
    return <LoadingDiv>Loading data...</LoadingDiv>
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    )
  }

  const companies = data?.companies

  return (
    <Container>
      <Section>
        <CompaniesBySector companies={companies} />
      </Section>

      <Section>
        <CompaniesByInvestmentSize companies={companies} />
      </Section>

      <Section>
        <CompaniesOverview companies={companies} />
      </Section>
    </Container>
  )
}

export default Page
