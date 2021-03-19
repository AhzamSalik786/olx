import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: {type: Number, required: true},
  password: { type: String, required: true },
  
});

export interface User extends mongoose.Document {
  
    id: string;
    name: string;
    email: string;
    phoneNo: number;
    password: string;
 
}