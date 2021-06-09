import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { CatalogType } from './catalog.type.entity';
import { CatalogElement } from './catalog.element.entity';
import { CreateCatalogTypeDto } from './dto/create.catalog.type.dto';
import { CreateCatalogElementDto } from './dto/create.catalog.element.dto';
import { CatalogElementPage } from './catalog.element.page.entity';
import { CreateCatalogElementPageDto } from './dto/create.catalog.elemet.page.dto';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(CatalogType)
        private repoCatType: Repository<CatalogType>,
        @InjectRepository(CatalogElement)
        private repoCatElement: Repository<CatalogElement>,
        @InjectRepository(CatalogElementPage)
        private repoCatElementPage: Repository<CatalogElementPage>,
    ) {}

    async findAllCatalogTypes(): Promise<CatalogType[]> {
        return this.repoCatType.find();
    }

    async findAllCatalogElement(): Promise<CatalogElement[]> {
        return this.repoCatElement.find({ relations: ['catalogType'] });
    }

    async FindAllCatalogElementPages(): Promise<CatalogElementPage[]> {
        return this.repoCatElementPage.find({relations: ['catalogElement']});
    }

    async findOneCatalogTypes(catType): Promise<CatalogType> {
        return this.repoCatType.findOne(catType);
    }

    async findOneCatalogElement(catElement): Promise<CatalogElement> {
        return this.repoCatElement.findOne(catElement);
    }

    async findOneCatalogElementPage(page): Promise<CatalogElementPage> {
        return this.repoCatElementPage.findOne(page);
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

    async createCatalogElementPage(newPage: CreateCatalogElementPageDto): Promise<CatalogElementPage> {
        return this.repoCatElementPage.save({
            catalogElement: {id: newPage.catalogElement},
            headText: newPage.headText,
            img: newPage.img,
            paragraphText: newPage.paragraphText,
            text: newPage.text,
            spreadsheetId: newPage.spreadsheetId,
            spreadSheetPageNum: newPage.spreadSheetPageNum,
        });
    }

    async deleteCatalogType(ids: number[]): Promise<DeleteResult> {
        return this.repoCatType.delete(ids);
    }

    async deleteCatalogElement(idArr: number[]): Promise<DeleteResult> {
        return this.repoCatElement.delete(idArr);
    }

    async deleteCatalogElementPage(ids: number[]): Promise<DeleteResult> {
        return this.repoCatElementPage.delete(ids);
    }

    async updateCatalogType(type: CatalogType): Promise<UpdateResult> {
        return this.repoCatType.update({id: type.id}, type);
    }

    async updateCatalogElement(element: CatalogElement): Promise<UpdateResult> {
        return this.repoCatElement.update({id: element.id}, element);
    }

    async updateCatalogElementPage(page: CatalogElementPage): Promise<UpdateResult> {
        return this.repoCatElementPage.update({id: page.id}, page);
    }
}
