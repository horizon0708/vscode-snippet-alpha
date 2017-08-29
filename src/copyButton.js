import React from 'react';
import './copyButton.css';

export const CopyButton = () => {
    const handleCopy = ()=> {
        var range = document.createRange();
        range.selectNode(document.getElementById("snippet-output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
    }

    return <button className='btn btn-default btn-circle btn-lg transparent'
    onClick={e=>handleCopy(e)}
    style={{position: "absolute",
            right: '20px',
            top: '80px'}}>
        <i className="fa fa-clipboard" aria-hidden="true"></i>
    </button> 
}