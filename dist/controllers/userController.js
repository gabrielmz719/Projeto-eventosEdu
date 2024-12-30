"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
let users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@example.com' },
];
const getUsers = (req, res) => {
    res.status(200).json(users);
};
exports.getUsers = getUsers;
const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios!' });
    }
    const newUser = { id: Date.now(), name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
