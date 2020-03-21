import { Module, forwardRef } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilesController } from './file.controller';
import { FilesService } from './files.service';
import { Files } from './files.entity';
import { imgPath } from '../config/config';

@Module({
  controllers: [
    FilesController,
  ],
  providers: [
    FilesService,
  ],
  exports: [FilesService],
  imports: [
    TypeOrmModule.forFeature([Files]),
      forwardRef(() => Files),
    MulterModule.registerAsync({
      imports: [FilesModule],
      useFactory: async (fileSrv: FilesService) => ({
        fileFilter: async (req, file, cb) => {
          const isExist = (await fileSrv.getLineFile(file.originalname)) ? false : true;
          cb(null, isExist);
        }
      }),
      inject: [FilesService],
    }),
  ],
})
export class FilesModule {}
