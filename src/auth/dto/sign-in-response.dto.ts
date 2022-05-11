import { ApiProperty } from '@nestjs/swagger';

export class SignInResponseDto {
  @ApiProperty({ required: true })
  readonly access: string;

  @ApiProperty({ required: true })
  readonly refresh: string;
}
