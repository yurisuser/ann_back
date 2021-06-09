import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsString, IsNumber } from 'class-validator';

import { CatalogElement } from './catalog.element.entity';

@Entity()
export class CatalogElementPage {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => CatalogElement, catalogElement => catalogElement.id)
    catalogElement: CatalogElement;

    @Column()
    @IsString()
    headText: string;

    @Column()
    @IsString()
    img: string;

    @Column()
    @IsString()
    paragraphText: string;

    @Column()
    @IsString()
    spreadsheetId: string;

    @Column()
    @IsNumber()
    spreadSheetPageNum: number;
}
