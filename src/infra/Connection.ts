import { Pool } from "pg";

const conn = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'tarefa-bd'
});

export {
    conn
}