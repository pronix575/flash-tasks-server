import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { UsersModule } from 'src/users/users.module';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';
import { DeskSchema } from './schemas/desk.schema';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TasksModule,
    MongooseModule.forFeature([
      {
        name: 'Desk',
        schema: DeskSchema,
      },
    ]),
  ],
  controllers: [DesksController],
  providers: [DesksService],
})
export class DesksModule {}
