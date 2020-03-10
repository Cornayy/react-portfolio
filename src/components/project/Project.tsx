import './style.scss';
import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import { IProject } from '../../types';

interface IProps {
    project: IProject;
}

export const Project: FunctionComponent<IProps> = ({ project }) => {
    return (
        <Card onClick={() => handleClick(project.url)} style={{ width: '50rem', margin: '2rem' }}>
            <Card.Img src={project.image} />
            <Card.Footer
                style={{
                    background: 'rgba(39, 38, 38, 0.91)',
                    color: 'whitesmoke',
                    border: 'none',
                }}
            >
                <p>{project.name}</p>
            </Card.Footer>
        </Card>
    );
};

const handleClick = (location: string) => (window.location.href = location);
