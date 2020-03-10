import './style.scss';
import React, { FunctionComponent } from 'react';
import { Project } from '../../project/Project';
import { projects } from '../../../projects';

export const Projects: FunctionComponent = () => {
    return (
        <section className="projects-section">
            <div className="container-fluid projects text-center">
                <h1 className="pt-5">Projects</h1>
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
