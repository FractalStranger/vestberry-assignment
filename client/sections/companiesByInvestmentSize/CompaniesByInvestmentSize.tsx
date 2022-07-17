import {CompanyType} from '@client/graphql'
import theme from '@client/theme'
import {getRandomColor} from '@client/utils/randomColor'
import {PieChart} from 'react-minimal-pie-chart'
import {
  SChart,
  SCompanyList,
  ScompanyListItem,
  SQuantity,
  SQuantityCompanies,
  SQuantityCount,
  SWrapper,
} from './CompaniesByInvestmentSize.styled'

interface Props {
  companies?: CompanyType[]
}

export function CompaniesByInvestmentSize({companies}: Props) {
  const data = companies?.map((company, i) => ({
    title: company.name,
    value: company.investmentSize,
    color: theme.colors.chart[i] ?? getRandomColor(),
  }))
  return (
    <div>
      <h2>Companies by investment size</h2>

      <SWrapper>
        {companies?.length ? (
          <>
            <SChart>
              <PieChart data={data} lineWidth={28} />

              <SQuantity>
                <SQuantityCount>{companies?.length}</SQuantityCount>
                <SQuantityCompanies>
                  {companies?.length === 1 ? 'Company' : 'Companies'}
                </SQuantityCompanies>
              </SQuantity>
            </SChart>

            <SCompanyList>
              {companies?.map((company, i) => (
                <ScompanyListItem
                  key={company.id}
                  color={theme.colors.chart[i] ?? getRandomColor()}
                >
                  {company.name}
                </ScompanyListItem>
              ))}
            </SCompanyList>
          </>
        ) : (
          <h3>There are no companies</h3>
        )}
      </SWrapper>
    </div>
  )
}
