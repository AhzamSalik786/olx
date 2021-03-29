import { Controller ,Post, Body, Get, Param, Query ,Req} from '@nestjs/common';
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
        async getProducts(@Query() param) {
          const products = await this.productService.getProducts(param);
          return products;
        }

//         @Get('p2p')
//   async getTotalPeerToPeerTransactions(
//     @Req() request: Request,
//     @Query() param
//   ) {
//     return this.metricesService.getPeerToPeerTransaction(request.body, param);
//   }
// 3:42
// if (
//         param.order &&
//         param.order.toLowerCase() === 'asc' &&
//         !param.start &&
//         !param.end
//       )
        
 
        @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }

       
}


