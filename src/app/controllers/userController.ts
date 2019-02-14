import { NextFunction, Request, Response } from 'express';
import UserService from '../../database/services/userService';

class UserController {
    constructor() {}

    async store(req: Request, res: Response, next: NextFunction) {
        console.log('store');
        let x = await UserService.getAll();
        console.log(x);
    }

    show() {
        console.log('show');
    }

    update() {
        console.log('update');
    }

    destroy() {
        console.log('destroy');
    }
}

export default new UserController();
