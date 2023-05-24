import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarUsuario, excluirUsuario, getUsuario, inserirUsuario } from "../servico/api"

export default function UsuarioCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // executa quando inicia a pagina
    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getUsuario(id)
            setNome(resposta.nome)
            setEmail(resposta.email)
            setSenha(resposta.senha)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const voltar = () => {
        navigate('/usuarios')
    }

    const cancelar = () => {
        voltar();
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarUsuario(id, nome,email,senha)
        }
        else {
            //Post - Inserir
            await inserirUsuario(nome,email,senha)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirUsuario(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Usuario" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="text" value={senha} onChange={e => setSenha(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}