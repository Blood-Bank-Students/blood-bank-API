import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://carlosmonterrey:Karlos8200@bloodbank.au9pv.mongodb.net/?retryWrites=true&w=majority&appName=Bloodbank', {
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
