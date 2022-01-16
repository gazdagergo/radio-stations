import type { NextPage } from 'next'
import { nanoid } from 'nanoid/non-secure'
import RadioStations from '../components/RadioStations'
import { Radio, RadioWithId } from '../types/Radio'

interface RadioStationProps {
  radiosObject: {
    [key:number]: RadioWithId
  }
}

const Home: NextPage<RadioStationProps> = ({ radiosObject }) => {
  return (
    <RadioStations
      radiosObject={radiosObject}
    />
  )
}

export default Home

type GetRadioStationProps = () => Promise<{ props: RadioStationProps }>

export const getStaticProps:GetRadioStationProps = async () => {
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
