import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login, Profile, Home, Saved, Search } from './features';
import { useDarkMode } from "./Contexts";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {

  const { darkMode } = useDarkMode();

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <PrivateRoute path='/' element={<Home />}></PrivateRoute>
        <PrivateRoute path='/profile' element={<Profile />}></PrivateRoute>
        <PrivateRoute path='/saved' element={<Saved />}></PrivateRoute>
        <PrivateRoute path='/search' element={<Search />}></PrivateRoute>
      </Routes>
    </div>
  );
}

export default App;