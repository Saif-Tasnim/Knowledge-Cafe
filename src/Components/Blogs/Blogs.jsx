import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Spent from '../Spent/Spent';
import Bookmark from '../Bookmark/Bookmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const [bookMark, setBookMark] = useState([]);

    useEffect(() => {
        const storedMark = getStoredMark();

        setBookMark(storedMark);
        // console.log(storedMark);

    }, []);

    // event handler for bookmark tab button

    const clickBookMark = (detail) => {
        let newArray = [];

        const exist = bookMark.find(bm => bm.id === detail.id);

        if (exist) {
            toast('🦄 You Have Already Bookmarked This Blog!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // ob[detail.id] = detail.blog_title;
            // newArray = [...bookMark, ob];

            // const { id, blog_title } = detail;
            // newArray = [...bookMark, { id, blog_title }]
        }

        else {
            toast('🦄 Congo !!! You Have added this in Bookmark first time!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            //  newArray = [...bookMark, detail];

            //   ob[detail.id] = detail.blog_title;
            //   newArray = [...bookMark, ob];


        }

        const { id, blog_title } = detail;
        newArray = [...bookMark, { id, blog_title }]
        setBookMark(newArray);

        localStorage.setItem("book-mark", JSON.stringify(newArray));


    }

    const getStoredMark = () => {
        let storedMark = [];
        const store = localStorage.getItem("book-mark");

        if (store) {
            storedMark = JSON.parse(store);
        }

        return storedMark;

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
                            f2={clickBookMark}
                        ></Blog>
                    )
                }
            </div>

            <div className='bookmark-time'>

                <Spent
                    read={read}
                ></Spent>

                <Bookmark
                    l={bookMark.length}
                    b = {bookMark}
                > </Bookmark>
            </div>
        </div>

    );
};

export default Blogs