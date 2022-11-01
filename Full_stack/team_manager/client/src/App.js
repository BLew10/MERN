import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Game from "./views/Game"
import Create from "./views/Create"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/players/" />
        <Route element={<Create />} path="/players/new" />
        <Route element={<Game />} path="/status/games/:id" />
      </Routes>
    </div>
  );
}
export default App;

