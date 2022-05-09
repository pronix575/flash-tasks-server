import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RefreshRequestDto } from './dto/refresh-request.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    type: SignInResponseDto,
  })
  login(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
    return this.authService.login(signInDto);
  }

  @Post('refresh')
  @ApiResponse({
    type: SignInResponseDto,
  })
  refresh(@Body() refreshPayload: RefreshRequestDto) {
    return this.authService.refresh(refreshPayload);
  }
}
