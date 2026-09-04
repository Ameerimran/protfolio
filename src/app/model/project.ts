import { Tags } from './tags';

export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    tags: Tags[];
    projectUrl: string;
}