import { Router } from 'express';
import { abrirCadastro, cadastrar, listar, excluir, recuperar } from '../controller/TarefaController';

const tarefaRouter = Router();

tarefaRouter.get('/cadastro', abrirCadastro);
tarefaRouter.post('/cadastro', cadastrar);

tarefaRouter.get('/listar', listar);
tarefaRouter.get('/deletar/:id', excluir);
tarefaRouter.get('/recuperar/:id', recuperar);

export {
    tarefaRouter
};



