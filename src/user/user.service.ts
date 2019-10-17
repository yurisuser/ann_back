import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
    readonly relation = ['role'];
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
       return await this.repository.find({relations: this.relation});
    }

    async findByName(name: string): Promise<User> {
        return await this.repository.findOne({name}, {relations: this.relation});
    }

    async findById(id: number): Promise<User> {
        return await this.repository.findOne({id}, {relations: this.relation});
    }

    async create(user: CreateUserDto): Promise<User> {
        const us = await this.repository.save({name: user.name, password: user.password});
        return us;
    }

    async delete(id: number) {
        return this.repository.delete(id);
    }
}
