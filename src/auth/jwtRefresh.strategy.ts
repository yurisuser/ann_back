import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { jwtSecret } from '../config/config';
import { EJwtType } from './types/ejwt-types';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'RefreshJwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: any) {
        if (payload.type === EJwtType.refresh) {
            return {
                userId: payload.userId,
                type: payload.type,
            };
        }
        return false;
    }
}
