import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Auth, UserId } from 'src/auth/auth.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { getUserDto } from './utils';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  @ApiResponse({ type: UserResponseDto })
  @Auth()
  async getMe(@Req() request: Request<void, { userId: string }>) {
    const user = await this.userService.getById(request.body.userId);

    return getUserDto(user);
  }

  @Patch()
  @Auth()
  patchUser(@Body() patchUserDto: PatchUserDto, @UserId() userId: string) {
    return this.userService.patch(patchUserDto, userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ type: UserResponseDto })
  @Auth()
  getOne(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
