import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor (@InjectModel(User.name) private userModel: Model<User>) {}
    getUser(id: string) {
        return `returned user with id ${id}`;
    }

    addUser(body: any) {
        const createdUser = new this.userModel(body);
        return createdUser.save();
    }
}
