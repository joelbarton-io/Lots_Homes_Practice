import { useSearch } from 'wouter'
import { Context } from './ContextProvider'
import { useContext } from 'react'
// type ModalProps = {}

const Modal = () => {
  const { homes, lots } = useContext(Context)
  const queryString = useSearch()
  //   const category = queryString.split('=')[0]
  //   const id = queryString.split('=')[1]
  //   const modalProperty = category === 'home' ? homes.filter((home) => home.homePlanId === id) : lots.filter((lot) => lot.lotId === id)

  /* 
  - use the state of the url to determine modal content display (t/f)
  */
  /* 
  contentComponent 

  // parse string
  // determine if it's a home or a lot
  // get the home or lot and conditionally render the content into the return value of Modal
  // tap into getCombinations state
  // tap in to the global state based on the homePlanId
  // create the dynamic content (via tsx) for the modal

  // click out of the modal
  // clickable favorite button 
  // 
  
  */

  return (
    <div id="modal-container">
      {!queryString ? null : (
        <>
          <div className="screen"></div>
          <div id="modal">
            <div className="modalContainer">
              <div className="selectedCardContainer">
                <div className="modalImageContainer">
                  <img
                    src="https://storage.googleapis.com/home_plan_images/70660mk_0.jpg"
                    alt="the-medita"
                  />
                </div>
                <div className="modalInformationContainer">
                  <div className="homeInfoContainer">
                    <h3>The Medita</h3>
                    <p id="homeDetails">4 beds - 4 baths - 4,300 sqft</p>
                    <div className="tagsContainer">
                      <p className="tags">master on main</p>
                      <p className="tags">patio</p>
                    </div>
                    <p className="description">
                      The Medita is a spacious model featuring an open floor
                      plan and spacious foyer. You'll feel like you blend in
                      with your surroundings when you're at home. The plan comes
                      with 3 different layout options on the first floor, and an
                      optional patio addition.
                    </p>
                  </div>
                  <div>
                    <button className="favoriteButton highlighted">
                      <img src="heart.png" alt="heart icon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="compatibleOptionsContainer">
                <div id="compatibleOptionsTitle">
                  <p>Compatible Lots</p>
                </div>
                <div className="compatibleOptionsList">
                  <a href="/lots?selectedLot=123-example-ln">
                    <div className="cardContainer">
                      <div className="cardImageContainer">
                        <img
                          src="https://storage.googleapis.com/plot_images/1018314458"
                          alt="123-example-ln"
                        />
                        <div>
                          <button className="favoriteButton" id="false">
                            <img src="heart.png" alt="heart icon" />
                          </button>
                        </div>
                      </div>
                      <div className="lotInfoContainer">
                        <h2>123 Example Ln</h2>
                        <p id="cityState">Charlotte, NC</p>
                        <p id="acreage">1.6 acres - 69,696 sqft</p>
                        <p className="lotDescription">
                          This sprawling lot is located on the outskirts of
                          Charlotte, with nearby boat access to Example Lake and
                          a straight shot to downtown Charlotte via Example
                          Highway.
                        </p>
                      </div>
                    </div>{' '}
                  </a>
                  <a href="/lots?selectedLot=123-sample-ln">
                    <div className="cardContainer">
                      <div className="cardImageContainer">
                        <img
                          src="https://storage.googleapis.com/plot_images/1018937216"
                          alt="123-sample-ln"
                        />
                        <div>
                          <button className="favoriteButton">
                            <img src="heart.png" alt="heart icon" />
                          </button>
                        </div>
                      </div>
                      <div className="lotInfoContainer">
                        <h2>123 Sample Ln</h2>
                        <p id="cityState">Raleigh, NC</p>
                        <p id="acreage">0.7 acres - 30,492 sqft</p>
                        <p className="lotDescription">
                          This spacious lot is in the gorgeous Example
                          Neighborhood, surrounded by historic landmarks such as
                          The Cool Things Museum and The Very Old House.
                        </p>
                      </div>
                    </div>{' '}
                  </a>
                  <a href="/lots?selectedLot=123-test-ct">
                    <div className="cardContainer">
                      <div className="cardImageContainer">
                        <img
                          src="https://storage.googleapis.com/plot_images/1043665691"
                          alt="123-test-ct"
                        />
                        <div>
                          <button className="favoriteButton highlighted">
                            <img src="heart.png" alt="heart icon" />
                          </button>
                        </div>
                      </div>
                      <div className="lotInfoContainer">
                        <h2>123 Test Ct</h2>
                        <p id="cityState">Charlotte, NC</p>
                        <p id="acreage">0.28 acres - 12,197 sqft</p>
                        <p className="lotDescription">
                          This cozy lot is directly next to downtown Charlotte -
                          from your front yard you can walk to uptown. Be sure
                          to check out The Average Bowling Alley or one of the
                          plenty of restaurants nearby!
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Modal
