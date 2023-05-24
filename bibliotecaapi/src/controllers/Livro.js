import Livro from "../models/LivroModel.js"

async function listar(req, res){
    const dados = await Livro.findAll()
    res.json(dados)
}

async function selecionar(req, res) {
    const id = req.params.idlivro;

    if (/^\d+$/.test(id)) {

        res.send(await Livro.findByPk(id))

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function inserir(req, res){
    const titulo = req.body.titulo
    const ano = req.body.ano
    const paginas = req.body.paginas
    const edicao = req.body.edicao
    const resumo = req. body.resumo
    const emprestado = req.body.emprestado
    const idcategoria = req.body.idcategoria
    const ideditora = req.body.ideditora

    if (!titulo || !ano || !idcategoria || !ideditora) {
        return res.status(400).send(
            alert('Parâmetros obrigatórios não fornecidos. Verifique se o parâmetro "titulo","ano","categoria" ou "editora" não foi fornecido corretamente.'));
    } else {
        if ((/^\d+$/.test(ideditora)) || (/^\d+$/.test(idcategoria)) || (/^\d+$/.test(ano)) || (/^\d+$/.test(paginas)) || (/^\+$/.test(edicao))){        
                res.send(
                    await Livro.create({
                        titulo: titulo,
                        ano: ano,
                        paginas: paginas,
                        edicao: edicao,
                        resumo: resumo,
                        emprestado: emprestado,
                        idcategoria: idcategoria,
                        ideditora: ideditora
                    }))
        } else{
            res.status(400).send(alert('Parâmetro inválido: Algunas dados devem ser um número'))
        }
    }
        
}


async function alterar(req, res){
    const idlivro = req.params.idlivro
    const titulo = req.body.titulo
    const ano = req.body.ano
    const paginas = req.body.paginas
    const edicao = req.body.edicao
    const resumo = req. body.resumo
    const emprestado = req.body.emprestado
    const idcategoria = req.body.idcategoria
    const ideditora = req.body.ideditora

    if (!titulo || !ano || !idcategoria || !ideditora) {
        return res.status(400).json(
            { mensagem: 'Parâmetros obrigatórios não fornecidos. Verifique se o parâmetro "livro","titulo","ano","categoria" ou "editora" não foi fornecido corretamente.' });
    } else{
            res.send(

            await Livro.update({
                titulo: titulo,
                ano: ano,
                paginas: paginas,
                edicao: edicao,
                resumo: resumo,
                emprestado: emprestado,
                idcategoria: idcategoria,
                ideditora: ideditora},
            {
                where: { idlivro: idlivro}
            })+ ' Alterado(s) com sucesso!'

            )
    }
}

async function excluir(req, res){
    const idexcluir = req.params.idlivro

    if (/^\d+$/.test(idexcluir)) {

        res.send(await Livro.destroy({
            where: { idlivro: idexcluir }
            }) + ' Excluido(s) com sucesso!')

    } else {
        res.status(400).send('Parâmetro inválido: o ID deve ser um número')
    }
}

async function livroCategoria(req, res){
    res.json(await Livro.findAll({
        where: { idcategoria: req.params.idcategoria }
    }))
}

export default { listar, selecionar, inserir, alterar, excluir, livroCategoria }