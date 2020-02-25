import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class CatalogType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    @IsString()
    name: string;

    @Column({length: 191, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', unique: true})
    @IsString()
    viewName: string;
}
