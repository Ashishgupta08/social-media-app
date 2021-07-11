import React from 'react';
import '../features.css';
import { Nav, Post } from '../../Components';
import { CreatePost } from '../index';

export function Home() {
    return (
        <>
            <Nav />
            <div className="page">
                <CreatePost />
                <Post saved={false} />
            </div>
        </>
    )
}
