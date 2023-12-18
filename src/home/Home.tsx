import React from 'react';
import './home.css'
import Blog from '../blog/Blog';

const Home = () => {
    return (
        <div className='App'>
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li>Javascript</li>
                    <li>Next-Js</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                    <li>Nodejs</li>
                </ul>
            </div>
            <Blog/>
        </div>
    );
};

export default Home;