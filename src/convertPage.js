import React, { Component } from 'react';
import Snippet from './snippet';
import { CopyButton } from './copyButton';

class ConvertPage extends Component {
    

    render(){
        return(
            <div className="row">
            <div className="col-xs-12 col-sm-3">
            </div>
            <div className="col-xs-12 col-sm-8">
            <Snippet />
            </div>
                <CopyButton />
            </div>
        );
    }
}
export default ConvertPage;



