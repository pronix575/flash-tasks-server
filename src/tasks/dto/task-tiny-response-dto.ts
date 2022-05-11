import { ApiProperty } from '@nestjs/swagger';
import { Id } from 'src/types';

export class TaskTinyResponseDto extends Id {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
