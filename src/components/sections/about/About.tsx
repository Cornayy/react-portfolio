import './style.scss';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export const About: FunctionComponent = () => {
    return (
        <section className="about-section" id="about">
            <div className="container-fluid about-me text-center">
                <FontAwesomeIcon
                    className="inline mr-3"
                    title="About"
                    icon={faUser}
                    size="2x"
                    style={{ color: 'white' }}
                />
                <h1 className="pt-5 inline">About</h1>
                <hr />
                <div className="about-text mx-auto">
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
