import './style.scss';
import React, { useState, useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';
import { IProject } from '../../../types';

export const Work: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/cornayy/repos')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                // tslint:disable-next-line: no-console
                console.log(`Github data could not be retrieved, error: ${error}.`);
            });
    }, []);

    return (
        <div className="container-fluid work text-center">
            <h1 className="pt-5">My Work</h1>
            <hr />
            <p>Check Out My Projects On GitHub!</p>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div className="projects">
                    <CardGroup></CardGroup>
                </div>
            )}
        </div>
    );
};
