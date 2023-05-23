import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Spent from '../Spent/Spent';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const [read, setRead] = useState([]);

    // event handler for mark as read
    const handleBookMark = (detail) => {
        const newRead = [...read, detail];
        setRead(newRead);

    }

    return (
        <div className='blogs-bookmark'>

            <div className='blogs-container'>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            b={blog}
                            f={handleBookMark}
                        ></Blog>
                    )
                }
            </div>

            <div className='bookmark-time'>

                <Spent
                    read={read}
                ></Spent>

            </div>
        </div>

    );
};

export default Blogs