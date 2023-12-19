import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type singleBlogProps = {
    blog: {
        id: number,
        description: string,
        title: string,
        cover: string,
        author: string
    }
}

const SingleBlog:React.FC<singleBlogProps> = ({blog}) => {
    const navigate = useNavigate();
    const Blogonclick=()=>{
        console.log('Btn clicked');
        // <Link to='/details'></Link>
        navigate(`/details/${blog.id}`)
    }
    return (
        <div  className="card" key={blog.id}>
            <img onClick={Blogonclick} src={blog.cover} alt="" />
            <div className="details">
                <h2> {blog.title}</h2>
                <h4>Author: {blog.author}</h4>
            </div>
        </div>

    );
};

export default SingleBlog;