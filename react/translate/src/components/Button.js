import React, { Component } from 'react';
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';

class Button extends Component {
    render() {
        return (
            <ColorContext.Consumer>
                {color => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) =>
                                language === 'english' ? 'submit' : 'voorleggen'
                            }
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
