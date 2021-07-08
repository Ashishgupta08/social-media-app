import React from 'react';
import { useDarkMode } from '../Contexts';
import { zap, searchIcon, light, dark } from "../Icons";

export function Header(props) {

    const { darkMode, setDarkMode } = useDarkMode();
    const { search } = props;

    return (
        <>
            <nav className="nav-theme fixed top-0 w-full m-0 px-0 py-1 flex justify-between items-center z-10 md:px-12 md:py-1">
                <h1 className="ml-4">
                    <span className="logo font-extrabold tracking-wider text-xl md:text-4xl">
                        SOCIAL
                    </span>
                    <span style={{ color: "#10D876" }} className="text-2xl md:ml-0 md:text-5xl">{zap}</span>
                </h1>
                <div className="flex justify-between">
                    {
                        search && 
                        <div className="search hidden self-center md:flex items-center rounded-2xl py-1 px-4 mr-6">
                            <label htmlFor="search" className="inline-flex self-center">
                                {searchIcon}
                            </label>
                            <input className="py-1 text-sm self-center bg-transparent outline-none pl-4" type="text" placeholder="Start typing to search" />
                        </div>
                    }
                    <button onClick={() => { setDarkMode(val => !val) }} className="cursor-pointer mr-4">
                        {
                            darkMode
                                ? <span className="text-4xl">{dark}</span>
                                : <span className="text-4xl">{light}</span>
                        }
                    </button>
                    {/* <img className="avtaar h-12 w-auto mx-4 md:mx-6" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" /> */}
                </div>
            </nav>
        </>
    )
}
