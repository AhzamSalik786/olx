import { Controller ,Post, Body, Get, Param} from '@nestjs/common';
import { ProductsService} from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
        @Post()
        async addOrder(
            @Body('user') prouser: object ,
            @Body('name') proname: string ,
            @Body('type') protype: string ,
            @Body('info') proinfo: string ,
            @Body('description') prodescription: string ,
            @Body('price') proprice: number ,
            @Body('runingKilometers') proruningKilometers: number ,
            @Body('date') prodate: string ,
            @Body('addressLocation') proaddressLocation: object ,
            @Body('currentLocation') procurrentLocation: object ,
            @Body('images') proimages: object ,
        ){
            const generateId = await this.productService.insertProduct(
                prouser,
               proname,
               protype,
               proinfo,
               prodescription,
               proprice,
               proruningKilometers,
               prodate,
               proaddressLocation,
               procurrentLocation,
               proimages,
            );
            return { id: generateId}
        }
        @Get()
        async getProducts() {
          const products = await this.productService.getProducts();
          return products;
        }

       
}
