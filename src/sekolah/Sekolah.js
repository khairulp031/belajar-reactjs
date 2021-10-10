import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom"
import Smp from './pages/Smp'
import Sma from './pages/Sma'

function Sekolah() {
  let match = useRouteMatch();
  return (
    <>
      <h1>Sekolah</h1>
        <header>
          <nav>
            <ul>
              <li>
                <Link to={`${match.url}/smp`}>SMP</Link>
              </li>
              <li>
                <Link to={`${match.url}/sma`}>SMA</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path={`${match.path}/smp`}>
              <Smp />
            </Route>
            <Route path={`${match.path}/sma`} children={<Sma />} />
            <Redirect to={`${match.path}/smp`} />
          </Switch>
        </main>
    </>
  );
}

export default Sekolah;
