import { Router, Request, Response, NextFunction, response } from 'express';
import * as validator from 'express-validator/check';
import { UserStoreValidator } from '../validators/userValidator';
import UserController from '../controllers/userController';

class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post('/', UserStoreValidator, this.routes);
        this.router.get('/', this.routes);
    }

    private async routes(req: Request, res: Response, next: NextFunction) {
        // res.setHeader("Content-Type", "text/event-stream");
        // res.setHeader("Cache-Control", "no-cache");

        const errors = validator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        switch (req.method) {
            case 'POST':
                return UserController.store(req, res, next);
            case 'GET':
                return UserController.show();
            case 'PUT':
                return UserController.update();
            case 'DELETE':
                return UserController.destroy();
        }
    }
}

export default UserRoutes;
