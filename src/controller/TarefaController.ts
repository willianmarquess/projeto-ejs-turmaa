import { Request, Response } from "express";
import { inserir, Tarefa } from "../model/Tarefa";

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

export {
    cadastrar,
    abrirCadastro
}