
import './snippet.css';
import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import { parseCode } from './codeParseHelper';

class Snippet extends Component {
    constructor() {
        super();
        this.state = {
            code: parseCode(`paste your code here]`),
            description: '[enter your description here]',
            prefix: '[enter your prefix here]'
        }
        this.handleCopy = this.handleCopy.bind(this);
        this.handlePaste = this.handlePaste.bind(this);
    }
    

    handleClear(){
        this.setState({code: parseCode(`[paste your code here]`)});
    }

    handleChange(e, state) {
        this.setState({ state: e.target.value });
    }

    handlePaste(e) {
        let clipboardData, pastedData;
        e.stopPropagation();
        e.preventDefault();

        // Get pasted data via clipboard API
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');

        this.setState({code: parseCode(pastedData)});
    }

    handleCopy() {
        var range = document.createRange();
        range.selectNode(document.getElementById("snippet-output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
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

