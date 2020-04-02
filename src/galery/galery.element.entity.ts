import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsString, IsNumber } from 'class-validator';
import { GaleryType } from './galery.type.entity';

@Entity()
export class GaleryElement {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => GaleryType, galeryType => galeryType.id)
    galeryType: GaleryType;

    @Column({length: 191, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    @IsString()
    viewName: string;

    @Column()
    @IsString()
    img: string;

    @Column()
    @IsNumber()
    order: number;
}
