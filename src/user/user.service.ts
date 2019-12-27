import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UserService {
    readonly relation = ['role'];
    constructor(
        @InjectRepository(User)
        private repositoryUser: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
       return await this.repositoryUser.find({relations: this.relation});
    }

    async findBylogin(login: string): Promise<User> {
        return await this.repositoryUser.findOne({login}, {relations: this.relation});
    }

    async check(param): Promise<any> {
        const user = await this.repositoryUser.findOne(param);
        return user ? user.id : false;
    }

    async findById(id: number): Promise<User> {
        return await this.repositoryUser.findOne(id, {relations: this.relation});
    }

    async create(user: CreateUserDto): Promise<User> {
        const userNew = await this.repositoryUser.save({
            login: user.login,
            email: user.email,
            password: user.password,
            firstName: user.firstName || null,
            patronymic: user.patronymic || null,
            lastName: user.lastName || null,
            registrationDate: new Date().toUTCString(),
            role: {id: user.role} || null,
        });
        return userNew;
    }

    async update(user: UpdateUserDto): Promise<any> {
        const userEdit = await this.repositoryUser.update(user.id, {
            login: user.login,
            email: user.email,
            firstName: user.firstName || null,
            patronymic: user.patronymic || null,
            lastName: user.lastName || null,
            role: {id: user.role} || null,
        });
        return userEdit;
    }

    async delete(ids: number[]) {
        return this.repositoryUser.delete(ids);
    }

    async changePswForce(id: number, password: string): Promise<any> {
        return await this.repositoryUser.update(id, {password});
    }
}
