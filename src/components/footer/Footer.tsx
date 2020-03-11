import './style.scss';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer: FunctionComponent = () => {
    return (
        <footer className="page-footer font-small">
            <div className="container-fluid light-dark">
                <div className="row text-center">
                    <div className="col-xl-12 py-5 mt-5">
                        <div className="mb-5 flex-center">
                            <a
                                className="contact-icon mr-md-5 mr-3"
                                href="https://github.com/Cornayy"
                            >
                                <FontAwesomeIcon
                                    title="GitHub"
                                    icon={faGithub}
                                    size="2x"
                                    style={{ color: 'white' }}
                                />
                            </a>
                            <a
                                className="contact-icon mr-md-5 mr-3"
                                href="mailto:corneeggebeen@outlook.com"
                            >
                                <FontAwesomeIcon
                                    title="Mail"
                                    icon={faMailBulk}
                                    size="2x"
                                    style={{ color: 'white' }}
                                />
                            </a>
                            <a
                                className="contact-icon mr-md-5 mr-3"
                                href="https://www.linkedin.com/in/corn%C3%A9-eggebeen-970058146/"
                                title="LinkedIn"
                            >
                                <FontAwesomeIcon
                                    title="LinkedIn"
                                    icon={faLinkedin}
                                    size="2x"
                                    style={{ color: 'white' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center p-4 dark">
                <p className="mt-5 footer-text">
                    Copyright © {new Date().getFullYear()} | <b>Corné Eggebeen</b>
                </p>
            </div>
        </footer>
    );
};
