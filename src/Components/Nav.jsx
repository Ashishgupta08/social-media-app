import React from 'react';
import './components.css';
import "../index.css";
import { NavLink } from "react-router-dom";
import { save, home, searchIcon, user, logout } from "../Icons";
import { Header } from './index';

export function Nav() {

    return (
        <>
            <Header search={true} />
            <div className="nav-theme hidden md:block pt-8 fixed top-14 flex-shrink-0 w-60 h-full overflow-hidden z-10">
                <ul className="list-none flex flex-col justify-between rounded-full">
                    <NavLink end to='/' activeClassName="active">
                        <li className="nav-items text-3xl ml-3 p-3 rounded-full inline-flex align-middle">{home}</li>
                        <span className="ml-4 text-xl">Home</span>
                    </NavLink>
                    <NavLink end to='/saved' activeClassName="active">
                        <li className="nav-items text-3xl ml-3 p-3 rounded-full inline-flex align-middle">{save}</li>
                        <span className="ml-4 text-xl">Saved Posts</span>
                    </NavLink>
                    <NavLink end to='/profile' activeClassName="active">
                        <li className="nav-items text-3xl ml-3 p-3 rounded-full inline-flex align-middle">{user}</li>
                        <span className="ml-4 text-xl">Profile</span>
                    </NavLink>
                    <NavLink end to='/login' activeClassName="active">
                        <li className="nav-items text-3xl ml-3 p-3 rounded-full inline-flex align-middle">{logout}</li>
                        <span className="ml-4 text-xl">LogOut</span>
                    </NavLink>
                </ul>
            </div>

            <div className="fixed bottom-0 w-full md:hidden">
                <ul className="nav-theme list-none flex justify-between rounded-full">
                    <NavLink end to='/' activeClassName="active">
                        <li className="nav-items text-4xl p-3 rounded-full">{home}</li>
                    </NavLink>
                    <NavLink end to='/search' activeClassName="active">
                        <li className="nav-items text-4xl p-3 rounded-full">{searchIcon}</li>
                    </NavLink>
                    <NavLink end to='/saved' activeClassName="active">
                        <li className="nav-items text-4xl p-3 rounded-full">{save}</li>
                    </NavLink>
                    <NavLink end to='/profile' activeClassName="active">
                        <li className="nav-items text-4xl p-3 rounded-full">{user}</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}
