import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {

    private readonly salt: number = 10;

    verifyPassword(password: string, hash: string): boolean {
        return bcrypt.compare(password, hash);
    }

    async createHashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.salt);
    }
}
