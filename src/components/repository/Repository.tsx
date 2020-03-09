import React from 'react';
import Card from 'react-bootstrap/Card';
import { IRepository } from '../../types';
import placeholder from '../../../public/images/placeholder.png';

interface IProps {
    repository: IRepository;
}

export const Repository: React.FC<IProps> = ({ repository }) => {
    return (
        <Card onClick={() => handleClick(repository.url)}>
            <Card.Img style={{ height: '20rem' }} variant="top" src={placeholder} />
            <Card.Body style={{ height: '15rem' }}>
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
