import './style.scss';
import React, { FunctionComponent } from 'react';
import { IProject } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    project: IProject;
}

export const Project: FunctionComponent<IProps> = ({ project }) => {
    return (
        <div className="project-item col-md-12 mb-5">
            <FontAwesomeIcon
                className="inline mr-3"
                title="Projects"
                icon={faLongArrowAltRight}
                size="2x"
                style={{ color: 'black' }}
            />
            <h3
                className="inline project-title"
                onClick={() => handleClick(project.url)}
                style={{ margin: '2rem' }}
            >
                {project.name}
            </h3>
            <p className="project-description">{project.description}</p>
            <hr className="project-end" />
        </div>
    );
};

const handleClick = (location: string) => (window.location.href = location);
