import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/hashPassword';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(signInPayload: SignInDto): Promise<SignInResponseDto> {
    const user = await this.userService.getByEmail(signInPayload.email);

    const isPasswordCorrect = await comparePasswords(
      signInPayload.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException("Password doesn't match", HttpStatus.FORBIDDEN);
    }

    const tokenPayload = {
      userId: user._id,
    };

    const access = await this.jwtService.signAsync(tokenPayload);
    const refresh = await this.jwtService.signAsync(tokenPayload, {
      expiresIn: '30d',
    });

    return { access, refresh };
  }
}
