import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Spent from '../Spent/Spent';
import Bookmark from '../Bookmark/Bookmark';

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
    // event handler for bookmark tab button
    const clickBookMark = () => {

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
                
                <Bookmark> </Bookmark>


            </div>
        </div>

    );
};

export default Blogs