import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Film extends Document {
    @Prop()
    title: String;
    @Prop()
    description: String;
    @Prop()
    category: String;
    @Prop()
    actors: String;
    @Prop()
    mp4: String;
    @Prop()
    likes: Number;
    @Prop()
    poster: String;
    @Prop({ default: new Date() })
    date: String;
}

export const FilmSchema = SchemaFactory.createForClass(Film);