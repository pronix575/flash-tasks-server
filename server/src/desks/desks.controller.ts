import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth, UserId } from 'src/auth/auth.decorator';
import { DesksService } from './desks.service';
import { DeskResponseDto, DesksListResponseDto } from './dto/desks-list.dto';
import { CreateDeskDto } from './dto/create-desk-dto';

@Controller('desks')
@ApiTags('desks')
export class DesksController {
  constructor(private readonly desksService: DesksService) {}

  @Get()
  @Auth()
  @ApiResponse({ type: DesksListResponseDto })
  getAll(@UserId() userId: string): Promise<DesksListResponseDto> {
    return this.desksService.getAll(userId);
  }

  @Get(':id')
  @Auth()
  @ApiResponse({ type: DeskResponseDto })
  getOne(@Param('id') id: string, @UserId() userId: string) {
    this.desksService.getById(id, userId);
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
