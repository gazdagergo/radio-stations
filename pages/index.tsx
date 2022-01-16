import type { NextPage, InferGetStaticPropsType } from 'next'
import { nanoid } from 'nanoid/non-secure'
import Head from 'next/head'
import { useState } from 'react'
import { Container, Row, Card, Accordion } from 'react-bootstrap'
import styled from 'styled-components'
import Icons from '../components/Icons'

type Radio = {
  id?: string
  name: string
  frequency: number
  image: string
}

interface Props {
  radiosObject: {
    [key:number]: Radio
  }
}

const { Power, ChevronLeft } = Icons

const StationListWrap = styled(Card)`
  border-radius: var(--border-radius);
  box-shadow: 0 36px 24px -24px black;
`

const StationListBody = styled(Card.Body)`
  background: ${({ theme }) => theme.colors.secondaryBackground};
`

const StationLisHead = styled(Card.Header)`
  height: 75px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: .02rem;
  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.negativeText};
  `}

  &:first-child {
    border-radius: calc(var(--border-radius) - 1px) calc(var(--border-radius) - 1px) 0 0;
  }
`

const StationListStatusFooter = styled(Card.Footer)`
  height: 75px;
  background: ${({ theme }) => theme.colors.ternaryBackgrouond};
  display: flex;
  align-items:center;
  justify-content: flex-start;
  padding-top: 12px;
  flex-direction: column;

  &:last-child {
    border-radius: 0 0 calc(var(--border-radius) - 1px) calc(var(--border-radius) - 1px);
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-size: 1.4rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.negativeSecondaryText};
  }  
`

const BackButton = styled(ChevronLeft).attrs({ size: 25 })`
  path {
    stroke-width: .4;
    stroke-linecap: round;
    stroke: white;
  }
`

const PowerButton = styled(Power).attrs({ size: 25 })`
  margin-top: -4px;
  path {
    stroke-width: .4;
    stroke-linecap: round;
    stroke: white;
  }
`

const StationList = styled(Accordion)`
  border-radius: 0;
`

const StationListItem = styled(Accordion.Item)`
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.negativeSecondaryText}88;
  background: transparent;
  &.accordion-item:last-of-type {
    border-radius: 0;
  }
  &:last-child{
    border: none;
  }
  button:after {
    content: none;
  }
`

const StationName = styled(Accordion.Header)`
  .accordion-button {
    font-size: 1.4rem;
    background: none;
    color: ${({ theme }) => theme.colors.negativeSecondaryText};
  }
`

const StationDetails = styled(Accordion.Body)`

`


const Home: NextPage<Props> = ({ radiosObject }) => {
  const [activeStationKey, setActiveStationKey] = useState('')

  const handleListItemClick = (key: string) => {
    setActiveStationKey(prevKey => key === prevKey ? '' : key)
  }

  return (
    <Container className="md-container">
      <Head>
        <title>Teclead Radio</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Container>
          <Row className="justify-content-md-between">
            <StationListWrap>
              <StationLisHead>
                <BackButton />
                <span>Stations</span>
                <PowerButton />
              </StationLisHead>
              <StationListBody>
                <StationList activeKey={activeStationKey}>
                {Object.values(radiosObject).map(({ id, name, frequency, image }) => (
                  <StationListItem
                    key={id}
                    eventKey={id}
                    onClick={() => handleListItemClick(id)}
                  >
                    <StationDetails>
                      Putin FM Details
                    </StationDetails>
                    <StationName>{name}</StationName>
                  </StationListItem>
                ))}                  
                </StationList>
              </StationListBody>
              <StationListStatusFooter>
                <h2>Currently playing</h2>
                <p>
                  {radiosObject[activeStationKey]?.name}
                </p>
              </StationListStatusFooter>
            </StationListWrap>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch('https://jobapi.teclead-ventures.de/recruiting/radios')
  const { radios }: { radios: Radio[] } = await res.json()

  const radiosObject = radios.reduce((acc, radio) => {
    const id = nanoid()

    return {
      ...acc,
      [id]: {
        id,
        ...radio
      }
    }
}, {})

  return {
    props: {
      radiosObject,
    },
  }
}
