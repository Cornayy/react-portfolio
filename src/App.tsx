import React from 'react';
import './styles/App.css';
import './styles/General.scss';
import { FrontSection } from '../src/components/FrontSection';
import { NavigationBar } from './components/NavigationBar';

export const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBar />
            <FrontSection />
        </div>
    );
};
