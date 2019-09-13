import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtSecret, jwtExpire } from '../config/config';
import { JwtStrategy } from './jwt.strategy';
import { PasswordService } from './password.service';

@Module({
    providers: [
        AuthService,
        PasswordService,
        JwtStrategy,
        JwtModule,
    ],
    imports: [
        forwardRef(() => UserModule),
        PassportModule,
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: jwtExpire },
          }),
    ],
    controllers: [
        AuthController,
    ],
    exports: [
        PasswordService,
    ],
})
export class AuthModule {

}
