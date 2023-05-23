import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarCategoria, excluirCategoria, getCategoria, inserirCategoria } from "../servico/api";

export default function AutorCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [categoria, setCategoria] = useState('');

    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getCategoria(id)
            setCategoria(resposta.categoria)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const cancelar = () => {
        voltar();
    }

    const voltar = () => {
        navigate('/categorias')
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarCategoria(id, categoria)
        }
        else {
            //Post - Inserir
            await inserirCategoria(categoria)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirCategoria(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Categoria" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}