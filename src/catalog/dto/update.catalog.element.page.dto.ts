import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class  UpdateCatalogElementPageDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

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
    spreadsheetId: string;

    @IsNumber()
    spreadSheetPageNum: number;
}
