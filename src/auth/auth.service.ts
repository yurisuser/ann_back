import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';
import { jwtAccesExpire, jwtRefrechExpire } from '../config/config';
import { EJwtType } from './types/ejwt-types';

@Injectable()
export class AuthService {

    constructor(
        private userSrv: UserService,
        private passwordSrv: PasswordService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(name: string, pass: string): Promise<any> {
      const user = await this.userSrv.findByName(name);
      if (user && await this.passwordSrv.verifyPassword(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async createAccessToken(userId: number): Promise<string> {
      const user = await this.userSrv.findById(userId);
      return this.jwtService.sign({ type: EJwtType.access, userId, name: user.name, role: user.role.role }, { expiresIn: jwtAccesExpire });
    }

    async createRefreshToken(userId: number): Promise<string> {
      return this.jwtService.sign({ type: EJwtType.refresh, userId }, { expiresIn: jwtRefrechExpire });
    }

}
