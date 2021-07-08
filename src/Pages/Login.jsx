import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from "../Components";
import { google, mail, password } from '../Icons';

export function Login() {
    return (
        <>
            <Header search={false} />
            <div className="login-page min-h-screen">
                <div className="login-box py-4 flex flex-col items-center rounded-lg">
                    <h1 className="text-2xl mb-6 mt-2">Login into your account</h1>
                    <div className="login-field self-center flex items-center border rounded-sm py-1 px-4 mx-5 my-3">
                        <label htmlFor="mail" className="inline-flex self-center text-xl">
                            {mail}
                        </label>
                        <input className="py-1 text-sm self-center bg-transparent outline-none pl-4" type="mail" placeholder="Enter your email here" />
                    </div>
                    <div className="login-field self-center flex items-center border rounded-sm py-1 px-4 mx-5 my-3">
                        <label htmlFor="mail" className="inline-flex self-center text-xl">
                            {password}
                        </label>
                        <input className="py-1 text-sm self-center bg-transparent outline-none pl-4" type="password" placeholder="Enter your password here" />
                    </div>
                    <div className="flex items-center">
                        <button className="py-2 px-16 my-4 text-xl border rounded-xl outline-none logout">
                            <NavLink to='/'>Login</NavLink>
                        </button>
                    </div>
                    <p className="secondary-text mt-8">Continue with Google</p>
                    <div className="flex justify-between items-center logout rounded mb-8">
                        <span className="align-middle bg-white p-2 mx-2 text-base">{google}</span>
                        <span className="text-white mx-4 py-4">
                            <NavLink to='/'>Sign in with Google</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}