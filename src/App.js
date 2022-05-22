import React, { useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Route, Link } from 'wouter'


function App() {

/*   const [keyword, setKeyword] = useState('panda') */

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Gifs Pandas</Link>
        <Link to='/gif/peru'>Gifs Perú</Link>
        <Route component={ListOfGifs} path="/gif/:keyword"/>
{/*         <button onClick={() =>
        setKeyword('mapache')}>Cambiar keyword</button> */}
      </section>
    </div>
  );
}

export default App;
