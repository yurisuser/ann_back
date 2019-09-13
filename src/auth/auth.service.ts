import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';

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

    async createToken(userId: number): Promise<any> {
      const user = await this.userSrv.findById(userId);
      return {
        access_token: this.jwtService.sign({id: user.id, name: user.name}),
      };
    }
}
