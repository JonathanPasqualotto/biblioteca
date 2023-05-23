import axios from "axios"

const URLBASEAPI = 'http://localhost:4000/'

// REQUISIÇÕES PADRÕES

// PESQUISA
const requisicaoGet = async (rota) => {
    const { data } = await axios.get(URLBASEAPI + rota)         // { data } PARA DESCONTRUÇÃO DO JSON COM A RESPOSTA
    return data
}

// DELETAR
const requisicaoDelete = async (rota) => {
    const { data } = await axios.delete(URLBASEAPI + rota)         // { data } PARA DESCONTRUÇÃO DO JSON COM A RESPOSTA
    return data
}

// INSERIR
const requisicaoPost = async (rota, jsonBody) => {
    const { data } = await axios.post(URLBASEAPI + rota, jsonBody)         // { data } PARA DESCONTRUÇÃO DO JSON COM A RESPOSTA
    return data
}

// ALTERAR
const requisicaoPut = async (rota, jsonBody) => {
    const { data } = await axios.put(URLBASEAPI + rota, jsonBody)         // { data } PARA DESCONTRUÇÃO DO JSON COM A RESPOSTA
    return data
}

// METODOS ESPECIFICOS

// Autores

export const getAutores = async () => {
    const dados = await requisicaoGet('autor')
    return dados
}


export const getAutor = async (id) => {
    const dados = await requisicaoGet(`autor/${id}`)
    return dados
}

export const excluirAutor = async (id) => {
    const dados = await requisicaoDelete(`autor/${id}`)
    return dados
}

export const inserirAutor = async (autor) => {
    let json = {
        "autor": autor                      // SE AS DUAS TIVEREM O MESMO NOME PODE SER SOMENTE A VARIAVEL QUE É RECEBIDA
    }

    const dados = await requisicaoPost('autor', json)
    return dados
}

export const alterarAutor = async (id,autor) => {
    let json = {
        autor                   // PODE SER ASSIM SEGUINDO O DE CIMA
    }

    const dados = await requisicaoPut(`autor/${id}`, json)
    return dados
}


//  Categorias

export const getCategorias = async () => {
    const dados = await requisicaoGet('categoria')
    return dados
}


export const getCategoria = async (id) => {
    const dados = await requisicaoGet(`categoria/${id}`)
    return dados
}

export const excluirCategoria = async (id) => {
    const dados = await requisicaoDelete(`categoria/${id}`)
    return dados
}

export const inserirCategoria = async (categoria) => {
    let json = {
        "categoria": categoria                      
    }

    const dados = await requisicaoPost('categoria', json)
    return dados
}

export const alterarCategoria = async (id,categoria) => {
    let json = {
        categoria                   
    }

    const dados = await requisicaoPut(`categoria/${id}`, json)
    return dados
}

// Pessoas

export const getPessoas = async () => {
    const dados = await requisicaoGet('pessoa')
    return dados
}


export const getPessoa = async (id) => {
    const dados = await requisicaoGet(`pessoa/${id}`)
    return dados
}

export const excluirPessoa = async (id) => {
    const dados = await requisicaoDelete(`pessoa/${id}`)
    return dados
}

export const inserirPessoa = async (pessoa, email, telefone) => {
    let json = {
        pessoa,
        email,
        telefone,                      
    }

    const dados = await requisicaoPost('pessoa', json)
    return dados
}

export const alterarPessoa = async (id, pessoa, email, telefone) => {
    let json = {
        pessoa,
        email,
        telefone                   
    }

    const dados = await requisicaoPut(`pessoa/${id}`, json)
    return dados
}


// Livros

export const getLivros = async () => {
    const dados = await requisicaoGet('livro')
    return dados
}


export const getLivro = async (id) => {
    const dados = await requisicaoGet(`livro/${id}`)
    return dados
}

export const excluirLivro = async (id) => {
    const dados = await requisicaoDelete(`livro/${id}`)
    return dados
}

export const inserirLivro = async (titulo,ano,paginas,edicao,resuno,emprestado,idcategoria,ideditora) => {
    let json = {
        titulo,
        ano,
        paginas,
        edicao,
        resuno,
        emprestado,
        idcategoria,
        ideditora                      
    }

    const dados = await requisicaoPost('livro', json)
    return dados
}

export const alterarLivro = async (id,titulo,ano,paginas,edicao,resuno,emprestado,idcategoria,ideditora) => {
    let json = {
        titulo,
        ano,
        paginas,
        edicao,
        resuno,
        emprestado,
        idcategoria,
        ideditora                   
    }

    const dados = await requisicaoPut(`livro/${id}`, json)
    return dados
}