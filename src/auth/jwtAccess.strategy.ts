import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { jwtSecret } from '../config/config';
import { EJwtType } from './types/ejwt-types';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'AccessJwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: any) {
        if (payload.type === EJwtType.access) {
            return {
                id: payload.user.id,
                role: payload.user.role,
                type: payload.type,
            };
        }
        return false;
    }
}
