export interface HomeType {
  homePlanId: number
  name: string
  numBeds: number
  numBaths: number
  sqft: number
  tags: string[]
  description: string
  image: string
}

export interface LotType {
  lotId: number
  address: string
  acres: number
  description: string
  image: string
}
