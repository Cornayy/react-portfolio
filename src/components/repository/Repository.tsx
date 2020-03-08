import React from 'react';
import Card from 'react-bootstrap/Card';
import { IProject } from '../../types';

interface IProps {
    project: IProject;
}

export const Repository: React.FC<IProps> = ({ project }) => {
    return (
        <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Written in: {project.language}.</small>
            </Card.Footer>
        </Card>
    );
};
