import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    login: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNumber()
    @Optional()
    role?: number;

    @Optional()
    firstName: string;

    @Optional()
    patronymic: string;

    @Optional()
    lastName: string;

}
