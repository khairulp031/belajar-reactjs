import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import Beranda from '../beranda/Beranda'
import Pekerjaan from '../pekerjaan/Pekerjaan'
import Sekolah from '../sekolah/Sekolah'

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/sekolah">Sekolah</Link>
            </li>
            <li>
              <Link to="/pekerjaan">Pekerjaan</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/sekolah">
            <Sekolah />
          </Route>
          <Route path="/pekerjaan">
            <Pekerjaan />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
