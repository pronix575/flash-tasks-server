import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class PatchUserDto {
  @ApiProperty({ required: false })
  @Length(4, 25)
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail({ required: false })
  readonly email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(10, 50)
  readonly avatar?: string;
}
