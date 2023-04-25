import express from "express"       //IMPORTA BIBLIOTECA EXPRESS
import banco  from "./src/banco.js"
import bodyParser from "body-parser"
import Categoria from "./src/controllers/Categoria.js"      //IMPORTA A CONTROLLER, NO CASO CONTROLLER DA CATEGORIA
import Autor from "./src/controllers/Autor.js"
import Pessoa from "./src/controllers/Pessoa.js"
import Editora from "./src/controllers/Editora.js"
import Livro from "./src/controllers/Livro.js"
import LivroAutor from "./src/controllers/LivroAutor.js"
import Emprestimo from "./src/controllers/Emprestimo.js"
import Usuario from "./src/controllers/Usuario.js"

var jsonParser = bodyParser.json()

banco.authenticate()        // INICIA A AUTENTICAÇÃO

const app = express() 

app.use(express.json())         // PARA USAR O JSON

app.get('/', (request, response)=>{             // GET PARA PESQUISAR DADOS
    response.json({mensagem:"Olá Mundo!"})
})

/********* FUNÇÕES MODEL CATEGORIA ************/

app.get('/categoria', Categoria.listar)     //LISTA TODAS    // AQUI É A REQUISIÇÃO PELO HTTP.. ONDE O COMEÇO '/categoria', SERIA O CAMINHO DO HTTP PARA A SER SOLICITADO

app.get('/categoria/:idcategoria', Categoria.selecionar)        //ROTA PARM

app.post('/categoria', Categoria.inserir)                       //PARA INSERIR NAO PASSA ROTA, FICA ENCAPSULADO NO CORPO

/********* PODE REPETIR NOMES DESDE QUE TENHA ESPECIFICAÇÃO ************/

app.put('/categoria/:idcategoria', Categoria.alterar) 

app.delete('/categoria/:idcategoria', Categoria.excluir) 
/********* FIM CATEGORIA ************/



/********* FUNÇÕES MODEL AUTOR ************/

app.get('/autor', Autor.listar)
app.get('/autor/:idautor', Autor.selecionar)
app.post('/autor', jsonParser, Autor.inserir)
app.put('/autor/:idautor', jsonParser, Autor.alterar)
app.delete('/autor/:idautor', Autor.excluir)

/********* FIM AUTOR ************/



/********* FUNÇÕES MODEL PESSOA ************/

app.get('/pessoa', Pessoa.listar)
app.get('/pessoa/:idpessoa', Pessoa.selecionar)
app.post('/pessoa', jsonParser, Pessoa.inserir)
app.put('/pessoa/:idpessoa', jsonParser, Pessoa.alterar)
app.delete('/pessoa/:idpessoa', Pessoa.excluir)

/********* FIM PESSOA ************/



/********* FUNÇÕES MODEL EDITORA ************/

app.get('/editora', Editora.listar)
app.get('/editora/:ideditora', Editora.selecionar)
app.post('/editora', jsonParser, Editora.inserir)
app.put('/editora/:ideditora', jsonParser, Editora.alterar)
app.delete('/editora/:ideditora', Editora.excluir)

/********* FIM EDITORA ************/


/********* FUNÇÕES MODEL LIVRO ************/

app.get('/livro', Livro.listar)
app.get('/livro/:idlivro', Livro.selecionar)
app.post('/livro', jsonParser, Livro.inserir)
app.put('/livro/:idlivro', jsonParser, Livro.alterar)
app.delete('/livro/:idlivro', Livro.excluir)
app.get('/livrocategoria/:idcategoria', Livro.livroCategoria)

/********* FIM LIVRO ************/


/********* FUNÇÕES MODEL LIVROAUTOR ************/

app.get('/livroautor', LivroAutor.listar)
app.get('/livroautor/:idlivroautor', LivroAutor.selecionar)
app.post('/livroautor', jsonParser, LivroAutor.inserir)
//app.put('/livroautor/:idlivroautor', LivroAutor.alterar)
app.delete('/livroautor/:idlivroautor', LivroAutor.excluir)
app.get('/livroautorlivro/:idlivro', LivroAutor.autorLivro)

/********* FIM LIVROAUTOR ************/


/********* FUNÇÕES MODEL EMPRESTIMO ************/

app.get('/emprestimo', Emprestimo.listar)
app.get('/emprestimo/:idemprestimo', Emprestimo.selecionar)
app.post('/emprestimo', jsonParser, Emprestimo.inserir)
app.put('/emprestimo/:idemprestimo', jsonParser, Emprestimo.alterar)
app.delete('/emprestimo/:idemprestimo', Emprestimo.excluir)
app.get('/emprestimodevolucao', Emprestimo.devolucaoPendente)
app.get('/emprestimopessoa/:idpessoa', Emprestimo.historicoPessoa)
app.get('/emprestimoperiodo', jsonParser, Emprestimo.periodo)

/********* FIM EMPRESTIMO ************/


/********* FUNÇÕES MODEL USUARIO ************/

app.get('/usuario', Usuario.listar)
app.get('/usuario/:idusuario', Usuario.selecionar)
app.post('/usuario', jsonParser, Usuario.inserir)
app.put('/usuario/:idusuario', jsonParser, Usuario.alterar)
app.delete('/usuario/:idusuario', Usuario.excluir)

/********* FIM USUARIO ************/

app.listen(4000, ()=>{console.log('Servidor Rodando port 4000')})  //PARA USAR A PORTA 4000 COMO PADRÃO E MOSTRAR QUE O SERVIDOR ESTA AQUI

