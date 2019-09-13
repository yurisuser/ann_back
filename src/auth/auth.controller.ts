import { Post, Body, Controller, UseGuards, HttpException, HttpStatus } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(
        private authSrv: AuthService,
    ) {}

    @Post('login')
    async login(@Body() user: LoginDto): Promise<any> {
        const ans = await this.authSrv.validateUser(user.name, user.password);
        if (!ans) {
            throw new HttpException('Wrong login/password', HttpStatus.UNAUTHORIZED);
        }
        return this.authSrv.createToken(ans.id);
    }

    @UseGuards(AuthGuard('singleJwt'))
    @Post('test')
    async test() {
        return 'ok';
    }
}
