import React from 'react';
import './page.css';
import { Nav } from '../Components';
import { search } from "../Icons";

export function Search() {
    return (
        <>
            <Nav />
            <div className="page">
                <div className="search-page self-center flex items-center rounded-2xl py-1 px-4 mr-6 w-full">
                    <label htmlFor="search" className="inline-flex self-center">
                        {search}
                    </label>
                    <input className="py-1 text-sm self-center bg-transparent outline-none pl-4" type="text" placeholder="Start typing to search" />
                </div>
                <h1 className="pt-2">Search Page</h1>
            </div>
        </>
    )
}
