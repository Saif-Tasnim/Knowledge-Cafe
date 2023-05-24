import React from 'react';
import '../Mark/Mark.css';

const Mark = (props) => {
    // console.log(props.m);
    return (
        <div className='mark-body'>
            <h3> {props.title} </h3>
            
        </div>
    );
};

export default Mark;