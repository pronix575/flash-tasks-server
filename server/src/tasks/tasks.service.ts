import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeskDocument } from 'src/desks/schemas/desk.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<TaskDocument>,
    @InjectModel('Desk') private readonly deskModel: Model<DeskDocument>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto, userId: string) {
    const desk = await this.deskModel
      .findById(createTaskDto.deskId)
      .catch(() => {
        throw new HttpException('No such a desk', HttpStatus.NOT_FOUND);
      });

    if (!desk) {
      throw new HttpException('Desk not found', HttpStatus.NOT_FOUND);
    }

    const newTask = new this.taskModel({
      title: createTaskDto.title,
      description: createTaskDto.description,
      creator: userId,
      desk: createTaskDto.deskId,
      column: createTaskDto.columnId,
    });

    const task = await newTask.save().catch(() => {
      throw new HttpException('No such a desk column', HttpStatus.NOT_FOUND);
    });

    desk.columns = desk.columns.map((elem) =>
      elem._id === createTaskDto.columnId
        ? { ...elem, tasks: [...elem.tasks, task._id] }
        : elem,
    );

    return task;
  }
}
