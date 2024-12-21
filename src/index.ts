import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Usando as rotas de usuário
app.use('/api/users', userRoutes);

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
