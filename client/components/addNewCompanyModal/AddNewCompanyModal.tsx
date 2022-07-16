import {useMutation, useQuery} from '@apollo/client'
import {
  ADD_COMPANY,
  GET_COMPANIES,
  GET_SECTORS,
  GET_STAGES,
} from '@client/graphql'
import {FormProvider, useForm} from 'react-hook-form'
import {Button} from '../button/Button'
import {useModal} from '../modal/Model.utils'
import {
  Actions,
  Content,
  Description,
  Header,
  Headline,
  SInput,
  SSelect,
  Wrapper,
} from './AddNewCompanyModal.styled'

interface FormValues {
  companyName: string
  stage: string
  sector: string
  investmentSize: number
}

const mapStringsToOptions = (array?: string[]) =>
  array?.map((item) => ({value: item, label: item}))

export function AddNewCompanyModal() {
  const {closeModal} = useModal()

  const [addCompany, {loading}] = useMutation(ADD_COMPANY, {
    refetchQueries: [{query: GET_COMPANIES}, 'getCompanies'],
  })

  const {data: sectors} = useQuery<{sectors: string[]}>(GET_SECTORS)

  const {data: stages} = useQuery<{stages: string[]}>(GET_STAGES)

  const stagesOptions = mapStringsToOptions(stages?.stages)
  const sectorsOptions = mapStringsToOptions(sectors?.sectors)

  const form = useForm<FormValues>()

  const onSubmit = async (values: FormValues) => {
    try {
      await addCompany({
        variables: {
          name: values.companyName,
          stage: values.stage,
          sector: values.sector,
          investmentSize: Number(values.investmentSize),
        },
      })
      closeModal()
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error)
    }
  }

  return (
    <Wrapper>
      <Header>
        <Headline>Add new company</Headline>

        <Description>
          Add new company by filling all the required fields, select from lists
          and be carefull, because integer is limited and not everyone can
          handle that
        </Description>
      </Header>

      <Content>
        <FormProvider {...form}>
          {stagesOptions && sectorsOptions && (
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <SInput
                name="companyName"
                label="Company name"
                placeholder="Company name"
                required
              />

              <SSelect
                name="stage"
                label="Stage"
                options={stagesOptions}
                placeholder="Select stage from list"
                required
              />

              <SSelect
                name="sector"
                label="Sector"
                options={sectorsOptions}
                placeholder="Select sector from list"
                required
              />

              <SInput
                type="number"
                name="investmentSize"
                label="Investment size"
                suffix="EUR"
                required
              />

              <Actions>
                {loading ? (
                  'Loading'
                ) : (
                  <>
                    <Button type="submit" onClick={closeModal} textOnly>
                      Cancel
                    </Button>
                    <Button type="submit">Add company</Button>
                  </>
                )}
              </Actions>
            </form>
          )}
        </FormProvider>
      </Content>
    </Wrapper>
  )
}
