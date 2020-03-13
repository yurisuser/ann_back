import { IsNotEmpty } from 'class-validator';

export class DeleteDTO {

    @IsNotEmpty()
    id: number;
}
