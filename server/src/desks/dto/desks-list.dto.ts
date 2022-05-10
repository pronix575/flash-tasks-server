import { ApiProperty } from '@nestjs/swagger';
import { List } from 'src/types';
import { DeskTinyResponseDto } from './desk-tiny-response.dto';

export class DesksListResponseDto implements List<DeskTinyResponseDto> {
  @ApiProperty({ type: [DeskTinyResponseDto] })
  items: DeskTinyResponseDto[];
}
