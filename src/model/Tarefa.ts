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

async function buscar() {
    const { rows } = await conn.query('SELECT * FROM tarefa;');
    return rows;
}

async function deletar(id: string) {
    await conn.query('DELETE FROM tarefa WHERE id = $1', 
        [
            id
        ]
    );
}

async function buscarPorId(id: string) {
    const { rows } = await conn.query(
        'SELECT * FROM tarefa WHERE id = $1;',
        [ id ]
    );
    return rows[0];
}

export {
    Tarefa,
    inserir,
    buscar,
    deletar,
    buscarPorId
}