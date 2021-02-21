import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddSong from './AddSong';
import Home from './Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SongDetails from './SongDetails';
import firebase from '../firebase';
import { useEffect, useState } from 'react';


function App() {

  const [songs, setSongs] = useState(null);
  // const [ref, setRef] = useState(firebase.firestore().collection("songs"));

  const songsRef = firebase.firestore().collection("songs");

  useEffect(() => {

    songsRef.onSnapshot(function (snapshotData) {
      let songsArray = [];
      snapshotData.forEach(function (doc) {
        let song = doc.data();
        song.id = doc.id;
        songsArray.push(song);
      });
      setSongs(songsArray);
    });
  }, [])

  return (

    <Router>
      <div className="App">
        <Navbar />
        <Sidebar songs={songs} />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/addsong'>
              <AddSong songsRef={songsRef} />
            </Route>
            <Route path='/songs/:id'>
              <SongDetails songsRef={songsRef} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
