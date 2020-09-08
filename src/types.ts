export enum MasteryType {
    LOW,
    MEDIUM,
    HIGH,
}

export interface IRepository {
    name: string;
    description: string;
    language: string;
    url: string;
}

export interface IProject {
    url: string;
    name: string;
    image: string;
    description: string;
}

export interface ISkill {
    name: string;
    mastery: MasteryType;
}
