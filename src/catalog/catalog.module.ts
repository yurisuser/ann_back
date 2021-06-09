import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { CatalogElement } from './catalog.element.entity';
import { CatalogType } from './catalog.type.entity';
import { CatalogElementPage } from './catalog.element.page.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CatalogType, CatalogElement, CatalogElementPage]),
    forwardRef(() => CatalogModule),
],
  controllers: [
    CatalogController,
  ],
  providers: [
    CatalogService,
  ],
})
export class CatalogModule {}
