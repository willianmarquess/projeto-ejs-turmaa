import { conn } from "../infra/Connection";

type Tarefa = {
    nome: string;
    descricao: string;
    dataEntrega: string;
    estaEntregue: boolean;
};

async function inserir(tarefa: Tarefa) {
    await conn.query(
        'INSERT INTO tarefa(nome, descricao, data_entrega, esta_entregue) VALUES ($1, $2, $3, $4);',
        [
            tarefa.nome,
            tarefa.descricao,
            tarefa.dataEntrega,
            tarefa.estaEntregue
        ]
    );
}

export {
    Tarefa,
    inserir
}