import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Match } from './match.decorator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(4, 25)
  name: string;

  @ApiProperty({ required: true })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Length(8, 30)
  readonly password: string;

  @ApiProperty({ required: true })
  @Length(8, 30)
  @Match('password', { message: 'Passwords must match' })
  readonly passwordConfirmation: string;
}
