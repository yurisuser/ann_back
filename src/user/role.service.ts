import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from './role.entity';

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(Role)
        private repositoryRole: Repository<Role>,
    ) {}

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

    async deleteRole(id: number): Promise<any> {
        return this.repositoryRole.delete(id);
    }
}
