import React from 'react';
import './TextContent.css';
import ReactMarkdown from 'react-markdown';

class TextContent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const textValue = e.target.value;
        this.setState({
            text: textValue
        })
    }

    render() {
        return (
            <React.Fragment>                
                <div className="editorBox">
                    <h2 className="editorTitle">&#10002; Editor</h2>
        <textarea className="editor" onChange={this.handleChange} name="text" value={this.state.text} ></textarea>
                </div>
                <div className="editorBox">
                    <h2 className="editorTitle">&#10143; Previewer</h2>
                    <div className="editor text"><ReactMarkdown source={this.state.text} /></div>    
                </div>               
            </React.Fragment>
        );
    }
}

export default TextContent;