import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCatalogTypeDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    viewName: string;
}
