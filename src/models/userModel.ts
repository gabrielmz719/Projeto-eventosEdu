import pool from "../config/db";
import { QueryResult } from 'pg';

export interface User{
    id_user: number;
    nome: string;
    email: string;
    senha: string;
    data_registro: Date;
}
// função para buscar por email
export const buscarPorEmail = async (email:string):Promise<User | null> =>{
    const query ='SELECT*FROM   usuarios WHERE email = $1';
    const result: QueryResult<User> = await pool.query(query,[email]);

    //se encontrar o usuário ele é retorbada se nn retorna nulo
    return result.rows.length > 0 ?result.rows[0]:null;
}

//função cria usuários 
export const criarUsuario = async (nome:string, email:string, hashedSenha:string):Promise<User>=>{
    const query = `INSERT INTO usuarios (nome,email,senha,data_registro)
    VALUES ($1,$2,$3,NOW())
    RETURNING *;`;
    const result:QueryResult<User> = await pool.query(query,[nome,email,hashedSenha]);
    return result.rows[0];

}

