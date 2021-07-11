import React from 'react';
import '../features.css';
import { Nav, Post } from '../../Components';

export function Saved() {
    return (
        <>
            <Nav />
            <div className="page">
                <Post saved={true} />
            </div>
        </>
    )
}
