import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
