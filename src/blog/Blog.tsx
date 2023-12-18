import React, { useEffect, useState } from 'react';
import './../App.css'
import blogdata from '../../public/blog.json';



const Blog = () => {
    type Blog ={
        id: number,
        title: string,
        cover: string,
        author: string
    }
    const [fakeDb,setFakeDb] = useState([]);
    
    useEffect(()=>{

        fetch('/public/blog.json').then(res=>res.json()).then(data=>setFakeDb(data))
    },[])
    return (
        <div className='container'>
            <div className='blog'>
            {fakeDb.map((blog: Blog)=>
            <div className="card" key={blog.id}>
            <img src={blog.cover} alt="" />
            <div className="details">
              <h2> {blog.title}</h2>
              <h4>Author: {blog.author}</h4>
              <button>Click</button>
            </div>
          </div>
            )}
            </div>
        </div>
    );
};

export default Blog;