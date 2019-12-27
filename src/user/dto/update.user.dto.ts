import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    login: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

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
