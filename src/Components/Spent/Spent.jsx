import React, { useEffect, useState } from 'react';
import '../Spent/Spent.css' ;

const Spent = (props) => {
    const read = props.read;
    let readTime = 0;


    for(const r of read){
        readTime+= parseInt(r.Read_time);
    }


   return (
        <div className='spent-time'>

            <h2> Spent Time On Read : {readTime} min </h2>

        </div>
    );
};

export default Spent;