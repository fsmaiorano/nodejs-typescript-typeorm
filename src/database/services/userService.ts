import { getManager, getRepository, getConnection } from 'typeorm';
import User from '../../app/models/userModel';
import { User as entity } from '../entity/user.entity';

class UserService {
    async getAll(): Promise<User[]> {
        return await getConnection()
            .getRepository(entity)
            .find();
    }
}

export default new UserService();
