/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { Model } from 'mongoose';
import { encodePassword } from 'src/users/utils/bcrypt';

@Injectable()
export class UsersService {
  //contructor to connection mongooooooo
  constructor(@InjectModel('Users') private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const password = await encodePassword(createUserDto.password);

    const createdUser = new this.userModel({ ...createUserDto, password });

    return createdUser.save();
  }

  async findUser(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username });
  }
}
