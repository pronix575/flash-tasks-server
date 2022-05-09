import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';
import { Desk, DeskSchema } from './schemas/desk.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Desk.name,
        schema: DeskSchema,
      },
    ]),
  ],
  controllers: [DesksController],
  providers: [DesksService],
})
export class DesksModule {}
