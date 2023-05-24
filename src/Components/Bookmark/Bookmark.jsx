import React from 'react';
import '../Bookmark/Bookmark.css';
import Mark from '../Mark/Mark';

const Bookmark = (props) => {
    const l = props.l;
    const b = props.b;
    return (
        <div className='bookmark-container'>
            <h2>Bookmarked Blogs : {l > 0 ? l : 0} </h2>

            {
                b.map(mark => <Mark
                    key={mark.id}
                    title={mark.blog_title}
                ></Mark>)
            }
        </div>
    );
};

export default Bookmark;