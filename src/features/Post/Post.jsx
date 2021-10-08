import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../Components/components.css';
import { heartOutline, comment, bookmark, fillBookmark, heartFill } from '../../Icons';
import { increaseLike, decreaseLike } from './postSlice';

export function Post(props) {

    const { data } = props;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.userData);
    const [post, setPost] = useState(data)

    useEffect(()=>{
        if(user.likedPosts.includes(post._id)){
            setPost({ ...data, isLiked: true })
        }
        if(user.savedPosts.includes(post._id)){
            setPost({ ...data, isSaved: true })
        }
    },[])

    function likeHandler(postedBy, postId) {
        if (post.isLiked) {
            dispatch(decreaseLike({ token: auth.token, postedBy: postedBy, postId: postId }))
            setPost({ ...data, isLiked: false })
        } else {
            dispatch(increaseLike({ token: auth.token, postedBy: postedBy, postId: postId }))
            setPost({ ...data, isLiked: true })
        }
    }

    function saveHandler(postId) {
        if (post.isSaved) {
            // dispatch(decreaseLike({ token: auth.token, postId: postId }))
            setPost({ ...data, isSaved: false })
        } else {
            // dispatch(increaseLike({ token: auth.token, postId: postId }))
            setPost({ ...data, isSaved: true })
        }
    }

    return (
        <>
            <div className="nav-theme flex flex-col rounded-xl my-3 md:max-w-2xl md:my-6">
                <div className="flex align-middle mx-2 pt-4 md:mx-6 md:mt-4">
                    <img className="avtaar h-8 w-8 mx-2 md:h-12 md:w-12" src={post.user.profileImg} alt="user" />
                    <p className="self-center text-sm md:text-base">{post.user.name}</p>
                </div>
                <div className="flex flex-col mx-8 mt-4 text-justify md:mx-10 md:px-4">
                    {
                        post?.caption
                        &&
                        <p className="text-xs pb-1 md:text-sm">{post.caption}</p>
                    }
                    {
                        post?.image
                        &&
                        <img className="w-80 h-auto mx-auto mt-1 rounded-sm md:w-96" src={post.image} alt="img" />
                    }
                </div>
                <div className="flex justify-between mx-6 mt-2 md:mx-8 md:px-4">
                    <div className="flex">
                        {
                            post.isLiked
                                ? <span className="text-2xl mx-2 cursor-pointer md:text-3xl md:mx-4" onClick={() => { likeHandler(post.user._id, post._id) }}>{heartFill}</span>
                                : <span className="text-2xl mx-2 cursor-pointer md:text-3xl md:mx-4" onClick={() => { likeHandler(post.user._id, post._id) }}>{heartOutline}</span>
                        }
                        {/* <span className="text-2xl mx-2 cursor-pointer md:text-3xl md:mx-4">{comment}</span> */}
                    </div>
                    {
                        post.isSaved
                            ? <span className="text-2xl mx-2 cursor-pointer md:text-3xl md:mx-4" onClick={() => { saveHandler(post._id) }}>{fillBookmark}</span>
                            : <span className="text-2xl mx-2 cursor-pointer md:text-3xl md:mx-4" onClick={() => { saveHandler(post._id) }}>{bookmark}</span>
                    }
                </div>
                <p className="mx-10 my-1 text-xs mb-2 md:mx-16 md:px-2 secondary-text">{post.isLiked ? post.likes.length + 1 : post.likes.length} likes</p>
            </div>
        </>
    )
}
