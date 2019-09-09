import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create.user.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ){}

    async findAll(): Promise<User[]> {
       return await this.repository.find();
    }

    async findByName(name: string): Promise<User> {       
        return await this.repository.findOne({name});
        // return {id: 1, name: 'admin', password: 'admin'}
    }

    async findById(id: number): Promise<User> {
        return await this.repository.findOne({id});
    }

    async create(user: CreateUserDto): Promise<any> {
        const us = await this.repository.save({name: user.name, password: user.password});
        return {id: us.id, name: us.name}
    }

    async delete(id: number) {
        return this.repository.delete(id);
    }

}