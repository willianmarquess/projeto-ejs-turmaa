import express from 'express';
import { tarefaRouter } from './routes/TarefaRouter';
import { conn } from './infra/Connection';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './view');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index', { message: 'Hello' });
});

app.use(tarefaRouter);

conn.connect().then(() => {
    console.log('Banco de dados conectado com sucesso!');
    app.listen(3333, () => {
        console.log('Servidor rodando no endereço http://localhost:3333');
    });
}).catch((error) => {
    console.log('Problemas ao conectar com o banco de dados:', error);
});

