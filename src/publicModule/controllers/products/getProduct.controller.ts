//generate a controller file for a rest api endpoint to get all products
import { Controller, Get } from '@nestjs/common';
import { ProductService } from '@providers/products/provider/product.provider';


@Controller('products')
export class GetProductController {
  constructor(private readonly productService: ProductService) {}
    @Get()
    async getAllProducts() {
        return this.productService.getAllProductsFromContentful();
    }
}



