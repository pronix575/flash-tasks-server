import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiResponse({ type: [UserResponseDto] })
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ type: UserResponseDto })
  getOne(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('me')
  @ApiResponse({ type: UserResponseDto })
  getMe(@Req() request: Request<void, { userId: string }>) {
    return this.userService.getById(request.body.userId);
  }
}
