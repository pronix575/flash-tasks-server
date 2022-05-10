import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(1, 100)
  description?: string;

  @ApiProperty()
  @IsString()
  deskId: string;

  @ApiProperty()
  @IsString()
  columnId: string;
}
