import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  @Post()
  @Auth()
  createTask() {}

  @Get()
  @Auth()
  getAll() {}
}
