import { Sequelize } from "sequelize"
import Emprestimo from "../models/EmprestimoModel.js"
import Livro from "../models/LivroModel.js"

async function listar(req, res){
    const dados = await Emprestimo.findAll() 
    res.json(dados)
}

async function selecionar(req, res) {
    await Emprestimo.findByPk(req.params.idemprestimo)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}

  async function inserir(req, res) {
    const insere = await Emprestimo.create(
        {emprestimo: req.body.emprestimo,
        vencimento: req.body.vencimento,
        devolucao: req.body.devolucao,
        idlivro: req.body.idlivro,
        idpessoa: req.body.idpessoa});
        
    const altera = await Livro.update({          
        emprestado: true},
        {where: { idlivro: req.body.idlivro}});

    return res.json({ Emprestimo: insere, Livro: altera })
}

async function alterar(req, res){
   const altera =  await Emprestimo.update({
        emprestimo: req.body.emprestimo,
        vencimento: req.body.vencimento,
        devolucao: req.body.devolucao,
        idlivro: req.body.idlivro,
        idpessoa: req.body.idpessoa},
        {
            where: { idemprestimo: req.params.idemprestimo }
        })

    const devolve = await Livro.update({
        emprestado: false},
        {where: { idlivro: req.body.idlivro }}    
    )
        return res.json({ Emprestimo: altera, Livro: devolve })
}

async function excluir(req, res) {
    await Emprestimo.destroy({
        where: { idemprestimo: req.params.idemprestimo }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err))
}

async function devolucaoPendente(req, res){
    res.json(await Emprestimo.findAll({
        where: {devolucao: null,}
    }))
}

async function historicoPessoa(req, res){
    res.json(await Emprestimo.findAll({
        where: { idpessoa: req.params.idpessoa }
    }))
}

async function periodo(req, res){
    const datainicio = req.body.datainicio
    const datafim = req.body.datafim

    res.json(await Emprestimo.findAll({
        where: {
            emprestimo: {
                [Sequelize.Op.between]: [ datainicio, datafim],
            } ,
        } ,
    }))
}

export default { listar, selecionar, inserir, alterar, excluir, devolucaoPendente, historicoPessoa, periodo }