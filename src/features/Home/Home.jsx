import React, { useEffect, useState } from 'react';
import '../features.css';
import { Nav } from '../../Components';
import { CreatePost, Post } from '../index';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeData } from './homeSlice';

export function Home() {

    const { feed } = useSelector(state => state.homeData);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [post, setPost] = useState([]);

    useEffect(()=>{
        if(feed.length === 0){
            (async function () {
                try {
                    dispatch(getHomeData(auth.token));
                } catch (error) {
                    console.log("error", error)
                }
            })()
        }
        feed.forEach(user => {
            user.posts.forEach(post => {
                setPost(val => [ ...val, { ...post, user: user.postedBy, isLiked: false, isSaved: false }])})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[feed])

    return (
        <>
            <Nav />
            <div className="page">
                <CreatePost />
                {
                    post.map(item => <Post saved={false} data={item} key={item._id} />)
                }
            </div>
        </>
    )
}
