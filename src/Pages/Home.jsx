import React from 'react';
import './page.css';
import { Nav, Post } from '../Components';
import { CreatePost } from '../features';

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
