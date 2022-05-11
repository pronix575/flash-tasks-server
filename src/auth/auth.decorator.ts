import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthInterceptor } from './auth.interceptor';

export function Auth() {
  return applyDecorators(UseInterceptors(AuthInterceptor), ApiBearerAuth());
}

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const request: Request<void, { userId: string }> = ctx
    .switchToHttp()
    .getRequest();
  const userId = request.body.userId;

  return userId;
});
