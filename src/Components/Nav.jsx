import React from 'react';
import './components.css';
import "../index.css";
import { useDarkMode } from '../Contexts';
import { save, zap, home, search, user, light, dark } from "../Icons";
import { NavLink } from "react-router-dom";

export function Nav() {

    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <nav className="nav-theme fixed top-0 w-full m-0 p-0 flex justify-between items-center md:px-12 md:py-1">
                <h1 style={{ color: "#10D876" }} className="text-2xl ml-4 md:ml-0 md:text-5xl">
                    {zap}
                    <span className="logo font-extrabold tracking-wider md:text-4xl">
                        SOCIAL
                    </span>
                </h1>
                <div className="flex justify-between">
                    <button onClick={() => { setDarkMode(val => !val) }} className="cursor-pointer">
                        {
                            darkMode
                                ? <span className="text-4xl">{dark}</span>
                                : <span className="text-4xl">{light}</span>
                        }
                    </button>
                    <img className="avtaar h-12 w-auto mx-4 md:mx-12" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                </div>
            </nav>

            <div className="nav-theme hidden md:block pt-8 fixed top-14 flex-shrink-0 w-60 h-full overflow-hidden z-10">
                <ul className="list-none flex flex-col justify-between rounded-full">
                    <NavLink end to='/' activeClassName="active">
                        <li className="nav-items text-2xl ml-3 p-4 rounded-full inline-flex align-middle">{home}</li>
                        <span className="ml-4 text-xl">Home</span>
                    </NavLink>
                    <NavLink end to='/search' activeClassName="active">
                        <li className="nav-items text-2xl ml-3 p-4 rounded-full inline-flex align-middle">{search}</li>
                        <span className="ml-4 text-xl">Search</span>
                    </NavLink>
                    <NavLink end to='/saved' activeClassName="active">
                        <li className="nav-items text-2xl ml-3 p-4 rounded-full inline-flex align-middle">{save}</li>
                        <span className="ml-4 text-xl">Saved Posts</span>
                    </NavLink>
                    <NavLink end to='/profile' activeClassName="active">
                        <li className="nav-items text-2xl ml-3 p-4 rounded-full inline-flex align-middle">{user}</li>
                        <span className="ml-4 text-xl">Profile</span>
                    </NavLink>
                </ul>
            </div>

            <div className="fixed bottom-0 w-full md:hidden">
                <ul className="nav-theme list-none flex justify-between rounded-full">
                    <NavLink end to='/' activeClassName="active">
                        <li className="nav-items text-4xl p-4 rounded-full">{home}</li>
                    </NavLink>
                    <NavLink end to='/search' activeClassName="active">
                        <li className="nav-items text-4xl p-4 rounded-full">{search}</li>
                    </NavLink>
                    <NavLink end to='/saved' activeClassName="active">
                        <li className="nav-items text-4xl p-4 rounded-full">{save}</li>
                    </NavLink>
                    <NavLink end to='/profile' activeClassName="active">
                        <li className="nav-items text-4xl p-4 rounded-full">{user}</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}
