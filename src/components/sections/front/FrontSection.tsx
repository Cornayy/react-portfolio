import './style.scss';
import React, { FunctionComponent } from 'react';

export const FrontSection: FunctionComponent = () => {
    return (
        <section className="intro d-flex align-items-center">
            <div className="container text-center text-white left-side">
                <h1 className="intro-left intro-name">Corné.</h1>
            </div>
            <div className="container text-center right-side text-wrap ml-4">
                <h1 className="intro-right">Student | Developer.</h1>
            </div>
        </section>
    );
};
