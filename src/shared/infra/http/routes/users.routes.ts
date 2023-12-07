import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { ListAllUsersController } from '../../../../modules/accounts/useCases/listAllUsers/listAllUsersController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const usersRoutes = Router();

const createUserController = new CreateUserController();

const listAllUsersController = new ListAllUsersController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', ensureAuthenticated, listAllUsersController.handle);

export { usersRoutes };