import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

const Blog = (props) => {
    const { id, author_name, blog_title, Blog_cover_image, Author_image, Read_time, Publish_Date } = props.b;

    const handleBookMark = props.f;
    const clickBookMark = props.f2;


    return (

        <div className='blog'>
            {/* cover image */}
            <img src={Blog_cover_image} id="cover-image" alt="" />

            {/* body */}
            <div className='body'>
                {/* author intro */}
                <div className='intro'>
                    <div className='pic-name'>
                        <img src={Author_image} alt="" />
                        <div className='name'>
                            <h4> {author_name} </h4>
                            <p>{Publish_Date}</p>
                        </div>
                    </div>

                    <div className='reading'>
                        <span> {Read_time} min read</span> &nbsp;  <button onClick={()=>{clickBookMark(props.b)}} >

                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                        <ToastContainer />
                    </div>
                </div>

                {/* blog title */}
                <div className='title'>
                    <h1>{blog_title}</h1>
                </div>

                {/* #-trend */}

                <div className='hash-trend'>
                    <div># beginner</div>
                    <div># Programming</div>
                </div>

                {/* mark read */}
                
                <div className='mark-read' onClick={() => handleBookMark(props.b)}>
                    Mark as read
                </div>
            </div>


        </div>
    );
};

export default Blog;