import { Router } from 'express';
import { abrirCadastro, cadastrar } from '../controller/TarefaController';

const tarefaRouter = Router();

tarefaRouter.get('/cadastro', abrirCadastro);
tarefaRouter.post('/cadastro', cadastrar);

export {
    tarefaRouter
};



