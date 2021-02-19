import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddSong from './AddSong';
import Home from './Home';
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
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/addsong'>
              <AddSong />
            </Route>
            <Route path='/songs/:id'>
              <SongDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
