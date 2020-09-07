import './style.scss';
import React, { FunctionComponent } from 'react';
import { Project } from '../../project/Project';
import { projects } from '../../../projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export const Projects: FunctionComponent = () => {
    return (
        <section className="projects-section">
            <div className="container-fluid projects text-center">
                <FontAwesomeIcon
                    className="inline mr-3"
                    title="Projects"
                    icon={faBookmark}
                    size="2x"
                    style={{ color: 'black' }}
                />
                <h1 className="pt-5 inline">Projects</h1>
                <hr />
                <div className="row justify-content-center mt-5">
                    {projects.map(project => (
                        <Project key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
