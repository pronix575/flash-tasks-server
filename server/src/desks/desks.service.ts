import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { DeskResponseDto, DesksListResponseDto } from './dto/desks-list.dto';
import { CreateDeskDto } from './dto/create-desk-dto';
import { Desk, DeskDocument } from './schemas/desk.schema';

@Injectable()
export class DesksService {
  constructor(
    @InjectModel(Desk.name) private deskModel: Model<DeskDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly userService: UsersService,
  ) {}
  async createDesk(
    createDeskDto: CreateDeskDto & { userId: string },
  ): Promise<Desk> {
    const newDesk = new this.deskModel(createDeskDto);

    const desk = await newDesk.save();

    await this.userService.addDesk(desk, createDeskDto.userId);

    const user = await this.userModel.findById(createDeskDto.userId);

    desk.creator = user._id;

    return await desk.save();
  }

  async getAll(userId: string): Promise<DesksListResponseDto> {
    const desks = await this.deskModel.find({ creator: userId });

    return {
      items: desks,
    };
  }

  async getById(id: string, userId: string): Promise<DeskResponseDto> {
    try {
      const desk = await this.deskModel.findById(id);

      if (desk.creator.toString() === userId) {
        return desk;
      } else {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteById(id: string, userId: string) {
    try {
      const desk = await this.deskModel.findById(id);

      if (!desk || desk.creator.toString() !== userId) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }

      return await desk.delete();
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }
}
