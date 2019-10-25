import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    login: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @Optional()
    firstName: string;

    @Optional()
    patronymic: string;

    @Optional()
    lastName: string;

    @IsNumber()
    @Optional()
    role?: number;
}
