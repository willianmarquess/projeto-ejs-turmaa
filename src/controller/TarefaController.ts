import { Request, Response } from "express";
import { inserir, Tarefa, buscar, deletar, buscarPorId } from "../model/Tarefa";

async function cadastrar(req: Request, res: Response) {
    const { nome, descricao, dataEntrega } = req.body;
    let mensagem: string = '';

    if(
        nome === '' || 
        descricao === '' || 
        dataEntrega === ''
    ) {
        mensagem = 'Campos inválidos';
        return res.render('cadastro', { mensagem });
    }

    const tarefa: Tarefa = {
        nome,
        descricao,
        dataEntrega,
        estaEntregue: false
    }

    await inserir(tarefa);

    mensagem = 'Cadastrado com sucesso!';

    res.render('cadastro', { mensagem });
}

function abrirCadastro(req: Request, res: Response) {
    res.render('cadastro', { mensagem: '' });
}

async function listar(req: Request, res: Response) {
    const tarefas = await buscar();
    const result = tarefas?.map(tarefa => {
        return {
            id: tarefa.id,
            nome: tarefa.nome,
            descricao: tarefa.descricao,
            esta_entregue: tarefa.esta_entregue === true ? 'Sim' : 'Não',
            data_entrega: new Date(tarefa.data_entrega).toLocaleDateString()
        }
    });
    res.render('listar', { tarefas: result });
}

async function excluir(req: Request, res: Response) {
    const { id } = req.params;
    await deletar(id);
    await listar(req, res);
}

async function recuperar(req: Request, res: Response) {
    const { id } = req.params;
    const tarefa = await buscarPorId(id);

    if(!tarefa) {
        return res.render('nao-encontrado');
    }

    res.render('atualizar', { tarefa });
}

export {
    cadastrar,
    abrirCadastro,
    listar,
    excluir,
    recuperar
}