import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
       return await this.repository.find();
    }

    async findByName(name: string): Promise<User> {
        return await this.repository.findOne({name});
    }

    async findById(id: number): Promise<User> {
        return await this.repository.findOne({id});
    }

    async create(user: CreateUserDto): Promise<User> {
        const us = await this.repository.save({name: user.name, password: user.password});
        return us;
    }

    async delete(id: number) {
        return this.repository.delete(id);
    }
}
