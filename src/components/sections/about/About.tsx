import './style.scss';
import React, { FunctionComponent } from 'react';

export const About: FunctionComponent = () => {
    return (
        <section className="about-section" id="about">
            <div className="container-fluid about-me text-center">
                <h1 className="pt-5">About Me</h1>
                <hr />
                <p>
                    I am Corné Eggebeen, currently studying Informatics / Software Engineering at
                    Avans University of Applied Sciences.
                </p>
                <p>Have a look at my work and contact me if you are interested.</p>
            </div>
        </section>
    );
};
