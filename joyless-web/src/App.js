import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import useUrlState from '@ahooksjs/use-url-state'
import lunr from 'lunr';

import KThing from './components/KThing'

/**
 * 
 * @param {lunr.Index} idx 
 * @param {string} query 
 * @param {Array<Object>} things 
 * @returns {Array<Object>}
 */
function searchThings(idx, query, things) {
    if (!idx || !query) {
      return things;
    } else {
      try {
        const ids = idx.search(query).map(lunrResult => lunrResult.ref);
        const result = things.filter(thing => ids.includes(thing.id));
        return result;  
      } catch (e) {
        return things;
      }
    }
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const [things, setThings] = useState([]);
  const [lunrIndex, setLunrIndex] = useState(null);

  const [urlState, setUrlState] = useUrlState({q: ''});
  const query = urlState.q;

  useEffect(() => {
    async function fetchData() {
      const fetchedThings = await fetch('joyless.things.json').then(res => res.json());
      setThings(fetchedThings);
  
      const fetchedIndex = await fetch('joyless.lunr.json').then(res => res.json());
      const idx = lunr.Index.load(fetchedIndex);
      setLunrIndex(idx);
  
      setLoaded(true);
    }
    fetchData();
  }, []);

  const filteredThings = searchThings(lunrIndex, query, things);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kaito's Joyless junk</h1>
        <div className="searchbar">
            <input type="search" placeholder="Unicorn is:film opinion:liked opinion:loved"
                value={query}
                onChange={event => setUrlState({q: event.target.value})}
                />
        </div>
      </header>

      <main>
        {loaded? 
          <ul>
            {
              filteredThings.map(thing => <li key={thing.id}><KThing thing={thing}></KThing></li>)
            }
          </ul>
          :
          'Loading...'
        }
      </main>
    </div>
  );
}

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
