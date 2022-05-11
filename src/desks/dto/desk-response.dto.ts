import { ApiProperty } from '@nestjs/swagger';
import { TaskTinyResponseDto } from 'src/tasks/dto/task-tiny-response-dto';
import { Id } from 'src/types';

export class ColumnResponseDto extends Id {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  color?: string;

  @ApiProperty({ type: [TaskTinyResponseDto] })
  tasks: TaskTinyResponseDto[];
}

export class DeskResponseDto extends Id {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ type: [ColumnResponseDto] })
  columns: ColumnResponseDto[];
}
