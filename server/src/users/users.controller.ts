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
import { Auth } from 'src/auth/auth.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { getUserDto } from './utils';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiResponse({ type: [UserResponseDto] })
  getAll() {
    return this.userService.getAll();
  }

  @Get('me')
  @ApiResponse({ type: UserResponseDto })
  @Auth()
  async getMe(@Req() request: Request<void, { userId: string }>) {
    const user = await this.userService.getById(request.body.userId);

    return getUserDto(user);
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
}
