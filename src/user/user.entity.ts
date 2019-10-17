import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 255})
    name: string;

    @Column({ length: 255 })
    password: string;

    @ManyToOne(type => Role, role => role.id)
    role: Role;
}
