import dotenv from "dotenv"         // IMPORTA BIBLIOTECA DOTENV
import { Sequelize } from "sequelize"       // IMPORTA BIBLIOTECA SEQUELIZE


dotenv.config()     //PARA LER O ARQUIVO .env 

const banco = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        define: {
            timestamps: false,      // PARA NAO SALVAR LOG.. SE NAO TERIA QUE CRIAR COLUNAS NAS TABELAS PARA SALVAR DATA DE MOD. E ALTE.
            freezeTableName: true   // MANTER OS NOMES DA TABELA NO SINGULAR.
        }
    })

    export default banco