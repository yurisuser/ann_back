import { Controller, Get, Res, Param, Post, UseInterceptors, UploadedFile, HttpException, HttpStatus, Body, Delete } from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import * as fs from 'fs';

import { FilesService } from './files.service';
import { imgPath } from '../config/config';
import { DeleteImgDto } from './dto/delete.img.dto';

@Controller('files')
export class FilesController {
    constructor(
        private fileSrv: FilesService,
    ) {}

    @Get('img/:file')
    async teswewt(@Res() res: Response, @Param('file') file: string) {
        return this.fileSrv.getFile(res, file);
    }

    @Get('list')
    async getList() {
        const list = await this.fileSrv.getListImg();
        return list.map(x => x.originalName);

    }

    @Get('thumb/:file')
    async getThumbnail(@Res() res: Response, @Param('file') file: string) {
        return this.fileSrv.getThumbnail(res, file);
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file) {
        if (!file) {
            throw new HttpException(`Back: Error getting file`, HttpStatus.BAD_REQUEST);
        }
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            throw new HttpException('Not available image: jpg, jpeg, png, gif', HttpStatus.BAD_REQUEST);
        }
        const exist = await this.fileSrv.getFileEntity(file.originalname);
        if (exist) {
            throw new HttpException(`File with name '${file.originalname}' is exist`, HttpStatus.BAD_REQUEST);
        }
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        const name = `${randomName}${extname(file.originalname)}`;
        const result = await this.fileSrv.createImg(name, file.originalname);
        try {
            fs.writeFileSync(imgPath + name, file.buffer);
            return {fileName: result};
        } catch (error) {
            await this.fileSrv.deleteImg({names: [file.originalname]});
            throw new HttpException('Back: Error save file', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete()
    async deleteImg(@Body() body: DeleteImgDto) {
       return await this.fileSrv.deleteImg(body);
    }
}
