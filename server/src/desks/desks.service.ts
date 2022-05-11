import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { DesksListResponseDto } from './dto/desks-list.dto';
import { CreateDeskDto } from './dto/create-desk-dto';
import { Desk, DeskDocument } from './schemas/desk.schema';
import { DeskResponseDto } from './dto/desk-response.dto';
import { TasksService } from 'src/tasks/tasks.service';

@Injectable()
export class DesksService {
  constructor(
    @InjectModel('Desk') private deskModel: Model<DeskDocument>,
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
  ) {}
  async createDesk(
    createDeskDto: CreateDeskDto & { userId: string },
  ): Promise<Desk> {
    const newDesk = new this.deskModel(createDeskDto);

    const desk = await newDesk.save();

    await this.usersService.addDesk(desk, createDeskDto.userId);

    const user = await this.usersService.getById(createDeskDto.userId);

    desk.creator = user._id as any;

    return await desk.save();
  }

  async getAll(userId: string): Promise<DesksListResponseDto> {
    const desks = await this.deskModel.find({ creator: userId });

    return {
      items: desks,
    };
  }

  async getById(id: string, userId: string): Promise<DeskResponseDto> {
    const deskDocument = await this.deskModel.findById(id).catch(() => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    });

    if (deskDocument.creator.toString() !== userId) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const tasks = await this.tasksService.getTasksByDesk(id);

    const columns = deskDocument.columns.map((column) => ({
      _id: column._id,
      name: column.name,
      color: column.color,
      tasks: tasks
        .filter((task) => task.column.toString() == column._id)
        .map((task) => ({
          title: task.title,
          description: task.description,
          _id: task._id,
        })),
    }));

    const desk: DeskResponseDto = {
      _id: deskDocument._id,
      name: deskDocument.name,
      columns,
    };

    return desk;
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
