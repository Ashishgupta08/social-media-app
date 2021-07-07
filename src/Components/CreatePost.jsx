import React from 'react';
import { newPost, imgUpload } from '../Icons';

export function CreatePost() {
    return (
        <>
            <div className="nav-theme flex flex-col rounded-xl my-2 md:max-w-2xl md:my-6">
                <div className="pt-2 px-4">
                    <p className="flex flex-row items-center">
                        <span className="nav-items text-base rounded-full p-2 new-post mr-2">{newPost}</span>
                        <span className="text-base secondary-text">Create Post</span>
                    </p>
                </div>
                <div className="pt-2 px-4">
                    <textarea placeholder="What's on your mind?" className="search px-4 py-2 rounded-lg w-full outline-none h-24" />
                </div>
                <div className="px-6 flex justify-between items-center pb-2">
                    <label className="cursor-pointer">
                        <input type="file" id="image" name="image" accept="image/*" hidden />
                        <span className="text-green-500 text-2xl">{imgUpload}</span>
                    </label>
                    <button className="border rounded-xl outline-none px-6 my-2 logout">Post</button>
                </div>
            </div>
        </>
    )
}
