
import './snippet.css';
import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import { parseCode } from './codeParseHelper';
import { CopyButton } from './copyButton';
import { ClearButton } from './clearButton';

class Snippet extends Component {
    constructor() {
        super();
        this.state = {
            code: parseCode(`[paste your code here]`),
            description: '[enter your description here]',
            prefix: '[enter your prefix here]'
        }
        this.handlePaste = this.handlePaste.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    
    handleClear(){
        console.log("a");
        this.setState({ code: parseCode(`[paste your code here]`)});
    }

    handleChange(e, state) {
        this.setState({ state: e.target.value });
    }

    handlePaste(e) {
        let clipboardData, pastedData;
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');
        if(pastedData.length > 10){
            e.stopPropagation();
            e.preventDefault();
            this.setState({code: parseCode(pastedData)});
        }
    }

    render() {

        const codeOutput = this.state.code ? this.state.code.map((x, i, arr) => {
            return <div key={i}>
                <ContentEditable
                    onPaste={this.handlePaste}
                    html={`&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-property">${this.state.code[i]}</span>${i < arr.length - 1 ? "," : ""}`} />
            </div>
        }) : null;

        return (
            <div id='snippet-box'>
                <ClearButton clearHandler={this.handleClear}/>
                <CopyButton />
                <div id='snippet-output'>
                    <div className="json-key">"{<ContentEditable
                        html={this.state.description}
                        onChange={e => this.handleChange(e, 'description')} />}"</div>: {`{`}
                    <div>&nbsp;&nbsp;
                        <div className="json-key">{`"prefix"`}</div>:
                        <div className="json-property">"{<ContentEditable html={this.state.prefix}
                            onChange={e => this.handleChange(e, 'prefix')} />}"</div>,
                    </div>
                    <div>&nbsp;&nbsp;
                        <div className="json-key">{`"body"`}</div>: [
                    </div>
                    {codeOutput}
                    &nbsp;&nbsp;{`]`}<br />
                    }
                </div>
            </div>
        );
    }
}
export default Snippet;


