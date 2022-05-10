import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeskDocument } from 'src/desks/schemas/desk.schema';
import { hashPassword } from 'src/utils/hashPassword';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { User, UserDocument } from './schemas/user.schema';
import { getUserDto } from './utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async getAll(): Promise<UserResponseDto[]> {
    const users = await this.userModel.find().exec();

    return users.map(getUserDto);
  }

  async getById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return user;
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

  async addDesk(desk: DeskDocument, userId: string) {
    const user = await this.userModel.findById(userId);

    user.desks.push(desk._id);

    return await user.save();
  }

  async patch(patchUserDto: PatchUserDto, userId: string) {
    const user = await this.userModel.findByIdAndUpdate(userId, patchUserDto, {
      new: true,
    });

    return getUserDto(user);
  }
}
