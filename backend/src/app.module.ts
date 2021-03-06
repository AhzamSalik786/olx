import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ProductsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://olx:olx@cluster0.ay5w4.mongodb.net/olx?retryWrites=true&w=majority'
       ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
