import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarLivro, excluirLivro, getLivro, inserirLivro } from "../servico/api"

export default function LivroCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [titulo, setLivro] = useState('');
    const [ano, setAno] = useState('');
    const [paginas, setPagina] = useState('');
    const [edicao, setEdicao] = useState('');
    const [resumo, setResumo] = useState('');
    const [emprestado, setEmprestado] = useState('');
    const [idcategoria, setIdcategoria] = useState('');
    const [ideditora, setIdeditora] = useState('');

    // executa quando inicia a pagina
    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getLivro(id)
            setLivro(resposta.titulo)
            setAno(resposta.ano)
            setPagina(resposta.paginas)
            setEdicao(resposta.edicao)
            setResumo(resposta.resumo)
            setEmprestado(resposta.emprestado ? "Ocupado" : "Disponivel") // ? "Ocupado" : "Disponivel"
            setIdcategoria(resposta.idcategoria)
            setIdeditora(resposta.ideditora)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const voltar = () => {
        navigate('/livros')
    }

    const cancelar = () => {
        voltar();
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarLivro(id,titulo,ano,paginas,edicao,resumo,idcategoria,ideditora)
        }
        else {
            //Post - Inserir
            await inserirLivro(titulo,ano,paginas,edicao,resumo,idcategoria,ideditora)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirLivro(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Livro" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Livro</Form.Label>
                    <Form.Control type="text" value={titulo} onChange={e => setLivro(e.target.value)}/>
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="text" value={ano} onChange={e => setAno(e.target.value)}/>
                    <Form.Label>Paginas</Form.Label>
                    <Form.Control type="text" value={paginas} onChange={e => setPagina(e.target.value)}/>
                    <Form.Label>Edição</Form.Label>
                    <Form.Control type="text" value={edicao} onChange={e => setEdicao(e.target.value)}/>
                    <Form.Label>Resumo</Form.Label>
                    <Form.Control type="text" value={resumo} onChange={e => setResumo(e.target.value)}/>
                    <Form.Label>Emprestado</Form.Label>
                    <Form.Control type="text" value={emprestado} onChange={e => setEmprestado(e.target.value)}/>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" value={idcategoria} onChange={e => setIdcategoria(e.target.value)}/>
                    <Form.Label>Editora</Form.Label>
                    <Form.Control type="text" value={ideditora} onChange={e => setIdeditora(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}


/* 
titulo,
ano,
paginas,
edicao,
resumo,
emprestado,
idcategoria,
ideditora,
*/