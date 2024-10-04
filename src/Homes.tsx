import { Context } from './ContextProvider'
import { useContext } from 'react'
import { HomeType } from './types'
import Home from './Home'

// import styles from './Homes.module.css'

const Homes = () => {
  const { homes }: { homes: HomeType[] } = useContext(Context)

  return (
    <div className="homesListContainer">
      <button className="button">Show Saved Homes</button>
      <div className="homesList">
        {homes.map((home) => (
          <Home key={home.homePlanId} home={home} />
        ))}
      </div>
    </div>
  )
}

{
  /* <a href="./home-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/home_plan_images/70660mk_0.jpg"
                alt="the-medita"
              />
              <div>
                <button className="favoriteButton highlighted">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="homeInfoContainer">
              <h3>The Medita</h3>
              <p id="homeDetails">4 beds - 4 baths - 4,300 sqft</p>
              <div className="tagsContainer">
                <p className="tags">master on main</p>
                <p className="tags">patio</p>
              </div>
              <p className="description">
                The Medita is a spacious model featuring an open floor plan and
                spacious foyer. You’ll feel like you blend in with your
                surroundings when you’re at home. The plan comes with 3
                different layout options on the first floor, and an optional
                patio addition.
              </p>
            </div> */
}
{
  /* </div>{' '}
        </a>
        <a href="./home-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/home_plan_images/28935jj_0.jpg"
                alt="the-modesto"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="homeInfoContainer">
              <h3>The Modesto</h3>
              <p id="homeDetails">2 beds - 1 baths - 1,800 sqft</p>
              <div className="tagsContainer">
                <p className="tags">cozy space</p>
                <p className="tags">patio</p>
              </div>
              <p className="description">
                The Modesto is a cozy bungalow model guaranteed to be your happy
                place. The plan comes with 2 different layout options on the
                first floor, and an optional patio addition.
              </p>
            </div>
          </div>{' '}
        </a>
        <a href="./home-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/home_plan_images/90304pd_0.jpg"
                alt="the-gallago"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="homeInfoContainer">
              <h3>The Gallago</h3>
              <p id="homeDetails">4 beds - 3 baths - 2,100 sqft</p>
              <div className="tagsContainer">
                <p className="tags">low noise</p>
                <p className="tags">urban</p>
              </div>
              <p className="description">
                The Gallago is a space crafted to blend perfectly into an urban
                setting, with noise-reduction walls and modern touches that make
                city life a joy. The plan comes with 3 different layout options
                on the first floor.
              </p>
            </div>
          </div>{' '}
        </a>
        <a href="./home-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/home_plan_images/0837w_0.jpg"
                alt="the-altastone"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="homeInfoContainer">
              <h3>The Altastone</h3>
              <p id="homeDetails">3 beds - 2 baths - 2,300 sqft</p>
              <div className="tagsContainer">
                <div className="noTags"></div>
              </div>
              <p className="description">
                The Altastone is an adobe-inspired home designed with the dry
                desert in mind. Its unique architecture will keep the home cool
                during the day while providing plenty of natural light. The plan
                comes with a single layout with an optional patio.
              </p>
            </div>
          </div>
        </a>
      </div>*/
}
export default Homes
