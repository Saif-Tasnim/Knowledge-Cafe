import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className='blogs-bookmark'>

            <div className='blogs-container'>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            b={blog}
                        ></Blog>
                    )
                }
            </div>

            <div className='bookmark'>

            </div>
        </div>

    );
};

export default Blogs