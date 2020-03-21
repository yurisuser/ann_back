import { Controller, Get, Res, Param, Post, UseInterceptors, UploadedFile, HttpException, HttpStatus, Body, Delete } from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: imgPath,
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                cb(null, `${randomName}${extname(file.originalname)}`);
            },
        }),
      }))
    async upload(@UploadedFile() file) {
        if (!file) {
            throw new HttpException(`File name is exist`, HttpStatus.BAD_REQUEST);
        }
        return await this.fileSrv.createImg(file.filename, file.originalname);
    }

    @Delete()
    async deleteImg(@Body() body: DeleteImgDto) {
       return await this.fileSrv.deleteImg(body);
    }
}
