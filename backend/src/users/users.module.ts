import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.model';


@Module({
  imports : [
    MongooseModule.forFeature([{
      name: 'User', schema: UserSchema}]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UsersModule {}
