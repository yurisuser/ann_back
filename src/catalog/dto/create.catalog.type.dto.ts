import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCatalogTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    viewName: string;

    @IsNotEmpty()
    order: number;
}
