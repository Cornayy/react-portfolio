import './style.scss';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer: FunctionComponent = () => {
    return (
        <footer className="page-footer font-small">
            <div className="container-fluid light-dark">
                <div className="row text-center"></div>
            </div>

            <div className="footer-copyright text-center p-4 dark">
                <div className="col-xl-12 mt-5">
                    <p className="mt-5 mb-5 footer-text">
                        Copyright © {new Date().getFullYear()} | <b>Corné Eggebeen</b>
                    </p>
                    <div className="mb-5 flex-center">
                        <a className="contact-icon" href="https://github.com/Cornayy">
                            <FontAwesomeIcon
                                title="GitHub"
                                icon={faGithub}
                                size="2x"
                                style={{ color: 'white' }}
                            />
                        </a>
                        <a className="contact-icon" href="mailto:corneeggebeen@outlook.com">
                            <FontAwesomeIcon
                                title="Mail"
                                icon={faEnvelope}
                                size="2x"
                                style={{ color: 'white' }}
                            />
                        </a>
                        <a
                            className="contact-icon"
                            href="https://www.linkedin.com/in/corn%C3%A9-eggebeen-970058146/"
                            title="LinkedIn"
                        >
                            <FontAwesomeIcon
                                title="LinkedIn"
                                icon={faLinkedinIn}
                                size="2x"
                                style={{ color: 'white' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
