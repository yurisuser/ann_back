import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

import { Role } from './role.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 255})
    login: string;

    @Column({ length: 255 })
    password: string;

    @Column({length: 255, unique: true})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ManyToOne(type => Role, role => role.id, {nullable: true})
    role: Role;

    @Column({length: 191, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    firstName: string;

    @Column({length: 191, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    patronymic: string;

    @Column({length: 191, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    lastName: string;

    @Column({nullable: true})
    registrationDate: Date;

}
