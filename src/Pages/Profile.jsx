import React, { useState } from 'react';
import './page.css';
import { Nav } from '../Components';
import { arrowUp, arrowDown } from '../Icons';

export function Profile() {

    const [view, setView] = useState({ profile: true, followers: false, following: false, posts: false })
    return (
        <>
            <Nav />
            <div className="page">
                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center">
                        <h1 className="font-normal text-xl">Profile Details</h1>
                        <p className="align-middle cursor-pointer" onClick={() => { setView(view => { return ({ ...view, profile: !view.profile }) }) }}>
                            {
                                view.profile
                                    ? arrowUp
                                    : arrowDown
                            }
                        </p>
                    </div>
                    {
                        view.profile &&
                        <>
                            <div className="flex flex-col relative mb-12 mt-2">
                                <div
                                    style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/15/07/55/feedback-1825508_960_720.jpg")' }}
                                    className="h-32 w-auto rounded-md bg-cover bg-no-repeat bg-center md:h-52"
                                ></div>
                                <div className="absolute -bottom-8 left-8 md:left-20">
                                    <img className="avtaar h-16 w-auto border border-gray-100 bg-green-200 md:h-24" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                                </div>
                            </div>
                            <div className="my-4 px-4">
                                <ul className="list-none flex flex-row justify-around">
                                    <li>15</li>
                                    <li>21</li>
                                    <li>10</li>
                                </ul>
                                <ul className="list-none flex flex-row justify-around secondary-text">
                                    <li>Posts</li>
                                    <li>Followers</li>
                                    <li>Following</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <fieldset className="border px-3 pb-2 mb-4 text-left">
                                    <legend className="px-1">Name</legend>
                                    <label className="px-2 detail-label">Lorem Ipsum</label>
                                </fieldset>
                                <fieldset className="border px-3 pb-2 mb-4 text-left">
                                    <legend className="px-1">E-Mail</legend>
                                    <label className="px-2 detail-label">LoremIpsum@gmail.com</label>
                                </fieldset>
                                <button className="my-1 border rounded-xl outline-none px-6 py-2 logout md:hidden">LogOut</button>
                            </div>
                        </>
                    }
                </div>

                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center">
                        <h1 className="font-normal text-xl">Followers</h1>
                        <p className="align-middle cursor-pointer" onClick={() => { setView(view => { return ({ ...view, followers: !view.followers }) }) }}>
                            {
                                view.followers
                                    ? arrowUp
                                    : arrowDown
                            }
                        </p>
                    </div>
                    {
                        view.followers &&
                        <div className="mt-2">
                            <ul>
                                <li>Demo - 1</li>
                                <li>Demo - 2</li>
                                <li>Demo - 3</li>
                                <li>Demo - 4</li>
                                <li>Demo - 5</li>
                            </ul>
                        </div>
                    }
                </div>

                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center">
                        <h1 className="font-normal text-xl">Following</h1>
                        <p className="align-middle cursor-pointer" onClick={() => { setView(view => { return ({ ...view, following: !view.following }) }) }}>
                            {
                                view.following
                                    ? arrowUp
                                    : arrowDown
                            }
                        </p>
                    </div>
                    {
                        view.following &&
                        <div className="mt-2">
                            <ul>
                                <li>Demo - 1</li>
                                <li>Demo - 2</li>
                                <li>Demo - 3</li>
                                <li>Demo - 4</li>
                                <li>Demo - 5</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
