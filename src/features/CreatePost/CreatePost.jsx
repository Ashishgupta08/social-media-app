import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectStorage } from '../../Firebase/config';
import { newPost, imgUpload } from '../../Icons';
import { addCaption, addImage, postUpload } from './createPostSlice';

export function CreatePost() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.createPost)
    const auth = useSelector((state) => state.auth);


    function uploadImg(e) {
        let selected = e.target.files[0];
        const storageRef = projectStorage.ref(selected.name);
        storageRef.put(selected).on(
            "state.changed",
            (snap) => {
                let percenatge = (snap.bytesTransferred / snap.totalBytes) * 100;
                console.log(percenatge);
            },
            (e) => {
                console.log(e);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                dispatch(addImage(url))
            }
        );
    }

    const postUpdate = () => {
        if (data.image === "" && data.caption === "") {
            return console.log("Either give some text or image to upload.")
        } else if (data.caption === "") {
            dispatch(postUpload({ token :auth.token, post: { image: data.image }}))
        } else if (data.image === "") {
            dispatch(postUpload({ token :auth.token, post: { caption: data.caption }}))
        } else {
            dispatch(postUpload({ token :auth.token, post: { caption: data.caption, image: data.image }}))
        }
    }

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
                    <textarea onChange={(e) => { dispatch(addCaption(e.target.value)) }} placeholder="What's on your mind?" className="search px-4 py-2 rounded-lg w-full outline-none h-24" />
                </div>
                <div className="px-6 flex justify-between items-center pb-2">
                    <label className="cursor-pointer">
                        <input onChange={uploadImg} type="file" id="image" name="image" accept="image/*" hidden />
                        <span className="text-green-500 text-2xl">{imgUpload}</span>
                    </label>
                    <button className="border rounded-xl outline-none px-6 my-2 logout" onClick={() => { postUpdate() }}>Post</button>
                </div>
            </div>
        </>
    )
}
