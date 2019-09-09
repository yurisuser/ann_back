import { Post, Body, Controller } from "@nestjs/common";

import { LoginDto } from "./dto/login.dto";
import { UserService } from "../user/user.service";

@Controller()
export class AuthController {
    constructor(
        
    ){}
    
    @Post('login')
    async login(@Body() {login, password}: LoginDto): Promise<any> {
        console.log(login, password);

    }
}