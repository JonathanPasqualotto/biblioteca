import Pessoa from "../models/PessoaModel.js"


async function  listar(req, res){
    const dados = await Pessoa.findAll()
    res.json(dados)
}

async function selecionar(req,res){
   //await Pessoa.findByPk(req.params.idpessoa)
        const id = req.params.idpessoa;
        
        // Testa se o id passado é somente numérico
        if (/^\d+$/.test(id)) {
          // Faz o que precisa ser feito se o id for somente números
          res.send(await Pessoa.findByPk(id))
          
        } else {
          // Faz o que precisa ser feito se o id não for somente números
          res.status(400).send('Parâmetro inválido: o ID deve ser um número');
        }
      

    //.then(result => res.json(result))
    //.catch(err => res.status(400).json(err));
}

async function inserir(req, res) {
    await Pessoa.create({ 
            pessoa: req.body.pessoa,
            email: req.body.email,
            telefone: req.body.telefone
            })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}

async function alterar(req, res){
    await Pessoa.update({
        pessoa: req.body.pessoa,
        email: req.body.email,
        telefone: req.body.telefone},
        {
            where: { idpessoa: req.params.idpessoa }
        }
    )
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

async function excluir(req, res){
    await Pessoa.destroy({
        where: { idpessoa: req.params.idpessoa }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

export default { listar, selecionar, inserir, alterar, excluir}