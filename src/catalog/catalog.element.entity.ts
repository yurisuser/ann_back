import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsString } from 'class-validator';

import { CatalogType } from './catalog.type.entity';

@Entity()
export class CatalogElement {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => CatalogType, catalogType => catalogType.id)
    catalogType: CatalogType;

    @Column({length: 191, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    @IsString()
    viewName: string;

    @Column()
    @IsString()
    img: string;
}
