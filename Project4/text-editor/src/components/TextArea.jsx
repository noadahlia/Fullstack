import React, { Component } from 'react';
import "./styles.css";

class TextArea extends Component {
    
    render() { 
        return (<div className="text-input" contentEditable="true"></div>);
    }
}
 
export default TextArea;