export type Radio = {
  name: string
  frequency: number
  image: string
}

export interface RadioWithId extends Radio {
  id: string
}