// import './App.css'
import { Link, Route } from 'wouter'
import Homes from './Homes'
import Lots from './Lots'

/* 
Plan:
- sidenav with Home-plans & lots

- click on homeplans route... is a route to show all the home listings ... which has a feature of selecting to filter homes

Routes:
    - Homes
        - has home-modal visible when clicking specific home & url is modified to include query parameter: /homes?home=id
        - can exit modal by clicking on greyed out background behind modal display
        
    - Lots
        - has lot-modal visible when clicking specific lot & url is modified to include query parameter: /lots?lot=id
        - can exit modal by clicking on greyed out background behind modal display 
    
    (hearting functionality available in modal and list for each route)

    todo:
        - "favoriting" a lot or a home (api call)
        - viewing past favorites
        - modal functionality
        - some more extraction of components
        - ability to construct (related to the third prop on API)
*/

const MainNav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link href="/homes">Home Plans</Link>
        </li>
        <li>
          <Link href="/lots">Lots</Link>
        </li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div id="root">
      <MainNav />
      <Route path="/homes" component={Homes} />
      <Route path="/lots" component={Lots} />
      {/* nav back to mainNav absent any content */}
      {/* error route, with get back to home*/}
    </div>
  )
}

export default App
