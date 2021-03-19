import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
      ) {}

      async insertProduct(
        name: string,
        type: string,
        info: string,
        description: string,
        price: number,
        runingKilometers: number,
        date: string,
        addressLocation: string,
        currentLocation: string,
        images: object,
        ) {
        try {
            const newProduct = new this.productModel({
        name,
        type,
        info,
        description,
        price,
        runingKilometers,
        date,
        addressLocation,
        currentLocation,
        images,
            });
            const result = await newProduct.save();
            return result.id as string
        } catch (error) {
      console.error('this is error ->', error);
            
        }
      }
}
