import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Profile, Saved, Search } from './Pages';
import { useDarkMode } from "./Contexts";

function App() {

  const { darkMode } = useDarkMode();

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/saved' element={<Saved />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;