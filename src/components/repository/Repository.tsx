import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import { IRepository } from '../../types';
import placeholder from '../../static/placeholder.png';

interface IProps {
    repository: IRepository;
}

export const Repository: FunctionComponent<IProps> = ({ repository }) => {
    return (
        <Card className="mb-4" onClick={() => handleClick(repository.url)}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={placeholder} />
            <Card.Body style={{ height: '10rem' }}>
                <Card.Title>{repository.name}</Card.Title>
                <Card.Text>{repository.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{repository.language}</small>
            </Card.Footer>
        </Card>
    );
};

const handleClick = (location: string) => (window.location.href = location);
