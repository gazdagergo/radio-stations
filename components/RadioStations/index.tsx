import Head from 'next/head'
import Image from 'next/image'
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
  StationName,
  RadioTeaser,
  VolumeControl,
  Up,
  Down,
} from './styles'


interface Props {
  radiosObject: {
    [key:number]: RadioWithId
  }
}

interface AccordionButton extends Element {
  type: string,
}

const RadioStations: FC<Props> = ({ radiosObject }) => {
  const [activeStationKey, setActiveStationKey] = useState('')

  
  const handleListItemClick = ({ target }:{ target: AccordionButton }, key: string) => {
    if (['STRONG', 'SPAN'].includes(target.tagName) || target.type === 'button'){
      setActiveStationKey(prevKey => key === prevKey ? '' : key)
    }
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
                    onClick={({ target }:{ target: AccordionButton }) => handleListItemClick({ target }, id)}
                  >
                    <StationDetails>
                      <VolumeControl>
                        <Down />
                      </VolumeControl>
                      <RadioTeaser>
                        <Image
                          alt="radio station image"
                          src={image}
                          width={120}
                          height={120}
                        />
                      </RadioTeaser>
                      <VolumeControl>
                        <Up />
                      </VolumeControl>
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
