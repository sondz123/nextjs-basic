/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, Res, UseInterceptors} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { Response } from 'express';
import { SerializedUser } from 'src/users/types/User';


/*
    - Tìm hiểu cách khai bảo service mới như sau: 
    - viết trong file service @Inject('USER_SERVICE') private readonly userService: UsersService
    - sửa trong file module :
        + providers : [
            provider : 'USER_SERVICE',
            useClass : UserService
        ]
*/
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers(@Res() res : Response){
        const users =  this.userService.getUserṣ();
        if(users && users.length > 0){
            res.status(200).json({
                status : 'success',
                data : users
            })
        }else {
            res.status(400).json({
                status : 'Fail',
                message : "No find users"
            })
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get("/:username")
    getByUsername(@Param('username') username: string, @Res() res : Response){
        const user = this.userService.getUserByUserName(username);
        if(user) return new SerializedUser(user);
        // if(user) {
        //     const data = new SerializedUser(user);
        //     res.status(200).json({
        //         status: "success",
        //         data: data
        //     })
        // }
        else throw new HttpException("User not found", HttpStatus.BAD_REQUEST)
    }
}
