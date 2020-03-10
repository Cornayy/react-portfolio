import './style.css';
import './general.scss';
import React, { FunctionComponent } from 'react';
import { FrontSection } from '../sections/front/FrontSection';
import { Navigation } from '../navigation/Navigation';
import { About } from '../sections/about/About';
import { Work } from '../sections/work/Work';
import { Projects } from '../sections/projects/Projects';
import { Footer } from '../footer/Footer';

export const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Navigation />
            <FrontSection />
            <About />
            <Work />
            <Projects />
            <Footer />
        </div>
    );
};
