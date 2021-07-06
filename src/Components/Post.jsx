import React from 'react';
import './components.css';
import "../index.css";
import { heartOutline, comment, bookmark } from '../Icons';

export function Post() {
    return (
        <>
            <div className="nav-theme flex flex-col rounded-xl my-2 md:max-w-2xl md:my-4">
                <div className="flex align-middle mx-2 md:mx-6 md:mt-4">
                    <img className="avtaar h-10 w-auto md:h-16" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                    <p className="self-center text-sm md:text-base">Ashish Gupta</p>
                </div>
                <div className="flex flex-col mx-4 mt-2 text-justify md:mx-10 md:px-4">
                    <p className="text-xs pb-1 md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
                        Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
                    </p>
                    <img className="w-80 h-auto mx-auto mt-1 rounded-sm md:w-96" src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="post-img" />
                </div>
                <div className="flex justify-between mx-2 mt-1 md:mx-8 md:px-4">
                    <div className="flex">
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{heartOutline}</span>
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{comment}</span>
                    </div>
                    <span className="text-xl mx-2 md:text-3xl md:mx-4">{bookmark}</span>
                </div>
                <p className="mx-4 my-1 text-xs md:mx-16 secondary-text">12345 likes</p>
            </div>

            <div className="nav-theme flex flex-col rounded-xl my-2 md:max-w-2xl md:my-4">
                <div className="flex align-middle mx-2 md:mx-6 md:mt-4">
                    <img className="avtaar h-10 w-auto md:h-16" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                    <p className="self-center text-sm md:text-base">Ashish Gupta</p>
                </div>
                <div className="flex flex-col mx-4 mt-2 text-justify md:mx-10 md:px-4">
                    <p className="text-xs pb-1 md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
                        Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
                    </p>
                    {/* <img className="w-80 h-auto mx-auto mt-1 rounded-sm md:w-96" src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="post-img" /> */}
                </div>
                <div className="flex justify-between mx-2 mt-1 md:mx-8 md:px-4">
                    <div className="flex">
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{heartOutline}</span>
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{comment}</span>
                    </div>
                    <span className="text-xl mx-2 md:text-3xl md:mx-4">{bookmark}</span>
                </div>
                <p className="mx-4 my-1 text-xs md:mx-16 secondary-text">12345 likes</p>
            </div>

            <div className="nav-theme flex flex-col rounded-xl my-2 md:max-w-2xl md:my-4">
                <div className="flex align-middle mx-2 md:mx-6 md:mt-4">
                    <img className="avtaar h-10 w-auto md:h-16" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="user" />
                    <p className="self-center text-sm md:text-base">Ashish Gupta</p>
                </div>
                <div className="flex flex-col mx-4 mt-2 text-justify md:mx-10 md:px-4">
                    {/* <p className="text-xs pb-1 md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
                        Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
                    </p> */}
                    <img className="w-80 h-auto mx-auto mt-1 rounded-sm md:w-96" src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="post-img" />
                </div>
                <div className="flex justify-between mx-2 mt-1 md:mx-8 md:px-4">
                    <div className="flex">
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{heartOutline}</span>
                        <span className="text-xl mx-2 md:text-3xl md:mx-4">{comment}</span>
                    </div>
                    <span className="text-xl mx-2 md:text-3xl md:mx-4">{bookmark}</span>
                </div>
                <p className="mx-4 my-1 text-xs md:mx-16 secondary-text">12345 likes</p>
            </div>

        </>
    )
}
