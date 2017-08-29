import React from 'react';
import './copyButton.css';

export const ClearButton = ({ clearHandler })=>{
    return <button className='btn btn-default btn-circle btn-lg transparent'
    onClick={clearHandler}
    style={{position: "absolute",
            right: '20px',
            top: '20px'}}>
        <i className="fa fa-times" aria-hidden="true"></i>
        </button>
}