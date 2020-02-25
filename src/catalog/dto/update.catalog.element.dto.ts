import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCatalogElementDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    catalogType: number;

    @IsNotEmpty()
    @IsString()
    viewName: string;

    @IsNotEmpty()
    @IsString()
    img: string;
}
