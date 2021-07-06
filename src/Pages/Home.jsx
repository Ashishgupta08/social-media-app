import React from 'react';
import './page.css';
import { Nav } from '../Components';

export function Home() {
    return (
        <>
            <Nav />
            <div className="page">
                <h1>Home Page</h1>
            </div>
        </>
    )
}
