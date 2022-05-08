import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  @HttpCode(HttpStatus.CREATED)
  getOne(@Param('id') id: number) {
    return 'getOne' + id;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto.email;
  }
}
