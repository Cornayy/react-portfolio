import React, { FunctionComponent } from 'react';
import './style.scss';

interface Props {
    name: string;
}

export const Skill: FunctionComponent<Props> = ({ name }: Props) => {
    return (
        <div>
            <p className="skill-description">{name}</p>
        </div>
    );
};
