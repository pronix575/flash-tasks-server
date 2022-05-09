import { ApiProperty } from '@nestjs/swagger';
import { Id, List } from 'src/types';

export class ColumnResponseDto extends Id {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  color?: string;
}

export class DeskResponseDto extends Id {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ type: [ColumnResponseDto] })
  columns: ColumnResponseDto[];
}

export class DesksListResponseDto implements List<DeskResponseDto> {
  @ApiProperty({ type: [DeskResponseDto] })
  items: DeskResponseDto[];
}
