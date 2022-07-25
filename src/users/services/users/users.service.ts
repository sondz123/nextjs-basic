/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Connection } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UserSchema } from 'src/users/schema/user.schema';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  //contructor to connection mongooooooo
  constructor(@InjectConnection() private connection: Connection) {}
  private users: User[] = [
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
  getUserṣ() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }
  getUserByUserName(username: string) {
    return this.users.find((user) => {
      return user.username == username;
    });
    // return plainToClass(SerializedUser, userFind)
  }

  createUser(createUserDto: CreateUserDto) {
    // const userSave = new UserSchema(createUserDto);
  }
}
