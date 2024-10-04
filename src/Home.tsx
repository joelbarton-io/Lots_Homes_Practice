import { Link } from 'wouter'
import { HomeType } from './types'

interface HomeProps {
  home: HomeType
}

const Home = ({ home }: HomeProps) => {
  return (
    <Link href={`/homes?home=${home.homePlanId}`}>
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img
            src={home.image}
            alt={home.name.toLowerCase().replace(/ /g, '-')}
          />
          <div>
            <button className="favoriteButton">
              <img src="heart.png" alt="heart icon" />
            </button>
          </div>
        </div>
        <div className="homeInfoContainer">
          <h3>{home.name}</h3>
          <p id="homeDetails">
            {home.numBeds} beds - {home.numBaths} baths -{' '}
            {home.sqft.toLocaleString()} sqft
          </p>
          <div className="tagsContainer">
            {home.tags.length !== 0 ? (
              home.tags.map((tag) => (
                <p key={tag} className="tags">
                  {tag}
                </p>
              ))
            ) : (
              <div className="noTags"></div>
            )}
          </div>
          <p className="description">{home.description}</p>
        </div>
      </div>
    </Link>
  )
}
export default Home
