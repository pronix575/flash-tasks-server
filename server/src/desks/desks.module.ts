import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { UsersModule } from 'src/users/users.module';
import { DesksController } from './desks.controller';
import { DesksService } from './desks.service';
import { Desk, DeskSchema } from './schemas/desk.schema';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forFeature([
      {
        name: Desk.name,
        schema: DeskSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [DesksController],
  providers: [DesksService],
})
export class DesksModule {}
