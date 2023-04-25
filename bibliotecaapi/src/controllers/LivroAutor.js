import LivroAutor from "../models/LivroAutorModel.js"

async function listar(req, res){
    const dados = await LivroAutor.findAll()
    res.json(dados)
}

async function selecionar(req, res) {
    const idlivroautor = req.params.idlivroautor

    if (/^\d+$/.test(id)) {
        res.send(await LivroAutor.findByPk(idlivroautor))
    } else{
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function inserir(req, res){
    const idlivro = req.body.idlivro
    const idautor = req.body.idautor

    if (!idlivro || !idautor){
        return res.status(400).json(
            { mensagem: 'Parâmetros obrigatórios não fornecidos. Verifique se o parâmetro "livro" ou "autor" não foi fornecido corretamente.' });
    } else {
        if ((/^\d+$/.test(idlivro)) || (/^\d+$/.test(idautor))) {
            res.send(
                await LivroAutor.create({
                    idlivro: idlivro,
                    idautor: idautor
                }))
        } else {
            res.status(400).send('Parâmetro inválido: Algunas dados devem ser um número')
        }        
    }

}

// async function alterar(req, res) {
//     const idlivroautor = req.params.idlivroautor
//     const idlivro = req.body.idlivro
//     const idautor = req.body.idautor

//     if (!idlivro || !idautor){
//         return res.status(400).json(
//             { mensagem: 'Parâmetros obrigatórios não fornecidos. Verifique se o parâmetro "livro" ou "autor" não foi fornecido corretamente.' });
//     } else {
//         if ((/^\d+$/.test(idlivro)) || (/^\d+$/.test(idautor))) {
//             res.send(
//                 await LivroAutor.update({
//                     idlivro: idlivro,
//                     idautor: idautor},
//                 {
//                     where: { idlivro: idlivro}
//                 })+ ' Alterado(s) com sucesso!')

//             } else {
//                 res.status(400).send('Parâmetro inválido: Algunas dados devem ser um número')
//             }        
//         }
// }

async function excluir(req, res){
    const idexcluir = req.params.idlivroautor

    if (/^\d+$/.test(idexcluir)) {

        res.send(await LivroAutor.destroy({
            where: { idlivroautor: idexcluir }
            }) + ' Excluido(s) com sucesso!')

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function autorLivro(req, res){
    res.json(await LivroAutor.findAll({
        where: { idlivro: req.params.idlivro }
    }))
}
  
export default { listar, selecionar, inserir, excluir, autorLivro }