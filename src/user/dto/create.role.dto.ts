import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRoleDTO {
    @IsString()
    @IsNotEmpty()
    role: string;
}
