import React, { useEffect, useState } from 'react';
import '../Spent/Spent.css';

const Spent = (props) => {
    const read = props.read;
    let readTime = 0;

    // console.log(read);

    const prev = localStorage.getItem("time");

    if(prev){
        readTime += parseInt(prev);
        // console.log(readTime);
    }

    const len = read.length;
    // const lastValue = read[len-1];

    // console.log(lastValue);

     if(read[len-1]){
        readTime += read[len-1].Read_time;
        localStorage.setItem("time", readTime);
    }




    return (
        <div className='spent-time'>

            <h2> Spent Time On Read : {readTime} min </h2>

        </div>
    );
};

export default Spent;