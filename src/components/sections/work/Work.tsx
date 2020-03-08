import './style.scss';
import React, { useState, useEffect } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from 'react-bootstrap/Spinner';
import { IProject } from '../../../types';
import { Repository } from '../../repository/Repository';

export const Work: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<IProject[]>([]);

    const getConverted = (data: IProject[]): IProject[] => {
        return data.map(project => {
            return {
                name: project.name,
                language: project.language,
                description: project.description,
            };
        });
    };

    useEffect(() => {
        const fetchProjects = async (): Promise<void> => {
            try {
                const response = await fetch('https://api.github.com/users/cornayy/repos');
                const data = await response.json();
                const converted = getConverted(data);

                setProjects(converted);
                setLoading(false);
            } catch (err) {
                // tslint:disable-next-line: no-console
                console.log(`Github data could not be retrieved, error: ${err}.`);
            }
        };

        fetchProjects();
    // tslint:disable-next-line: align
    }, []);

    return (
        <div className="container-fluid work text-center">
            <h1 className="pt-5">My Work</h1>
            <hr />
            <p className="pb-5">Check Out My Projects On GitHub!</p>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div className="projects">
                    <CardColumns>
                        {projects.map(project => (
                            <Repository key={project.name} project={project} />
                        ))}
                    </CardColumns>
                </div>
            )}
        </div>
    );
};
