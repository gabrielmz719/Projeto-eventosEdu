import { Pool } from "pg";
import * as dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


const pool = new Pool({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log("Conexão com o banco bem sucedida!")
    } catch (error) {
        console.log("Erro ao conectar com o banco de dados:",error);
    }
}

testConnection();
process.on("exit", async()=>{
    await pool.end();
    console.log("Conexão do pool encerradas.");
});

export default pool;