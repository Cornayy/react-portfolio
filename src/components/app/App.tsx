import './style.css';
import './general.scss';
import React from 'react';
import { FrontSection } from '../sections/front/FrontSection';
import { NavigationBar } from '../navigation/NavigationBar';
import { About } from '../sections/about/About';
import { Work } from '../sections/work/Work';

export const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBar />
            <FrontSection />
            <About />
            <Work />
        </div>
    );
};
