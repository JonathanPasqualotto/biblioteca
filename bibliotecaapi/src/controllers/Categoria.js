import Categoria from "../models/CategoriaModel.js"     // IMPORTA MODEL


async function listar(req, res) {                   //SELECIONA TODOS
    const dados = await Categoria.findAll()
    res.json(dados)
}

async function selecionar(req, res) {                   //SELECIONA UM SÓ
    await Categoria.findByPk(req.params.idcategoria)        //PROCURA PELA CHAVE PRIMARIA
        .then(result => res.json(result))                   // RETORNA A VARIAVEL "result" COMO JSON COM OS DADOS (STATUS PADRAO É 200)
        .catch(err => res.status(400).json(err))            // RETORNA ERRO COM STATUS 400 POR PADRAÇÃO
}

async function inserir(req, res) {                   
    await Categoria.create({
        categoria: req.body.categoria})                 // DEVE SER ADICIONADO TODOS OS CAMPOS A SERREM ADICIONADOS, PRINCIPALMENTE OS QUE SÃO KEY
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}

async function alterar(req, res) {
    await Categoria.update({
        categoria: req.body.categoria},                         //PARAMETRO A SER ALTERADO
        {
            where: { idcategoria: req.params.idcategoria }      // PARA O UPDATE PRECISA DE WHERE PARA SELECIONAR O CAMPO CERTO A SER ALTERADO
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}

async function excluir(req, res) {
    await Categoria.destroy({
        where: { idcategoria: req.params.idcategoria }          // MESMO QUE O UPDATE
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir }