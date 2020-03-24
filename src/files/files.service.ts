import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import imageThumbnail = require('image-thumbnail');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';

import { imgPath, thumbPath } from '../config/config';
import { Files } from './files.entity';
import { DeleteImgDto } from './dto/delete.img.dto';

@Injectable()
export class FilesService {

    constructor(
        @InjectRepository(Files)
        private repoFile: Repository<Files>,
    ) {}

    async getFile(res: Response, originalName: string) {
        const fileName = await this.repoFile.findOne({where: {originalName}});
        if (!fileName) {
            throw new HttpException('File not found DB', HttpStatus.NOT_FOUND);
        }
        const filePath = imgPath + fileName.name;
        if (!fs.existsSync(filePath)) {
            throw new HttpException('File not found storage', HttpStatus.NOT_FOUND);
        }
        return res.sendFile(filePath, {root: '.'});
    }

    async getListImg() {
        const res = await this.repoFile.find();
        return res;
    }

    async getThumbnail(res: Response, originalName: string) {
        const option = {width: 100, height: 100, responseType: 'buffer'};
        const ans = await this.repoFile.findOne({where: {originalName}});
        fs.exists(thumbPath + ans.name, async (exist) => {
            if (!exist) {
                const thumbnail = await imageThumbnail( imgPath + ans.name, option );
                await this.createThumb(thumbnail, ans.name);
            }
            return res.download(thumbPath + ans.name);
        });
    }

    async saveImg(data, name) {
        return new Promise((res, rej) => {
            fs.writeFile(imgPath + name, data, (err) => {
                err ? rej(err) : res();
            });
        });
    }

    async getFileEntity(originalName: string): Promise<Files> {
        return this.repoFile.findOne({where: {originalName}});
    }

    async createImg(name: string, originalName: string) {
        return await (await this.repoFile.save({name, originalName})).originalName;
    }

    private async createThumb(data, name: string) {
        return new Promise((res, rej) => {
            fs.writeFile(thumbPath + name, data, (err) => {
                err ? rej(err) : res();
            });
        });
    }

    async deleteImg(arr: DeleteImgDto): Promise<Files[]> {
        const line = await this.repoFile.find({where: {originalName: In(arr.names)}});
        line.forEach(async (element) => {
            const fullImg = imgPath + element.name;
            const fullThumb = thumbPath + element.name;
            await this.repoFile.delete({id: element.id});
            if (fs.existsSync(fullImg)) { fs.unlinkSync(fullImg); }
            if (fs.existsSync(fullThumb)) { fs.unlinkSync(fullThumb); }
        });
        return this.getListImg();
    }
}
