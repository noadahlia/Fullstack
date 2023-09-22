import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faEraser, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFont: 'Arial',
            isBold: false,
            isItalic: false,
            selectedFontSize: '12px',
            isUppercase: false,
            selectedColor: '#ffffff',
            history: [],
            historyIndex: 0,
        };
    }

    handleFontChange = (event) => {
        const selectedFont = event.target.value;
        this.setState({ selectedFont }, () => {
            this.applyStyleToTextArea('font-family', selectedFont);
            this.saveToHistory();
        });
    };

    handleBoldText = () => {
        this.setState((prevState) => ({ isBold: !prevState.isBold }), () => {
            this.applyStyleToTextArea('font-weight', this.state.isBold ? 'normal' : 'bold');
            this.saveToHistory();
        });
    };

    handleItalicText = () => {
        this.setState((prevState) => ({ isItalic: !prevState.isItalic }), () => {
            this.applyStyleToTextArea('font-style', this.state.isItalic ? 'normal' : 'italic');
            this.saveToHistory();
        });
    };

    handleFontSizeChange = (event) => {
        const selectedFontSize = event.target.value;
        this.setState({ selectedFontSize }, () => {
            this.applyStyleToTextArea('font-size', selectedFontSize);
            this.saveToHistory();
        });
    };

    handleFontCase = () => {
        this.setState((prevState) => ({ isUppercase: !prevState.isUppercase }), () => {
            this.applyFontCase();
            this.saveToHistory();
        });
    };

    handleColorChange = (event) => {
        const selectedColor = event.target.value;
        this.setState({ selectedColor }, () => {
            this.applyStyleToTextArea('color', selectedColor);
            this.saveToHistory();
        });
    };

    handleClearAll = () => {
        const textArea = document.querySelector('.text-input');
        textArea.textContent = '';
        this.saveToHistory();
    };

    handleUndo = () => {
        const { history, historyIndex } = this.state;

        if (historyIndex > 0) {
            const prevHistoryIndex = historyIndex - 1;
            const prevState = history[prevHistoryIndex];
            const textArea = document.querySelector('.text-input');
            textArea.innerHTML = prevState.content;

            for (const style in prevState.styles) {
                textArea.style[style] = prevState.styles[style];
            }

            this.setState({ historyIndex: prevHistoryIndex });
        }
    };

    handleRedo = () => {
        const { history, historyIndex } = this.state;

        if (historyIndex < history.length - 1) {
            const nextHistoryIndex = historyIndex + 1;
            const nextState = history[nextHistoryIndex];
            const textArea = document.querySelector('.text-input');
            textArea.innerHTML = nextState.content;

            for (const style in nextState.styles) {
                textArea.style[style] = nextState.styles[style];
            }
            this.setState({ historyIndex: nextHistoryIndex });
        }
    };

    saveToHistory = () => {
        const textArea = document.querySelector('.text-input');
        const content = textArea.innerHTML;
        const styles = {
            fontFamily: textArea.style['font-family'],
            fontWeight: textArea.style['font-weight'],
            fontStyle: textArea.style['font-style'],
            fontSize: textArea.style['font-size'],
            color: textArea.style['color'],
        };

        const { history, historyIndex } = this.state;

        // Truncate history after the current index
        const newHistory = history.slice(0, historyIndex + 1);

        this.setState({
            history: [...newHistory, { content, styles }],
            historyIndex: historyIndex + 1,
        });
    };

    applyStyleToTextArea = (style, value) => {
        const textArea = document.querySelector('.text-input');
        textArea.style[style] = value;
    };

    applyFontCase = () => {
        const textArea = document.querySelector('.text-input');
        const content = textArea.textContent;
        textArea.textContent = this.state.isUppercase ? content.toUpperCase() : content.toLowerCase();
    };

    render() {
        const { isBold, isItalic, isUppercase, selectedColor } = this.state;

        return (
            <div className="options">
                <select className="options-select" onChange={this.handleFontChange}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <button className={`options-button ${isBold ? 'active' : ''}`} onClick={this.handleBoldText}>
                    <FontAwesomeIcon icon={faBold} />
                </button>
                <button className={`options-button ${isItalic ? 'active' : ''}`} onClick={this.handleItalicText}>
                    <FontAwesomeIcon icon={faItalic} />
                </button>
                <select className="options-select" onChange={this.handleFontSizeChange}>
                    <option value="12px">12</option>
                    <option value="14px">14</option>
                    <option value="16px">16</option>
                    <option value="18px">18</option>
                    <option value="20px">20</option>
                    <option value="24px">24</option>
                </select>
                <button className={`options-button ${isUppercase ? 'active' : ''}`} onClick={this.handleFontCase}>
                    Aa
                </button>
                <input
                    type="color"
                    className="color-input rounded-color-input"
                    value={selectedColor}
                    onChange={this.handleColorChange}
                />
                <button className="options-button" onClick={this.handleClearAll}>
                    <FontAwesomeIcon icon={faEraser} />
                </button>
                <button className="options-button" onClick={this.handleUndo}>
                    <FontAwesomeIcon icon={faUndo} />
                </button>
                <button className="options-button" onClick={this.handleRedo}>
                    <FontAwesomeIcon icon={faRedo} />
                </button>
            </div>
        );
    }
}

export default Options;
