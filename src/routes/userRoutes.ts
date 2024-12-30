import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController';
import pool from '../config/db';

const router: Router = Router();


router.get('/', getUsers);





export default router;
