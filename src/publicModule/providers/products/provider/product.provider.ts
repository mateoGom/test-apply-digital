//use typeorm for getting all products from database
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '@entity/products/entity/productEntity.entity';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService {
  constructor(

    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
   // @InjectRepository(ProductEntity)
    // private readonly productRepository: Repository<ProductEntity>,
  ) {}
  // async getAllProducts(): Promise<ProductEntity[]> {
  //   return this.productRepository.find();
  // }

 async getAllProductsFromContentful(): Promise<ProductEntity[]> {
    const space = this.configService.get<string>('CONTENTFUL_SPACE_ID');
    const env = this.configService.get<string>('CONTENTFUL_ENVIRONMENT');
    const token = this.configService.get<string>('CONTENTFUL_ACCESS_TOKEN');
    const type = this.configService.get<string>('CONTENTFUL_CONTENT_TYPE');

    const url = `https://cdn.contentful.com/spaces/${space}/environments/${env}/entries?access_token=${token}&content_type=${type}`;

    if (!url) {
      throw new Error('CONTENTFUL_PRODUCTS_URL is not defined');
    }
    const response = await firstValueFrom(
      this.httpService.get<ProductEntity[]>(url),
    );
    return response.data;
  }
}
