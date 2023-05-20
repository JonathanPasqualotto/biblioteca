import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarAutor, excluirAutor, getAutor, inserirAutor } from "../servico/api"

export default function AutorCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [autor, setAutor] = useState('');

    // executa quando inicia a pagina
    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getAutor(id)
            setAutor(resposta.autor)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const voltar = () => {
        navigate('/autores')
    }

    const cancelar = () => {
        voltar();
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarAutor(id, autor)
        }
        else {
            //Post - Inserir
            await inserirAutor(autor)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirAutor(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Autor" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" value={autor} onChange={e => setAutor(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}