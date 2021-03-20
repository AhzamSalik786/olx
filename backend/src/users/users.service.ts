import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
// import * as bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
import generateToken from './users.generateToken';
@Injectable()
export class UserService {
  private user: User[] = [];

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
  async matchUser( email: string, password: string) {
      
    const user = await this.userModel.findOne({ email })
    console.log("user data", this.userModel)
    console.log("user datapass", user.password)
    if(user && ( await bcrypt.compareSync(password,user.password))  ){
        console.log("login complete", user)
        console.log("Token",  generateToken(user.email))
        return {
            _id: user._id,
                name: user.name,
                email: user.email,
                phoneNo: user.phoneNo,
                token: generateToken(user.email),
              }
            }
      return null

    // } else {
    //         //   res.status(401)
    //           // throw new Error('Invalid email or password')
    //         }

   

  }
 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async insertUser(name: string, email: string, phoneNo: number, password: string) {
    
var hash =  await bcrypt.hashSync(password,10);
console.log("hash", hash)
    const newUser = new this.userModel({
      name,
      email,
      phoneNo,
      password:hash,
    });
    const result = await newUser.save();
    console.log(result);
    // return {id : result.id as string,token: generateToken(result.email)} ;
    return result;
  }

}