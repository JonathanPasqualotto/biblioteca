import Editora from "../models/EditoraModel.js"

async function listar(req, res){
    const dados = await Editora.findAll()
    res.json(dados)
}

async function selecionar(req, res) {
    const id = req.params.ideditora;

    if (/^\d+$/.test(id)) {

        res.send(await Editora.findByPk(id))

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function inserir(req, res){
    const editora = req.body.editora

    if (!editora) {
        return res.status(400).json(
            { mensagem: 'Parâmetros obrigatórios não fornecidos. Verifique se o parâmetro "editora" foi fornecido corretamente.' });
    } else{

       res.send(await Editora.create({
            editora: editora
        }))
    }
}

async function alterar(req, res){
    const ideditora = req.params.ideditora

    if (/^\d+$/.test(ideditora)) {

        res.send(

            await Editora.update({
            editora: req.body.editora},
            {
                where: { ideditora: ideditora}
            })+ ' Alterado(s) com sucesso!'

            )

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function excluir(req, res){
    const idexcluir = req.params.ideditora

    if (/^\d+$/.test(idexcluir)) {

        res.send(await Editora.destroy({
            where: { ideditora: idexcluir }
            }) + ' Excluido(s) com sucesso!')

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

export default { listar, selecionar, inserir, alterar, excluir }