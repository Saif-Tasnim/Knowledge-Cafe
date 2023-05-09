import React from 'react';
import './Blog.css';

const Blog = (props) => {
    console.log(props.blog);
    const {id, author_name , blog_title, Blog_cover_image, Author_image, Read_time, Publish_Date} = props.blog;
     
    return (
        <div>
            <h1>{author_name}</h1>
            <h1>{blog_title}</h1>
            <h1>{Read_time}</h1>
            <h1>{Publish_Date}</h1>

            <img src='{Blog_cover_image}'></img>
            <img src='{Author_image}'></img>
        </div>
    );
};

export default Blog;