import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Row, Card, Button, Accordion } from 'react-bootstrap'
import styled from 'styled-components'

const StationListWrap = styled(Card)`
  border-radius: var(--border-radius);
`

const StationListBody = styled(Card.Body)`
  background: ${({ theme }) => theme.colors.secondaryBackground};
`

const StationLisHead = styled(Card.Header)`
  height: 80px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
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

const StationList = styled(Accordion)`
  border-radius: 0;
` 

const StationListItem = styled(Accordion.Item)`
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.negativeSecondaryText};
  background: transparent;
  &.accordion-item:last-of-type {
    border-radius: 0;
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
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Container>
          <Row className="justify-content-md-between">
            <StationListWrap>
              <StationLisHead>Stations</StationLisHead>
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
          </StationListWrap>

          </Row>
        </Container>
      </Container>
    </Container>
  )
}

export default Home
