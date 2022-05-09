import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthInterceptor } from './auth.interceptor';

export function Auth() {
  return applyDecorators(UseInterceptors(AuthInterceptor), ApiBearerAuth());
}
