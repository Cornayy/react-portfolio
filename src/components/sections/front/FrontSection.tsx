import './style.scss';
import React, { FunctionComponent } from 'react';

export const FrontSection: FunctionComponent = () => {
    return (
        <section className="intro d-flex align-items-center">
            <div className="container text-center text-white left-side">
                <h1 className="intro-left">Hi, I'm</h1>
                <h1 className="intro-left intro-name">Corné Eggebeen.</h1>
            </div>
            <div className="container text-center right-side text-wrap ml-4">
                <h1 className="intro-right">
                    A developer who is interested in the latest technologies.
                </h1>
            </div>
        </section>
    );
};
