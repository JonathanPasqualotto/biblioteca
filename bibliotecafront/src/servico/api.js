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

export const inserirLivro = async (titulo,ano,paginas,edicao,resumo,idcategoria,ideditora) => {
    let json = {
        titulo,
        ano,
        paginas,
        edicao,
        resumo,
        idcategoria,
        ideditora                      
    }

    const dados = await requisicaoPost('livro', json)
    return dados
}

export const alterarLivro = async (id,titulo,ano,paginas,edicao,resumo,idcategoria,ideditora) => {
    let json = {
        titulo,
        ano,
        paginas,
        edicao,
        resumo,
        idcategoria,
        ideditora                   
    }

    const dados = await requisicaoPut(`livro/${id}`, json)
    return dados
}

// Editora

export const getEditoras = async () => {
    const dados = await requisicaoGet('editora')
    return dados
}


export const getEditora = async (id) => {
    const dados = await requisicaoGet(`editora/${id}`)
    return dados
}

export const excluirEditora = async (id) => {
    const dados = await requisicaoDelete(`editora/${id}`)
    return dados
}

export const inserirEditora = async (editora) => {
    let json = {
        editora              
    }

    const dados = await requisicaoPost('editora', json)
    return dados
}

export const alterarEditora = async (id, editora) => {
    let json = {
        editora                
    }

    const dados = await requisicaoPut(`editora/${id}`, json)
    return dados
}

// Usuarios

export const getUsuarios = async () => {
    const dados = await requisicaoGet('usuario')
    return dados
}


export const getUsuario = async (id) => {
    const dados = await requisicaoGet(`usuario/${id}`)
    return dados
}

export const excluirUsuario = async (id) => {
    const dados = await requisicaoDelete(`usuario/${id}`)
    return dados
}

export const inserirUsuario = async (nome,email,senha) => {
    let json = {
        nome,
        email,
        senha              
    }

    const dados = await requisicaoPost('usuario', json)
    return dados
}

export const alterarUsuario = async (id, nome,email,senha) => {
    let json = {
        nome,
        email,
        senha                
    }

    const dados = await requisicaoPut(`usuario/${id}`, json)
    return dados
}

// Livro Autor

export const getLivroAutores = async () => {
    const dados = await requisicaoGet('livroautor')
    return dados
}


export const getLivroAutor = async (id) => {
    const dados = await requisicaoGet(`livroautor/${id}`)
    return dados
}

export const excluirLivroAutor = async (id) => {
    const dados = await requisicaoDelete(`livroautor/${id}`)
    return dados
}

export const inserirLivroAutor = async (idlivro,idlivroautor) => {
    let json = {
        idlivro,
        idlivroautor              
    }

    const dados = await requisicaoPost('livroautor', json)
    return dados
}