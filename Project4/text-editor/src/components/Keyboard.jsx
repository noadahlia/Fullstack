import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace,faGlobe,faLock } from '@fortawesome/free-solid-svg-icons';


class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEnglish: true,
            isCapsLock:false,
        };
    }

    handleKeyClick = (key) => {
        const textArea = document.querySelector('.text-input');
        const currentContent = textArea.textContent;
        let updatedContent = currentContent;

        if (key === 'Delete') {
            updatedContent = currentContent.slice(0, -1);
        } else {
            updatedContent += key;
        }

        textArea.textContent = updatedContent;
    };
    toggleLanguage = () => {
        this.setState((prevState) => ({
            isEnglish: !prevState.isEnglish,
        }));
    };
    toggleCapsLock = () => {
        this.setState((prevState) => ({
            isCapsLock: !prevState.isCapsLock,
        }));
    };

    render() {

        const englishRows = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-'],
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','+'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';','"'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm',',','.','?','/'],
        ];

        const englishRowsCapital = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-'],
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','+'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',';','"'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M',',','.','?','/'],
        ];
        const hebrewRows = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-'],
            ['/', '\'', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ','+'],
            ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך',',','"'],
            ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ','ת','ץ','.',';'],
        ];
        const { isEnglish,isCapsLock } = this.state;
        const languageRows = !isCapsLock ? (isEnglish ? englishRows :hebrewRows ) : englishRowsCapital;


        return (
            <div className='virtual-keyboard' id="virtual-keyboard">
                {languageRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key) => (
                            <div key={key} className="keyboard-key" onClick={() => this.handleKeyClick(key)}>
                                {key}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="keyboard-row">
                    <div className="keyboard-key capslock-button" onClick={this.toggleCapsLock}>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <button className="keyboard-key language-toggle-button" onClick={this.toggleLanguage}>
                        <FontAwesomeIcon icon={faGlobe} />
                        {isEnglish ? 'HE' : 'EN'}
                    </button>
                    <div className="keyboard-key large-space" onClick={() => this.handleKeyClick(' ')}></div>
                    <div className="keyboard-key delete-button" onClick={() => this.handleKeyClick('Delete')}>
                        <FontAwesomeIcon icon={faBackspace} />
                    </div>
                     
                </div>
            </div>
        );
    }
}

export default Keyboard;
