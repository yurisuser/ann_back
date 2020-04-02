import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GaleryController } from './galery.controller';
import { GaleryService } from './galery.service';
import { GaleryElement } from './galery.element.entity';
import { GaleryType } from './galery.type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GaleryElement, GaleryType]),
    forwardRef(() => GaleryModule),
],
  controllers: [
    GaleryController,
  ],
  providers: [
    GaleryService,
  ],
})
export class GaleryModule {}
