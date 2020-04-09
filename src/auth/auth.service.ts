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

    async validateUser(login: string, pass: string): Promise<any> {
      const user = await this.userSrv.findBylogin(login);
      if (user && await this.passwordSrv.verifyPassword(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async createAccessToken(userId: number): Promise<string> {
      const {password, ...user} = await this.userSrv.findById(userId);
      return this.jwtService.sign({type: EJwtType.access, user}, { expiresIn: jwtAccesExpire });
    }

    async createRefreshToken(userId: number): Promise<string> {
      return this.jwtService.sign({ type: EJwtType.refresh, userId }, { expiresIn: jwtRefrechExpire });
    }

}
