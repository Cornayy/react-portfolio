import './style.scss';
import React, { FunctionComponent } from 'react';

export const About: FunctionComponent = () => {
    return (
        <section className="about-section" id="about">
            <div className="container-fluid about-me text-center">
                <h1 className="pt-5">About</h1>
                <hr />
                <div className="p-5 w-50 mx-auto">
                    <p>
                        I'm Corné, currently studying Informatics and majoring in Software
                        Engineering at Avans University of Applied Sciences. Interested in the
                        latest technologies and always eager to learn more.
                    </p>
                </div>
            </div>
        </section>
    );
};
