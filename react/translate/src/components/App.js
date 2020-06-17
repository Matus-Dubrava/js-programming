import React, { Component } from 'react';
import ColorContext from '../context/ColorContext';
import { LanguageStore } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="green">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
