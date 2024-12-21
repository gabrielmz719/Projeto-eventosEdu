import { Request, Response } from 'express';


let users = [
  { id: 1, name: 'João Silva', email: 'joao@example.com' },
  { id: 2, name: 'Maria Oliveira', email: 'maria@example.com' },
];


export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);  
};


export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;  

  
  if (!name || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios!' });
  }

  
  const newUser = { id: Date.now(), name, email };

 
  users.push(newUser);

  
  res.status(201).json(newUser);
};
