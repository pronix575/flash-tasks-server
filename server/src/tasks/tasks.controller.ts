import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, UserId } from 'src/auth/auth.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @Auth()
  createTask(@Body() createTaskDto: CreateTaskDto, @UserId() userId: string) {
    return this.tasksService.createTask(createTaskDto, userId);
  }
}
