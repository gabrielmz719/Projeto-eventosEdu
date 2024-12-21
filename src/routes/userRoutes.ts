import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController';

const router: Router = Router();

// Rota para buscar todos os usuários
router.get('/', getUsers);

// Rota para criar um novo usuário



export default router;
