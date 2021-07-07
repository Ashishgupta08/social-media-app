import React from 'react';
import './page.css';
import { Nav } from '../Components';

export function Profile() {
    return (
        <>
            <Nav />
            <div className="page profile">
                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <h1 className="font-normal text-2xl mb-4">Profile Details</h1>
                    <div className="flex flex-col relative mb-12">
                        <div 
                            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/15/07/55/feedback-1825508_960_720.jpg")'}} 
                            className="h-32 w-auto rounded-md bg-cover bg-no-repeat bg-center md:h-52"
                        ></div>
                        <div className="absolute -bottom-8 left-8 md:left-20">
                            <img className="avtaar h-16 w-auto border border-gray-100 bg-green-200 md:h-24" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                        </div>
                    </div>
                    <div className="text-right">
                        <fieldset className="border px-3 pb-2 mb-4 text-left">
                            <legend className="px-1">Name</legend>
                            <label className="px-2 detail-label">Lorem Ipsum</label>
                        </fieldset>
                        <fieldset className="border px-3 pb-2 mb-4 text-left">
                            <legend className="px-1">UserName</legend>
                            <label className="px-2 detail-label">lorem_ispum</label>
                        </fieldset>
                        <fieldset className="border px-3 pb-2 mb-4 text-left">
                            <legend className="px-1">E-Mail</legend>
                            <label className="px-2 detail-label">LoremIpsum@gmail.com</label>
                        </fieldset>
                        <button className="my-1 border rounded-xl outline-none px-6 py-2 logout md:hidden">LogOut</button>
                    </div>
                </div>
            </div>
        </>
    )
}
