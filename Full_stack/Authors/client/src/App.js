import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Update from "./views/Update"
import Create from "./views/Create"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/authors/" />
        <Route element={<Create />} path="/authors/new" />
        <Route element={<Update />} path="/authors/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

