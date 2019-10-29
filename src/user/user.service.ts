import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { Role } from './role.entity';

@Injectable()
export class UserService {
    readonly relation = ['role'];
    constructor(
        @InjectRepository(User)
        private repositoryUser: Repository<User>,
        @InjectRepository(Role)
        private repositoryRole: Repository<Role>,
    ) {}

    async findAll(): Promise<User[]> {
       return await this.repositoryUser.find({relations: this.relation});
    }

    async findBylogin(login: string): Promise<User> {
        return await this.repositoryUser.findOne({login}, {relations: this.relation});
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
            role: {id: user.role} || await this.getRoleDefault(),
        });
        return userNew;
    }

    async delete(id: number) {
        return this.repositoryUser.delete(id);
    }

    async createRole(role: string): Promise<Role> {
        return this.repositoryRole.save({role});
    }

    async findAllRoles(): Promise<Role[]> {
        return await this.repositoryRole.find();
    }

    async findRole(role: string): Promise<Role> {
        return await this.repositoryRole.findOne(role);
    }

    async findRoleById(id: number): Promise<Role> {
        return await this.repositoryRole.findOne(id);
    }

    private async getRoleDefault() {
        return  await this.repositoryRole.findOne({role: 'default'}) || this.repositoryRole.save({role: 'default'});
    }

    async deleteRole(id: number): Promise<any> {
        return this.repositoryRole.delete(id);
    }
}
