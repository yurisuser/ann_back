import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Files {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 191, unique: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    originalName: string;

    @Column({unique: true})
    name: string;
}
