import React from 'react';

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

    return (
        <div className="card" key={blog.id}>
            <img src={blog.cover} alt="" />
            <div className="details">
                <h2> {blog.title}</h2>
                <h4>Author: {blog.author}</h4>
            </div>
        </div>

    );
};

export default SingleBlog;