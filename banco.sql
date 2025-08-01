create table tarefa(
	id serial primary key,
	nome varchar(50) not null,
	descricao varchar(255) not null,
	data_entrega date not null,
	esta_concluida boolean not null
);