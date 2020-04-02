import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateGaleryTypeDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    viewName: string;

    @IsNotEmpty()
    order: number;
}
