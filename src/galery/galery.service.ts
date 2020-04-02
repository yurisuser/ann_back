import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { GaleryType } from './galery.type.entity';
import { GaleryElement } from './galery.element.entity';
import { CreateGaleryTypeDto } from './dto/create.galery.type.dto';
import { CreateGaleryElementDto } from './dto/create.galery.element.dto';

@Injectable()
export class GaleryService {
    constructor(
        @InjectRepository(GaleryType)
        private repoType: Repository<GaleryType>,
        @InjectRepository(GaleryElement)
        private repoElement: Repository<GaleryElement>,
    ) {}

    async findAllTypes(): Promise<GaleryType[]> {
        return this.repoType.find();
    }

    async findAllElement(): Promise<GaleryElement[]> {
        return this.repoElement.find({ relations: ['galeryType'] });
    }

    async findOneTypes(type): Promise<GaleryType> {
        return this.repoType.findOne(type);
    }

    async findOneElement(el): Promise<GaleryElement> {
        return this.repoElement.findOne(el);
    }

    async createType(newType: CreateGaleryTypeDto): Promise<GaleryType> {
        return this.repoType.save(newType);
    }

    async createElement(newElement: CreateGaleryElementDto): Promise<GaleryElement> {
        return this.repoElement.save({
            viewName: newElement.viewName,
            img: newElement.img,
            galeryType: {id: newElement.galeryType},
            order: newElement.order,
        });
    }

    async deleteType(ids: number[]): Promise<DeleteResult> {
        return this.repoType.delete(ids);
    }

    async deleteElement(idArr: number[]): Promise<DeleteResult> {
        return this.repoElement.delete(idArr);
    }

    async updateType(type: GaleryType): Promise<UpdateResult> {
        return this.repoType.update({id: type.id}, type);
    }

    async updateElement(element: GaleryElement): Promise<UpdateResult> {
        return this.repoElement.update({id: element.id}, element);
    }
}
