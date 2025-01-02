"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
var users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@example.com' },
];
var getUsers = function (req, res) {
    res.status(200).json(users);
};
exports.getUsers = getUsers;
var createUser = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email;
    if (!name || !email) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios!' });
    }
    var newUser = { id: Date.now(), name: name, email: email };
    users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
