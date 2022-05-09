import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { FilesController } from './files.controller';
import { diskStorage } from 'multer';
import { editFileName } from './utils';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
    }),
    AuthModule,
  ],
  controllers: [FilesController],
})
export class FilesModule {}
