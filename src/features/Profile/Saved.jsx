import React from 'react';
import '../features.css';
import { Nav } from '../../Components';
import { Post } from '../index';
import { useSelector } from 'react-redux';

export function Saved() {

    const { user: { savedPosts } } = useSelector(state => state.userData);
    console.log({savedPosts});

    return (
        <>
            <Nav />
            <div className="page">
                {/* <Post /> */}
            </div>
        </>
    )
}
