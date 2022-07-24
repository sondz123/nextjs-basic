/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users : User[] = [
        {
            username: 'anson',
            password: 'anson',
        },
        {
            username: 'dany',
            password: 'dany',
        },
        {
            username: 'derek',
            password: 'derek',
        },
        {
            username: 'honganh',
            password: 'honganh',
        },
    ];
    getUserṣ(){
        return this.users.map((user) => plainToClass(SerializedUser, user));
    }
    getUserByUserName(username:string){
        return this.users.find((user) => {
           return user.username == username;
        });
        // return plainToClass(SerializedUser, userFind)
    }
}
