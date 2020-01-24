import { IsNumber, IsNotEmpty } from 'class-validator';

export class ForcePswChangeDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    password: string;
}
