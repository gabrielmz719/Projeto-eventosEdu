import { Request, Response } from 'express';

import { buscarPorEmail, criarUsuario } from '../models/userModel';
import * as bcrypt from 'bcrypt';

export const registrarUsuário = async(req:Request ,res:Response)=>{
  const {nome, email, senha}= req.body;

  try{
    const usuarioExistente = await buscarPorEmail(email);
    if(usuarioExistente){
      return res.status(400).json({error: "E-mail já cadastrado"});
    }
    //cria hash pra senha 
    const hashedSenha = await bcrypt.hash(senha,10);
    
    //cria novo usuario
    const novoUsuario = await criarUsuario(nome,email,hashedSenha);
   
    //removesenha do retorno
    const {senha:_, ...usuarioSemSenha}= novoUsuario;

    //retorna usuario sem a senha 
    res.status(201).json(usuarioSemSenha);

  }catch(error){
    console.error(error);
    res.status(500).json({ error: "erro ao registrar usuário"});
  }
};