import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from 'src/schemas/film.schema';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';


@Module({
    imports: [MongooseModule.forFeature([{
        name: "Films", schema: FilmSchema
    }])],
    controllers: [FilmsController],
    providers: [FilmsService]
})
export class FilmsModule {}
