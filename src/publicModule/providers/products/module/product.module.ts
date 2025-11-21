import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductEntity } from '@entity/products/entity/productEntity.entity';
import { ProductService } from '../provider/product.provider';
import { GetProductController } from '../../../controllers/products/getProduct.controller';

@Module({
  imports: [

    HttpModule,
    ConfigModule,
  ],
  controllers: [GetProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
