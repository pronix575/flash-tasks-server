import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';

@Module({
  controllers: [DesksController],
  providers: [DesksService],
  imports: [AuthModule],
})
export class DesksModule {}
