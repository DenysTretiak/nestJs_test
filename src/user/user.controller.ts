import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('/user')
export class UserController {
  constructor (
    private userService: UserService,
    private configService: ConfigService,
  ) {

  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    console.log(dbUser, 'dbUser');

    const dbHost = this.configService.get<string>('database.host');
    console.log(dbHost, 'dbHost');

    return this.userService.getUser(id);
  }

  @Post()
  addUser(@Body() body: any) {
    return this.userService.addUser(body);
  }

}
