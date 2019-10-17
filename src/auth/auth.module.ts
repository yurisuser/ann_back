import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { jwtSecret, jwtAccesExpire, jwtRefrechExpire } from '../config/config';
import { JwtAccessStrategy } from './jwtAccess.strategy';
import { JwtRefreshStrategy } from './jwtRefresh.strategy';
import { PasswordService } from './password.service';

@Module({
    providers: [
        AuthService,
        PasswordService,
        JwtAccessStrategy,
        JwtRefreshStrategy,
        JwtModule,
    ],
    imports: [
        forwardRef(() => UserModule),
        PassportModule,
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: jwtAccesExpire },
          }),
        JwtModule.register({
        secret: jwtSecret,
        signOptions: { expiresIn: jwtRefrechExpire },
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
