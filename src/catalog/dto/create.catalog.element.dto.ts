import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatalogElementDto {

    @IsNotEmpty()
    @IsNumber()
    catalogType: number;

    @IsNotEmpty()
    @IsString()
    viewName: string;

    @IsNotEmpty()
    @IsString()
    img: string;

    @IsNotEmpty()
    order: number;
}
