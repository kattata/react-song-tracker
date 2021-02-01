import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SongDetails from './SongDetails';


function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path='/songs/:id'>
              <SongDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
