import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/hashPassword';
import { RefreshRequestDto } from './dto/refresh-request.dto';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';

interface TokenDto {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(signInPayload: SignInDto): Promise<SignInResponseDto> {
    const user = await this.userService.getByEmail(signInPayload.email);

    if (!user) {
      throw new HttpException(
        'User with that email not found',
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPasswordCorrect = await comparePasswords(
      signInPayload.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException("Password doesn't match", HttpStatus.FORBIDDEN);
    }

    const tokenPayload: TokenDto = {
      userId: user._id,
    };

    const access = await this.jwtService.signAsync(tokenPayload);
    const refresh = await this.jwtService.signAsync(tokenPayload, {
      expiresIn: '30d',
    });

    return { access, refresh };
  }

  async refresh(refreshPayload: RefreshRequestDto): Promise<SignInResponseDto> {
    const res: TokenDto = await this.jwtService.verifyAsync(
      refreshPayload.refresh,
    );

    const user = await this.userService.getById(res.userId);

    if (!user) {
      throw new HttpException(
        'User with that email not found',
        HttpStatus.BAD_REQUEST,
      );
    }

    const tokenPayload: TokenDto = {
      userId: user._id,
    };

    const access = await this.jwtService.signAsync(tokenPayload);
    const refresh = await this.jwtService.signAsync(tokenPayload, {
      expiresIn: '30d',
    });

    return { access, refresh };
  }

  async verify(accessToken: string): Promise<TokenDto> {
    return await this.jwtService.verifyAsync(accessToken);
  }
}
