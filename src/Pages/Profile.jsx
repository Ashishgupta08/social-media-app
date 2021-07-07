import React from 'react';
import './page.css';
import { Nav } from '../Components';

export function Profile() {
    return (
        <>
            <Nav />
            <div className="page">
                <h1 className="md:pt-4">Profile Page</h1>
            </div>
        </>
    )
}
