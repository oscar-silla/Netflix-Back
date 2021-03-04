import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IReturn } from 'src/assets/i-return';
import { FilmDTO } from './film.DTO';
import { FilmsService } from './films.service';


@Controller('films')
export class FilmsController {

    constructor(private filmService : FilmsService) {}

    @Get()
    getFilms() : Promise<IReturn> {
        return this.filmService.getAll();
    }

    @Get('/:id')
    getFilm(@Param('id') id : string) : Promise<IReturn> {
        return this.filmService.getFilm(id);
    }

    @Post('/create')
    postFilm(@Body() film : FilmDTO) : Promise<IReturn> {
        return this.filmService.postFilm(film);
    }

    @Put('/update/:id')
    putFilm(@Body() film : FilmDTO, @Param('id') id : string) : Promise<IReturn> {
        return this.filmService.putFilm(film, id);
    }

    @Delete('/delete/:id')
    deleteFilm(@Param('id') id : string) : Promise<IReturn> {
        return this.filmService.deleteFilm(id);
    }
}
