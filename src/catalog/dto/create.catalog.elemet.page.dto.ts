import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatalogElementPageDto {
    @IsNotEmpty()
    @IsNumber()
    catalogElement: number;

    @IsString()
    headText: string;

    @IsString()
    img: string;

    @IsString()
    paragraphText: string;

    @IsString()
    text: string;

    @IsString()
    spreadsheetId: string;

    @IsNumber()
    spreadSheetPageNum: number;
}
