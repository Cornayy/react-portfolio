import React from 'react';
import './App.css';
import { Hello } from '../src/components/Hello';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Hello text="Hello World" />
        </div>
    );
};
