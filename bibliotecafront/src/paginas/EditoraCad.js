import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { alterarEditora, excluirEditora, getEditora, inserirEditora } from "../servico/api"

export default function EditoraCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [editora, setEditora] = useState('');

    // executa quando inicia a pagina
    useEffect(()=>{
        const selecionar = async () => {
            let resposta = await getEditora(id)
            setEditora(resposta.editora)
        }

        if (id){
            selecionar()
        }
    }, [id]);

    const voltar = () => {
        navigate('/editoras')
    }

    const cancelar = () => {
        voltar();
    }

    const salvar = async () => {

        if (id){
            //Put - Alterar
            await alterarEditora(id, editora)
        }
        else {
            //Post - Inserir
            await inserirEditora(editora)
        }

        voltar()
    }

    const excluir = async () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;
            await excluirEditora(id)
            voltar()
    }

    return (
        <>
            <CabecalhoCadastro titulo="Editora" id={id}/>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Editora</Form.Label>
                    <Form.Control type="text" value={editora} onChange={e => setEditora(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={()=>salvar()}>Salvar</Button>
                <Button variant="secondary" onClick={()=>cancelar()}>Cancelar</Button>
                <Button variant="danger" onClick={()=>excluir()} hidden={!id}>Excluir</Button>
            </Form>
        </>
    );
}