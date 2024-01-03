import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/test')
  postMessage(@Body() body): string {
    return body;
  }

  @Put('/test')
  updateMessage(@Body() body): string {
    return body;
  }

  @Delete('/test')
  deleteMessage(@Body() body): string {
    return body;
  }
}
