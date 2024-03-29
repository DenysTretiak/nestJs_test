import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
//import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ limit: 10, ttl: 60 }]),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
            dbName: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            pass: process.env.DATABASE_PASS,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
