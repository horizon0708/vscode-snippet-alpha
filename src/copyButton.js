import React from 'react';

export const CopyButton = () => {
    const handleCopy = ()=> {
        var range = document.createRange();
        range.selectNode(document.getElementById("snippet-output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
    }

    return <button className='btn'
    onClick={e=>handleCopy(e)}>
        Copy
    </button> 
}