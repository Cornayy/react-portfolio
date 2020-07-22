import './style.scss';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from 'react-bootstrap/Spinner';
import React, { useState, useEffect, FunctionComponent } from 'react';
import { IRepository } from '../../../types';
import { Repository } from '../../repository/Repository';

export const Work: FunctionComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<IRepository[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/cornayy/repos');
                const data = await response.json();
                const converted = data.slice(0, 6).map((project: any) => {
                    return {
                        name: project.name,
                        language: project.language,
                        description: project.description,
                        url: project.html_url,
                    };
                });

                setProjects(converted);
                setLoading(false);
            } catch (err) {
                console.log(`Github data could not be retrieved, error: ${err}.`);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="work-section" id="work">
            <div className="container-fluid work text-center pb-5">
                <h1 className="pt-5">My Work</h1>
                <hr />
                <p className="pb-5">Check out the projects I have done on GitHub!</p>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ) : (
                    <CardColumns style={{ padding: '100px' }}>
                        {projects.map(project => (
                            <Repository key={project.name} repository={project} />
                        ))}
                    </CardColumns>
                )}
            </div>
        </section>
    );
};
