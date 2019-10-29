import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

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

    @Column({length: 255, nullable: true})
    firstName: string;

    @Column({length: 255, nullable: true})
    patronymic: string;

    @Column({length: 255, nullable: true})
    lastName: string;

    @Column({nullable: true})
    registrationDate: Date;

}
