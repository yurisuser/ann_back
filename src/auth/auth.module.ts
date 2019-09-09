import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtSecret, jwtExpire } from "../config/config"
import { JwtStrategy } from './jwt.strategy';

@Module({
    providers: [AuthService, JwtStrategy, JwtModule],
    imports: [
        UserModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: jwtExpire },
          }),
    ],
    controllers: [AuthController]
})
export class AuthModule {

}
