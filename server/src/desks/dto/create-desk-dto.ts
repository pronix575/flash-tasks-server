import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

export class CloumnDto {
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

  @ApiProperty({ type: [CloumnDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMaxSize(6)
  @Type(() => CloumnDto)
  columns: CloumnDto[];
}
