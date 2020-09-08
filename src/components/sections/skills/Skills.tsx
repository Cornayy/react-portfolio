import './style.scss';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Card } from 'react-bootstrap';
import { skills } from '../../../skills';
import { MasteryType } from '../../../types';
import { Skill } from '../../skill/Skill';

export const Skills: FunctionComponent = () => {
    return (
        <section className="skills-section">
            <div className="container-fluid skills text-center p-0 pb-5">
                <FontAwesomeIcon
                    className="inline mr-3"
                    title="Projects"
                    icon={faGraduationCap}
                    size="2x"
                    style={{ color: 'black' }}
                />
                <h1 className="pt-5 inline">Skills</h1>
                <hr />
                <Accordion className="text-center" defaultActiveKey="0">
                    <Card className="mx-auto mb-5">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Very Comfortable
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {skills
                                    .filter(({ mastery }) => mastery === MasteryType.HIGH)
                                    .map(skill => (
                                        <Skill key={skill.name} name={skill.name} />
                                    ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="mx-auto mb-5">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Fairly Comfortable
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {skills
                                    .filter(({ mastery }) => mastery === MasteryType.MEDIUM)
                                    .map(skill => (
                                        <Skill key={skill.name} name={skill.name} />
                                    ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="mx-auto">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Comfortable
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                {skills
                                    .filter(({ mastery }) => mastery === MasteryType.LOW)
                                    .map(skill => (
                                        <Skill key={skill.name} name={skill.name} />
                                    ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </section>
    );
};
