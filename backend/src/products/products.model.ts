import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    info: { type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    runingKilometers: { type: Number, required: true },
    date: { type: String, required: true },
    addressLocation : {type: String,  requied: true},
    currentLocation: { type : String, required: true},
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
    name: string;
    type: string;
    info: string;
    description: string;
    price: number;
    runingKilometers: number;
    date: string;
    addressLocation:string;
    currentLocation: string;   
    images: {  
        image0 : string;
        image1 : string;
        image2 : string;
        image3 : string;
        image4 : string;
        image5 : string;
      };
    
}