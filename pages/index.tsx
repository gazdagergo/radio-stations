import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Card, Accordion } from 'react-bootstrap'
import styled from 'styled-components'
import Icons from '../components/Icons'

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
  &:last-child {
    border-radius: 0 0 calc(var(--border-radius) - 1px) calc(var(--border-radius) - 1px);
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
    background: none;
    color: ${({ theme }) => theme.colors.negativeSecondaryText};
  }
`

const StationDetails = styled(Accordion.Body)`

`


const Home: NextPage = () => {
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
                <StationList defaultActiveKey="0">
                  <StationListItem eventKey="0">
                    <StationDetails>
                      Putin FM Details
                    </StationDetails>
                    <StationName>Putin FM</StationName>
                  </StationListItem>
    
                  <StationListItem eventKey="1">
                    <StationDetails>
                      Dribble FM Details
                    </StationDetails>
                    <StationName>Dribble FM</StationName>
                  </StationListItem>
    
                </StationList>
            </StationListBody>
            <StationListStatusFooter>
              Playing
            </StationListStatusFooter>
          </StationListWrap>

          </Row>
        </Container>
      </Container>
    </Container>
  )
}

export default Home
