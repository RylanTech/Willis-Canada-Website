import { Router } from 'express';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/create-account', createUser);
router.post('/signin', signInUser);

export default router; 
