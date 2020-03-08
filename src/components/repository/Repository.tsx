import React from 'react';
import Card from 'react-bootstrap/Card';

export interface IProps {
    name: string;
    description: string;
    language: string;
    image: string;
}

export const Repository: React.FC<IProps> = ({ name, description, language, image }) => {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Written in: {language}.</small>
            </Card.Footer>
        </Card>
    );
};
