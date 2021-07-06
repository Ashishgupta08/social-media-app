import React from 'react';
import './page.css';
import { Nav, Post } from '../Components';

export function Home() {
    return (
        <>
            <Nav />
            <div className="page">
                <Post />
            </div>
        </>
    )
}
