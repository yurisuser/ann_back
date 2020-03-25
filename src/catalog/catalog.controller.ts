import { Controller, Get, Put, Body, HttpException, HttpStatus, Delete, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCatalogTypeDto } from './dto/create.catalog.type.dto';
import { CreateCatalogElementDto } from './dto/create.catalog.element.dto';
import { DeleteDTO } from './dto/delete.dto';
import { UpdateCatalogTypeDto } from './dto/update.catalog.type';
import { UpdateCatalogElementDto } from './dto/update.catalog.element.dto';

@Controller('catalog')
export class CatalogController {
    constructor(
        private srv: CatalogService,
    ) {}

    @Get('types')
    async getTypes() {
        return (await this.srv.findAllCatalogTypes()).sort((x, y) => x.id - y.id);
    }

    @Get('elements')
    async getElements() {
        const ans = await  this.srv.findAllCatalogElement();
        return ans.map(x => {
            return {
                id: x.id,
                catalogType: x.catalogType.id,
                img: x.img,
                viewName: x.viewName,
                order: x.order,
            };
        }).sort((x, y) => x.id - y.id);
    }

    @Put('type')
    async createType(@Body() newType: CreateCatalogTypeDto) {
        const exist = await this.srv.findOneCatalogTypes(newType);
        if (exist) {
            throw new HttpException('Type is exist', HttpStatus.BAD_REQUEST);
        }
        await this.srv.createCatalogType(newType);
        return this.srv.findAllCatalogTypes();
    }

    @Put('element')
    async createElement(@Body() newElement: CreateCatalogElementDto) {
        const existType = await this.srv.findOneCatalogTypes({id: newElement.catalogType});
        if (!existType) {
            throw new HttpException('Catalog type is not exist', HttpStatus.BAD_REQUEST);
        }
        const existelement = await this.srv.findOneCatalogElement(newElement);
        if (existelement) {
            throw new HttpException('Element is exist', HttpStatus.BAD_REQUEST);
        }
        await this.srv.createCatalogElement(newElement);
        return this.srv.findAllCatalogElement();
    }

    @Delete('type')
    async deleteType(@Body() body: DeleteDTO) {
        const elements = await this.srv.findOneCatalogElement({catalogType: body.id});
        if (elements) {
            throw new HttpException('Type is using', HttpStatus.BAD_REQUEST);
        }
        await this.srv.deleteCatalogType(body.id);
        return this.getTypes();
    }

    @Delete('element')
    async deleteElement(@Body() body: DeleteDTO) {
        await this.srv.deleteCatalogElement(body.id);
        return this.getElements();
    }

    @Post('type')
    async updateType(@Body() type: UpdateCatalogTypeDto) {
        await this.srv.updateCatalogType(type);
        return this.srv.findAllCatalogTypes();
    }

    @Post('element')
    async updateElement(@Body() element: UpdateCatalogElementDto) {
        const type = await this.srv.findOneCatalogTypes({id: element.catalogType});
        if (!type) {
            throw new HttpException('Type of element is not exist', HttpStatus.BAD_REQUEST);
        }
        const el = {
            id: element.id,
            img: element.img,
            viewName: element.viewName,
            catalogType: type,
            order: element.order,
        };
        await this.srv.updateCatalogElement(el);
        return this.srv.findAllCatalogElement();
    }
}
