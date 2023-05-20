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