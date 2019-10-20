import { Controller, Get, Put, Body, HttpException, HttpStatus, Delete, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { PasswordService } from '../auth/password.service';
import { CreateRoleDTO } from './dto/create.role.dto';

@Controller('user')
export class UserController {
    constructor(
        private userSrv: UserService,
        private passwordSrv: PasswordService,
    ) {}

    @Get()
    async findAll(): Promise<any[]> {
        const users = await this.userSrv.findAll();
        return users.map(x => {
            const { password, ...result } = x;
            return result;
        });
    }

    @Put()
    async createUser(@Body() newUser: CreateUserDto): Promise<any> {
        const user = await this.userSrv.findByName(newUser.name);
        if (user) { throw new HttpException('User already registered', HttpStatus.BAD_REQUEST); }
        newUser.password = await this.passwordSrv.createHashPassword(newUser.password);
        const {password, ...res} = await this.userSrv.create(newUser);
        return res;
    }

    @Delete('role')
    async deleteRole(@Body() id: number): Promise<any> {
        const role = await this.userSrv.findRoleById(id);
        if (!role) { throw new HttpException('Role not exist', HttpStatus.BAD_REQUEST); }
        return this.userSrv.deleteRole(id);
    }

    @Delete()
    async delete(@Body() body: number): Promise<any> {
        const user = await this.userSrv.findById(body);
        if (!user) { throw new HttpException('User not exist', HttpStatus.NOT_FOUND); }
        return await this.userSrv.delete(body);
    }

    @Get('role')
    async getRoles(): Promise<any> {
        return await this.userSrv.findAllRoles();
    }

    @Put('role')
    async createRole(@Body() role: CreateRoleDTO) {
        return await this.userSrv.findRole(role.role) || await this.userSrv.createRole(role.role);
    }
}
