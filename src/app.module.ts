import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    UserModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
