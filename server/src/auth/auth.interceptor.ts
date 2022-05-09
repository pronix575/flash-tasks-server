import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    try {
      const res = await this.authService.verify(token);

      if (token) {
        request.body['userId'] = res.userId;
      }

      return next.handle();
    } catch (error) {
      throw new HttpException(
        'Please, authorize first',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
