import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGaleryTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    viewName: string;

    @IsNotEmpty()
    order: number;
}
