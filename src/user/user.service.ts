import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(id: string) {
        return `returned user with id ${id}`;
    }

    addUser(body: any) {
        return 'added user';
    }
}
