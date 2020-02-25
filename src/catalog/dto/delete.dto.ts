import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteDTO {

    @IsNotEmpty()
    @IsNumber()
    id: number;
}
