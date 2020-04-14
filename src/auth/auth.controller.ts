import { Post, Body, Controller, UseGuards, HttpException, HttpStatus, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtResponce } from './types/jwt-responce.interface';

@Controller('auth')
export class AuthController {

    constructor(
        private authSrv: AuthService,
    ) {}

    @Post('login')
    async login(@Body() user: LoginDto): Promise<JwtResponce> {
        const ans = await this.authSrv.validateUser(user.login, user.password);
        if (!ans) {
            throw new HttpException('Wrong login/password', HttpStatus.UNAUTHORIZED);
        }
        return {
            access_token: await this.authSrv.createAccessToken(ans.id),
            refresh_token: await this.authSrv.createRefreshToken(ans.id),
        };
    }

    @UseGuards(AuthGuard('RefreshJwt'))
    @Post('refresh')
    async refresh(@Req() req): Promise<JwtResponce> {
        return {
            access_token: await this.authSrv.createAccessToken(req.user.userId),
            refresh_token: await this.authSrv.createRefreshToken(req.user.userId),
        };
    }
}
