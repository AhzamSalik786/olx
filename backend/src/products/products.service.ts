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
    user: object,
    name: string,
    type: string,
    info: string,
    description: string,
    price: number,
    runingKilometers: number,
    date: string,
    addressLocation: object,
    currentLocation: object,
    images: object,
  ) {
    console.log('user', user);
    try {
      const newProduct = new this.productModel({
        user,
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

      // this.productModel.populate(newProduct, { path: 'user' });

      const result = await newProduct.save();
      return result.id as string;
    } catch (error) {
      console.error('this is error ->', error);
    }
  }
  async getProducts() {
    const products = await this.productModel.find().populate('user');
    // console.log(result);
    return products;
    // .map((product) => ({
    //   id: product.id,
    //   user: product.user,
    //   name: product.name,
    //   type: product.type,
    //   info: product.info,
    //   description: product.description,
    //   price: product.price,
    //   runingKilometers: product.runingKilometers,
    //   date: product.date,
    //   addressLocation: product.addressLocation,
    //   currentLocation: product.currentLocation,
    //   images: product.images,
    // }));
  }
  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return  product
           

}

private async findProduct(id: string): Promise<any> {
  let product;
  try {
    product = await this.productModel.findById(id);
  } catch (error) {
    if (!product) {
      throw new NotFoundException('Could Not Find Product.');
    }
  }
  // const productIndex = this.products.findIndex((prod) => prod.id == id);
  // const product = this.products[productIndex];
  return product;
}
}