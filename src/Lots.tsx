import { Context } from './ContextProvider'
import { useContext } from 'react'
import { LotType } from './types'

interface LotProps {
  lot: LotType
}

const Lot = ({ lot }: LotProps) => {
  const [street, city, state] = lot.address.split(',')

  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img src={lot.image} alt={street.replace(/ /g, '-')} />
        <div>
          <button className="favoriteButton">
            <img src="heart.png" alt="heart icon" />
          </button>
        </div>
      </div>
      <div className="lotInfoContainer">
        <h2>{street}</h2>
        <p id="cityState">
          {city}, {state}
        </p>
        <p id="acreage">
          {lot.acres} acres - {Math.round(lot.acres * 43560)} sqft
        </p>
        <p className="lotDescription">{lot.description}</p>
      </div>
    </div>
  )
}
const Lots = () => {
  const { lots }: { lots: LotType[] } = useContext(Context)

  return (
    <div className="lotsContainer">
      <button className="button">Show Saved Lots</button>

      <div className="lotsList">
        {lots.map((lot) => (
          <Lot key={lot.lotId} lot={lot} />
        ))}
      </div>
    </div>
  )
}

export default Lots
