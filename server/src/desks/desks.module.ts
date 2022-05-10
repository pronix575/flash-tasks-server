import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TaskSchema } from 'src/tasks/schemas/task.schema';
import { UserSchema } from 'src/users/schemas/user.schema';
import { UsersModule } from 'src/users/users.module';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';
import { DeskSchema } from './schemas/desk.schema';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forFeature([
      {
        name: 'Desk',
        schema: DeskSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [DesksController],
  providers: [DesksService],
})
export class DesksModule {}
