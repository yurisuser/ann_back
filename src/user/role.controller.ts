import { Controller, Delete, Body, HttpStatus, Get, Put, HttpException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateRoleDTO } from './dto/create.role.dto';
import { RoleService } from './role.service';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('role')
export class RoleController {

    constructor(
        private roleSrv: RoleService,
    ) {}

    @UseGuards(AuthGuard('AccessJwt'))
    @Get()
    // @Roles('admin')
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
