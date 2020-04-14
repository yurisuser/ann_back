import { Controller, Delete, Body, HttpStatus, Get, Put, HttpException, UseGuards, Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateRoleDTO } from './dto/create.role.dto';
import { RoleService } from './role.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Roles('admin')
@Controller('role')
@UseGuards(AuthGuard('AccessJwt'), RoleGuard)
export class RoleController {

    constructor(
        private roleSrv: RoleService,
    ) {}

    @Get()
    async getRoles(): Promise<any> {
        return await this.roleSrv.findAllRoles();
    }

    @Put()
    async createRole(@Body() role: CreateRoleDTO) {
        return await this.roleSrv.findRole(role.role) || await this.roleSrv.createRole(role.role);
    }

    @Delete()
    async deleteRole(@Body() id: number): Promise<any> {
        const role = await this.roleSrv.findRoleById(id);
        if (!role) { throw new HttpException('Role not exist', HttpStatus.BAD_REQUEST); }
        return this.roleSrv.deleteRole(id);
    }
}
