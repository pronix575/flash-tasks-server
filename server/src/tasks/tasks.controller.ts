import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  @Post()
  @Auth()
  createTask(@Body() createTaskDto: CreateTaskDto) {}
}
