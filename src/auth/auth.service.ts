import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  
    constructor(
        private userSrv: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(name: string, pass: string): Promise<any> {
      const user = await this.userSrv.findByName(name);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async createToken(userId: number): Promise<any> {
      const user = await this.userSrv.findById(userId);
      return {
        access_token: this.jwtService.sign({id: user.id, name: user.name}),
      }
    }
}