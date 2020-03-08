import React from 'react';
import Card from 'react-bootstrap/Card';
import { IProject } from '../../types';

interface IProps {
    project: IProject;
}

export const Repository: React.FC<IProps> = ({ project }) => {
    return (
        <Card style={{ width: '35rem' }}>
            <Card.Img
                style={{ height: '20rem' }}
                variant="top"
                src={`/images/${project.language}.png`}
            />
            <Card.Body style={{ height: '15rem' }}>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{project.language}</small>
            </Card.Footer>
        </Card>
    );
};
