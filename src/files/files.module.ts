import { Module, forwardRef } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { memoryStorage } from 'multer';

import { FilesController } from './file.controller';
import { FilesService } from './files.service';
import { Files } from './files.entity';


@Module({
  controllers: [
    FilesController,
  ],
  providers: [
    FilesService,
  ],
  exports: [
    FilesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Files]),
      forwardRef(() => Files),
    MulterModule.register({
      storage: memoryStorage(),
    }),
  ],
})
export class FilesModule {}
