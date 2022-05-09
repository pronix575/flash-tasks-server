import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/hashPassword';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly userService: UsersService;

  async login(signInPayload: SignInDto) {
    const user = await this.userService.getByEmail(signInPayload.email);

    const isPasswordCorrect = comparePasswords(
      signInPayload.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException("Password doesn't match", HttpStatus.FORBIDDEN);
    }

    return 'success';
  }
}
