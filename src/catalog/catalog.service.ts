import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { CatalogType } from './catalog.type.entity';
import { CatalogElement } from './catalog.element.entity';
import { CreateCatalogTypeDto } from './dto/create.catalog.type.dto';
import { CreateCatalogElementDto } from './dto/create.catalog.element.dto';
import { UpdateCatalogTypeDto } from './dto/update.catalog.type';
import { UpdateCatalogElementDto } from './dto/update.catalog.element.dto';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(CatalogType)
        private repoCatType: Repository<CatalogType>,
        @InjectRepository(CatalogElement)
        private repoCatElement: Repository<CatalogElement>,
    ) {}

    async findAllCatalogTypes(): Promise<CatalogType[]> {
        return this.repoCatType.find();
    }

    async findAllCatalogElement(): Promise<CatalogElement[]> {
        return this.repoCatElement.find({ relations: ['catalogType'] });
    }

    async findOneCatalogTypes(catType): Promise<CatalogType> {
        return this.repoCatType.findOne(catType);
    }

    async findOneCatalogElement(catElement): Promise<CatalogElement> {
        return this.repoCatElement.findOne(catElement);
    }

    async createCatalogType(newType: CreateCatalogTypeDto): Promise<CatalogType> {
        return this.repoCatType.save(newType);
    }

    async createCatalogElement(newElement: CreateCatalogElementDto): Promise<CatalogElement> {
        return this.repoCatElement.save({
            viewName: newElement.viewName,
            img: newElement.img,
            catalogType: {id: newElement.catalogType},
            order: newElement.order,
        });
    }

    async deleteCatalogType(id: number): Promise<DeleteResult> {
        return this.repoCatType.delete({id});
    }

    async deleteCatalogElement(id: number): Promise<DeleteResult> {
        return this.repoCatElement.delete({id});
    }

    async updateCatalogType(type: CatalogType): Promise<UpdateResult> {
        return this.repoCatType.update({id: type.id}, type);
    }

    async updateCatalogElement(element: CatalogElement): Promise<UpdateResult> {
        return this.repoCatElement.update({id: element.id}, element);
    }
}
