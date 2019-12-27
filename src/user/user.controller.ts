import { Controller, Get, Put, Body, HttpException, HttpStatus, Delete, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { PasswordService } from '../auth/password.service';
import { UpdateUserDto } from './dto/update.user.dto';
import { ForcePswChangeDto } from './dto/force.psw.change.dto';

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

    @Post('check')
    async CheckExist(@Body() param: {key: string}): Promise<any> {
        return await this.userSrv.check(param);
    }

    @Put('create')
    async createUser(@Body() newUser: CreateUserDto): Promise<any> {
        const user = await this.userSrv.findBylogin(newUser.login);
        if (user) { throw new HttpException('User already registered', HttpStatus.BAD_REQUEST); }
        newUser.password = await this.passwordSrv.createHashPassword(newUser.password);
        const {password, ...res} = await this.userSrv.create(newUser);
        return res;
    }

    @Post('update')
    async updateUser(@Body() editUser: UpdateUserDto): Promise<any> {
        const user = await this.userSrv.findById(editUser.id);
        if (!user) { throw new HttpException('User not foud', HttpStatus.NOT_FOUND); }
        return this.userSrv.update(editUser);
    }

    @Post('forcepswchange')
    async forcePasswordChange(@Body() data: ForcePswChangeDto) {
        const passNew = await this.passwordSrv.createHashPassword(data.password);
        const user = await this.userSrv.findById(data.id);
        if (!user) { throw new HttpException('User not found', HttpStatus.NOT_FOUND); }
        return this.userSrv.changePswForce(data.id, passNew);
    }

    @Delete()
    async delete(@Body() body: {ids: number[]}): Promise<any> {
        try {
            return await this.userSrv.delete(body.ids);
        } catch (error) {
            throw new HttpException('wrong users id\'s array', HttpStatus.BAD_REQUEST);
        }
    }
}
