import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { generate } from 'rxjs';
  // import { get } from 'http';
  // import { generate } from 'rxjs';
  
  import { UserService } from './users.service';
  
  @Controller('user' )
  
  export class UserController {
    constructor(private readonly userService: UserService) {}
    //Regeiter a new user
    //@route  POST /user/register
    //@access  public
    @Post('/register')
    async addUser(
      @Body('name') userName: string,
      @Body('email') userEmail: string,
      @Body('phoneNo') userPhoneNo: number,
      @Body('password') userPassword: string,
    ) {
      const generatedId = await this.userService.insertUser(
        userName,
        userEmail,
        userPhoneNo,
        userPassword,
      );
      return { id: generatedId };
    }
    //  Auth user & get token
    //@route  POST /user/login
    //@access  public
  
    @Post('/login')
    async checkUser(
      @Body('email') userEmail: string,
      @Body('password') userpassword: string,
    ) {
      const generatedId = await this.userService.matchUser(
        userEmail,
        userpassword,
      );
      return {
        user: 'user is valid ',
        userData:  generatedId,
       
      };
    }
}