import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsString, Length } from 'class-validator';

export class ColumnCreateDto {
  @ApiProperty()
  @IsString()
  @Length(3, 30)
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @Length(3, 30)
  color?: string;
}

export class CreateDeskDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ type: [ColumnCreateDto] })
  @IsArray()
  @ArrayMaxSize(6)
  @Type(() => ColumnCreateDto)
  columns: ColumnCreateDto[];
}
