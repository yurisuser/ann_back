import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity';
import { Role } from './role.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleController } from './role.controller';
import { AuthModule } from '../auth/auth.module';
import { RoleService } from './role.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Role]),
        forwardRef(() => AuthModule),
    ],
    providers: [UserService, RoleService],
    exports: [UserService],
    controllers: [UserController, RoleController],
})

export class UserModule {
}
