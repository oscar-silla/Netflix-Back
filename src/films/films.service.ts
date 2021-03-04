import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { IReturn } from 'src/assets/i-return';
import { FilmDTO } from './film.DTO';
import { IFilm } from './i-film';

@Injectable()
export class FilmsService {

    constructor(@InjectModel("Films") private filmModel: Model<IFilm>) { }

    /**
     * GET ALL
    */
    async getAll(): Promise<IReturn> {
        const promise = new Promise<IReturn>((resolve, reject) => {
            this.filmModel.find().exec().then(response => {
                resolve({
                    status: 200,
                    msg: "OK",
                    data: response,
                    code: "200",
                    validated: true
                });
            });
        });
        return promise;
    }

    /**
     * GET FILM
    */
    async getFilm(id: string): Promise<IReturn> {
        const exist = await this.filmModel.exists({ _id: id });
        const promise = new Promise<IReturn>((resolve, reject) => {
            if (!exist) {
                resolve({
                    status: 404,
                    msg: "Not Found!",
                    data: undefined,
                    code: "404",
                    validated: false
                });
            } else {
                this.filmModel.findById(id).exec().then(response => {
                    resolve({
                        status: 200,
                        msg: "OK",
                        data: response,
                        code: "200",
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    /**
     * POST FILM
    */
    async postFilm(detailFilm: FilmDTO): Promise<IReturn> {
        const exist = await this.filmModel.exists({ title: detailFilm.title });
        const promise = new Promise<IReturn>((resolve, reject) => {
            if (!exist) {
                const film = new this.filmModel(detailFilm);
                film.save().then(response => {
                    resolve({
                        status: 200,
                        msg: "OK",
                        data: response,
                        code: "200",
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 500,
                    msg: "That film already exists!",
                    data: undefined,
                    code: "500",
                    validated: false
                });
            }
        });
        return promise;
    }

    /**
     * PUT FILM
    */
    async putFilm(detailFilm: FilmDTO, id: String): Promise<IReturn> {
        const exist = await this.filmModel.exists({ _id: id });
        const promise = new Promise<IReturn>((resolve, reject) => {
            if (!exist) {
                resolve({
                    status: 404,
                    msg: "Not Found!",
                    data: undefined,
                    code: "404",
                    validated: false
                });
            } else {
                this.filmModel.findByIdAndUpdate(id, detailFilm, {new: true}).exec().then(response => {
                    resolve({
                        status: 200,
                        msg: "OK",
                        data: response,
                        code: "200",
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    /**
     * DELETE FILM
    */
    async deleteFilm(id: string): Promise<IReturn> {
        const exist = await this.filmModel.exists({ _id: id });
        const promise = new Promise<IReturn>((resolve, reject) => {
            if (!exist) {
                resolve({
                    status: 404,
                    msg: "Not Found!",
                    data: undefined,
                    code: "404",
                    validated: false
                });
            } else {
                this.filmModel.findByIdAndDelete(id).exec().then(response => {
                    resolve({
                        status: 200,
                        msg: "OK",
                        data: response,
                        code: "200",
                        validated: true
                    });
                });
            }
        });
        return promise;
    }
}
