import { ApiProperty } from '@nestjs/swagger';
import { Id } from 'src/types';

export class ColumnTinyResponseDto extends Id {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  color?: string;
}

export class DeskTinyResponseDto extends Id {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ type: [ColumnTinyResponseDto] })
  columns: ColumnTinyResponseDto[];
}
