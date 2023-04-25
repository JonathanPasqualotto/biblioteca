import { Sequelize } from "sequelize"
import banco from "../banco.js"

export default banco.define("livro",
{
    idlivro: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },

    ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: {msg: "Nao é numero"}
        }
    },

    paginas: {
      type: Sequelize.INTEGER,
      allowNull: true,  
      validate: {
        isNumeric: true, 
    }
    },

    edicao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: true, 
        }
    },

    resumo: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    
    emprestado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },

    idcategoria: {
        type: Sequelize.INTEGER,
        references: {
            model: "categoria",
            key: "idcategoria"
        },
        allowNull: false,
        validate: {
            isNumeric: true, 
        }
    },

    ideditora: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
            model: "editora",
            key: "ideditora"
        },
        validate: {
            isNumeric: true, 
        }
    }
})

  