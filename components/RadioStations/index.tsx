import Head from 'next/head'
import { FC, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { RadioWithId } from '../../types/Radio'
import {
  BackButton,
  PowerButton,
  StationDetails,
  StationLisHead,
  StationList,
  StationListBody,
  StationListItem,
  StationListStatusFooter,
  StationListWrap,
  StationName
} from './styles'


interface Props {
  radiosObject: {
    [key:number]: RadioWithId
  }
}

const RadioStations: FC<Props> = ({ radiosObject }) => {
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
                    <StationName>
                      <span>{name}</span>
                      <strong>{frequency}</strong>
                    </StationName>
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

export default RadioStations
