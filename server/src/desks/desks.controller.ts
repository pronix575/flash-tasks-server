import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, UserId } from 'src/auth/auth.decorator';
import { DesksService } from './desks.service';
import { CreateDeskDto } from './dto/create-desk-dto';

@Controller('desks')
@ApiTags('desks')
export class DesksController {
  constructor(private readonly desksService: DesksService) {}

  @Get()
  @Auth()
  getAll() {
    return '';
  }

  @Post()
  @Auth()
  createDesk(@Body() createDeskDto: CreateDeskDto, @UserId() userId: string) {
    return this.desksService.createDesk({
      ...createDeskDto,
      userId,
    });
  }
}
