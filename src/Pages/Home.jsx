import React from 'react';
import './page.css';
import { Nav, Post, CreatePost } from '../Components';

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
