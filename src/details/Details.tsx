import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setblog] = useState<object>({});
    console.log(blog);
    // fetch Data On JSON FIle
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`/blog.json`)
                const data = await response.json();
                const selectedBlog = data.find((blog: any) => blog.id.toString() === id);
                setblog(selectedBlog)

            } catch (error) {
                console.log("Error when Fetcvhing")
            }
        }
        fetchDetails();
    },
     [id])
    return (
        <div>
            <h1>Welcome To Details Which Is title: {blog.title}</h1>
            <img src={blog.cover} alt="" />
            <p>Thank you </p>
            <Link to='/'>Back To Home</Link>
        </div>
    );
};

export default Details;