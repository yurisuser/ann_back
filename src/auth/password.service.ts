import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { salt } from '../config/config';

@Injectable()
export class PasswordService {

    verifyPassword(password: string, hash: string): boolean {
        return bcrypt.compare(password, hash);
    }

    async createHashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    generatePassword(length: number): string {
        const symbols = `qwertyuipasdfghjklzxcvbnmQWERTYUIPASDFGHJKLZXCVBNM123456789`; // without 0, O, o
        let result = '';
        length = (length >= 8) ? length : 8;
        for (let i = 0; i < length; i++) {
            result = result.concat(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        return result;
    }
}
