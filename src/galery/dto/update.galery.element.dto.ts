import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateGaleryElementDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    galeryType: number;

    @IsNotEmpty()
    @IsString()
    viewName: string;

    @IsNotEmpty()
    @IsString()
    img: string;

    @IsNotEmpty()
    order: number;
}
