import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { CreateDeskDto } from './dto/create-desk-dto';

@Controller('desks')
@ApiTags('desks')
export class DesksController {
  @Get()
  getAll() {
    return '';
  }

  @Post()
  @Auth()
  createDesk(@Body() createDeskDto: CreateDeskDto) {
    return '';
  }
}
