import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarPessoa, excluirPessoa, getPessoa, inserirPessoa } from "../servico/api"

export default function PessoaCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams(); 

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [pessoa, setPessoa] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    // executa quando inicia a pagina
    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getPessoa(id)
            setPessoa(resposta.pessoa)
            setEmail(resposta.email)
            setTelefone(resposta.telefone)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const voltar = () => {
        navigate('/pessoas')
    }

    const cancelar = () => {
        voltar();
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarPessoa(id,pessoa,email,telefone)
        }
        else {
            //Post - Inserir
            await inserirPessoa(pessoa,email,telefone)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirPessoa(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Pessoa" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Pessoa</Form.Label>
                    <Form.Control type="text" value={pessoa} onChange={e => setPessoa(e.target.value)}/>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}