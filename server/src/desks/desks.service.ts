import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { DesksListResponseDto } from './dto/desks-list.dto';
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

    desk.creator = user;

    return await desk.save();
  }

  async getAll(userId: string): Promise<DesksListResponseDto> {
    const desks = await this.deskModel.find({ creator: userId });

    return {
      items: desks,
    };
  }
}
