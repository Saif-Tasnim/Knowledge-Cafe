import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, author_name, blog_title, Blog_cover_image, Author_image, Read_time, Publish_Date } = props.b;

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
                        <span> {Read_time} read</span> &nbsp;  <button>
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
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
                <div className='mark-read'>
                    Mark as read
                </div>
            </div>


        </div>
    );
};

export default Blog;