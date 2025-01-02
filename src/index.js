"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoutes_1 = require("./routes/userRoutes");
var app = (0, express_1.default)();
// Middleware para interpretar o corpo das requisições como JSON
app.use(express_1.default.json());
// Usando as rotas de usuário
app.use('/api/users', userRoutes_1.default);
// Definindo a porta do servidor
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor rodando na porta ".concat(PORT));
});
