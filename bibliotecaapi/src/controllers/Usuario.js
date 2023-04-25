import Usuario from "../models/UsuarioModel.js"

async function listar(req, res) {
    res.json(await Usuario.findAll())
}

async function selecionar(req, res){
    await Usuario.findByPk(req.params.idusuario)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

async function inserir(req, res){
    await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

async function alterar(req, res){
    await Usuario.update({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha},
        {
            where: { idusuario: req.params.idusuario }
        }
    )
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

async function excluir(req, res){
    await Usuario.destroy({
        where: { idusuario: req.params.idusuario }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir }