import { Document } from 'mongoose';

export interface IFilm extends Document {
    readonly id?: string;
    readonly id_element: number;
    readonly type: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly actors: string;
    readonly mp4: string;
    readonly likes: number;
    readonly poster: string;
    readonly date: Date;
}