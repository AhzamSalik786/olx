import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const ProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    name: { type: String, required: true },
    type: { type: String, required: true },
    info: { type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    runingKilometers: { type: Number, required: true },
    date: { type: String, required: true },
    addressLocation: {
        address: { type: String },
        city: { type: String },
        country: { type: String },
        postalCode: { type: String },
      },
      currentLocation: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
    images : {
        image0 : {type: String, required: true},
        image1 : {type: String, required: true},
        image2 : {type: String, required: true},
        image3 : {type: String, required: true},
        image4 : {type: String, required: true},
        image5 : {type: String, required: true},
    }
    
  
});

export interface Product extends mongoose.Document {
  
    id: string;
    user: object;
    name: string;
    type: string;
    info: string;
    description: string;
    price: number;
    runingKilometers: number;
    date: string;
    addressLocation: {
        address: string;
        city: string;
        country: string;
        postalCode: string;
      };
      currentLocation: {
        latitude: number;
        longitude: number;
      };  
    images: {  
        image0 : string;
        image1 : string;
        image2 : string;
        image3 : string;
        image4 : string;
        image5 : string;
      };
    
}