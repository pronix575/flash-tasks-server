import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashPassword } from 'src/utils/hashPassword';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { User, UserDocument } from './schemas/user.schema';
import { getUserDto } from './utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<UserResponseDto[]> {
    const users = await this.userModel.find().exec();

    return users.map(getUserDto);
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async getByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(userDto: CreateUserDto) {
    const hashedPassword = await hashPassword(userDto.password);

    const newUser = new this.userModel({
      name: userDto.name,
      email: userDto.email,
      password: hashedPassword,
    });

    await newUser.save();

    return 'success created';
  }
}
