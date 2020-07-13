import React from 'react';
import Store from '../Store/Store'
import './TextContent.css';

class TextContent extends React.Component {
    constructor(props) {
        super(props);
        const store = Store.map(store => store );
        this.state = {
            text: store
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
                    <textarea className="editor" onChange={this.handleChange} name="text" value={this.state.text}></textarea>
                </div>
                <div className="editorBox">
                    <h2 className="editorTitle">&#10143; Previewer</h2>
                    <p className="editor text" ><pre>{this.state.text}</pre></p>    
                </div>               
            </React.Fragment>
        );
    }
}

export default TextContent;