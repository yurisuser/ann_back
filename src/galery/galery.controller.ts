
import { Controller, Get, Put, Body, HttpException, HttpStatus, Delete, Post } from '@nestjs/common';

import { DeleteDTO } from './dto/delete.dto';
import { GaleryService } from './galery.service';
import { CreateGaleryTypeDto } from './dto/create.galery.type.dto';
import { CreateGaleryElementDto } from './dto/create.galery.element.dto';
import { UpdateGaleryTypeDto } from './dto/update.galery.type';
import { UpdateGaleryElementDto } from './dto/update.galery.element.dto';

@Controller('galery')
export class GaleryController {
    constructor(
        private srv: GaleryService,
    ) {}

    @Get('types')
    async getTypes() {
        return (await this.srv.findAllTypes()).sort((x, y) => x.id - y.id);
    }

    @Get('elements')
    async getElements() {
        const ans = await  this.srv.findAllElement();
        return ans.map(x => {
            return {
                id: x.id,
                galeryType: x.galeryType.id,
                img: x.img,
                viewName: x.viewName,
                order: x.order,
            };
        }).sort((x, y) => x.id - y.id);
    }

    @Put('type')
    async createType(@Body() newType: CreateGaleryTypeDto) {
        const exist = await this.srv.findOneTypes(newType);
        if (exist) {
            throw new HttpException('Type is exist', HttpStatus.BAD_REQUEST);
        }
        await this.srv.createType(newType);
        return this.srv.findAllTypes();
    }

    @Put('element')
    async createElement(@Body() newElement: CreateGaleryElementDto) {
        const existType = await this.srv.findOneTypes({id: newElement.galeryType});
        if (!existType) {
            throw new HttpException('Galery type is not exist', HttpStatus.BAD_REQUEST);
        }
        const existelement = await this.srv.findOneElement(newElement);
        if (existelement) {
            throw new HttpException('Element is exist', HttpStatus.BAD_REQUEST);
        }
        await this.srv.createElement(newElement);
        return this.srv.findAllElement();
    }

    @Delete('type')
    async deleteType(@Body() body: DeleteDTO) {
        const elements = await this.srv.findOneElement({catalogType: body.id});
        if (elements) {
            throw new HttpException('Type is using', HttpStatus.BAD_REQUEST);
        }
        await this.srv.deleteType(body.id);
        return this.getTypes();
    }

    @Delete('element')
    async deleteElement(@Body() body: DeleteDTO) {
        await this.srv.deleteElement(body.id);
        return this.getElements();
    }

    @Post('type')
    async updateType(@Body() type: UpdateGaleryTypeDto) {
        await this.srv.updateType(type);
        return this.srv.findAllTypes();
    }

    @Post('element')
    async updateElement(@Body() element: UpdateGaleryElementDto) {
        const type = await this.srv.findOneTypes({id: element.galeryType});
        if (!type) {
            throw new HttpException('Type of element is not exist', HttpStatus.BAD_REQUEST);
        }
        const el = {
            id: element.id,
            img: element.img,
            viewName: element.viewName,
            galeryType: type,
            order: element.order,
        };
        await this.srv.updateElement(el);
        return this.srv.findAllElement();
    }
}
