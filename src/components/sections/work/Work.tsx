import './style.scss';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from 'react-bootstrap/Spinner';
import React, { useState, useEffect, FunctionComponent } from 'react';
import { IRepository } from '../../../types';
import { Repository } from '../../repository/Repository';

export const Work: FunctionComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<IRepository[]>([]);

    const getConverted = (data: any): IRepository[] => {
        return data.slice(0, 6).map((project: any) => {
            return {
                name: project.name,
                language: project.language,
                description: project.description,
                url: project.html_url,
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
                console.log(`Github data could not be retrieved, error: ${err}.`);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="work-section" id="my-work-section">
            <div className="container-fluid work text-center pb-5">
                <h1 className="pt-5">My Work</h1>
                <hr />
                <p className="pb-5">Check Out My Projects On GitHub!</p>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ) : (
                    <CardColumns>
                        {projects.map(project => (
                            <Repository key={project.name} repository={project} />
                        ))}
                    </CardColumns>
                )}
            </div>
        </section>
    );
};
