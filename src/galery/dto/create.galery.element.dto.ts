import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGaleryElementDto {

    @IsNotEmpty()
    @IsNumber()
    galeryType: number;

    @IsNotEmpty()
    @IsString()
    viewName: string;

    @IsNotEmpty()
    @IsString()
    img: string;

    @IsNotEmpty()
    @IsNumber()
    order: number;
}
