import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index = list the users - GET
store/create = create a new user - POST
delete = delete a user - DELETE
show = show a user - GET
update = update a user - PATCH (one value) or PUT (all values)
 */
