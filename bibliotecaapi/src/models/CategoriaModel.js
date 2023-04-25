import { Sequelize } from "sequelize"      //IMPORTA BIBLIOTECA SEQUELIZE
import banco from "../banco.js"             // IMPORTA VARIAVEL DO BANCO    

export default banco.define("categoria",        // EXPORTA A VARIAVEL BANCO, ENVIANDO A TABELA "categoria" POR DEFAULT
    {

        //MAPEANDO A TABELA "categoria"
        idcategoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        categoria: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }
)