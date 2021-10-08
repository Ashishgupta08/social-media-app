import React, { useEffect, useState } from 'react';
import '../features.css';
import { Nav } from '../../Components';
import { arrowUp, arrowDown } from '../../Icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileData } from './profileSlice';
import { setLogout } from '../Login/authSlice';


export function Profile() {

    const [view, setView] = useState({ profile: true, followers: false, following: false, posts: false });
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user._id === ""){
            (async function () {
                try {
                    dispatch(getProfileData(auth.token));
                } catch (error) {
                    console.log("error", error)
                }
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.token])


    const logout = () => {
        localStorage?.removeItem("login");
        dispatch(setLogout());
        navigate('/login')
    }


    return (
        <>
            <Nav />
            <div className="page">
                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center" onClick={() => { setView(view => { return ({ ...view, profile: !view.profile }) }) }}>
                        <h1 className="font-normal text-xl">Profile Details</h1>
                        <p className="align-middle cursor-pointer" >
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
                                    style={{ backgroundImage: `url("${user.coverImg}")` }}
                                    className="h-32 w-auto rounded-md bg-cover bg-no-repeat bg-center md:h-52"
                                ></div>
                                <div className="absolute -bottom-8 left-8 md:left-20">
                                    <img className="avtaar w-16 h-16 border border-gray-100 bg-green-200 md:h-24 md:w-24" src={user.profileImg} alt="user" />
                                </div>
                            </div>
                            <div className="my-4 px-4">
                                <ul className="list-none flex flex-row justify-around">
                                    <li>15</li>
                                    <li>{user.followers.length}</li>
                                    <li>{user.following.length}</li>
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
                                    <label className="px-2 detail-label">{user.name}</label>
                                </fieldset>
                                <fieldset className="border px-3 pb-2 mb-4 text-left">
                                    <legend className="px-1">UserName</legend>
                                    <label className="px-2 detail-label">{user.username}</label>
                                </fieldset>
                                <fieldset className="border px-3 pb-2 mb-4 text-left">
                                    <legend className="px-1">E-Mail</legend>
                                    <label className="px-2 detail-label">{user.email}</label>
                                </fieldset>
                                <button className="my-1 border rounded-xl outline-none px-6 py-2 logout md:hidden" onClick={() => { logout() }}>
                                    LogOut
                                </button>
                            </div>
                        </>
                    }
                </div>

                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center" onClick={() => { setView(view => { return ({ ...view, followers: !view.followers }) }) }}>
                        <h1 className="font-normal text-xl">Followers</h1>
                        <p className="align-middle cursor-pointer">
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
                                {   
                                    user.followers.map(item => {
                                        return (
                                            <li key={item._id}>{item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>

                <div className="nav-theme px-4 py-2 rounded-lg mx-auto my-8 md:mr-40">
                    <div className="flex justify-between items-center" onClick={() => { setView(view => { return ({ ...view, following: !view.following }) }) }}>
                        <h1 className="font-normal text-xl">Following</h1>
                        <p className="align-middle cursor-pointer">
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
                                {   
                                    user.following.map(item => {
                                        return (
                                            <li key={item._id}>{item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>
            
            </div>
        </>
    )
}
