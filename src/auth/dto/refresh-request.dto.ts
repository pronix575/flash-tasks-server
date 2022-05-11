import { ApiProperty } from '@nestjs/swagger';

export class RefreshRequestDto {
  @ApiProperty({ required: true })
  readonly refresh: string;
}
