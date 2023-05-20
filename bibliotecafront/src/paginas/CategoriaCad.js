import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AutorCad(){
    //Declarando uma variável para utilizar o redirecionamento de tela
    const navigate = useNavigate();

    //Lendo o id recebido na rota
    const { id } = useParams();

    //Variáveis useState para cada campo da tabela, exceto chave primária
    const [categoria, setCategoria] = useState('');

    useEffect(()=>{
        if (id){
            axios.get(`http://localhost:4000/categoria/${id}`)
            .then(resposta => setCategoria(resposta.data.categoria))
            .catch(erro => console.log(erro));
        }
    }, [id]);

    const cancelar = () => {
        navigate('/categorias');
    }

    const salvar = () => {
        let json = {
            "categoria": categoria
        };

        if (id){
            //Put - Alterar
            axios.put(`http://localhost:4000/categoria/${id}`, json)
            .then( navigate('/categorias') )
            .catch(erro => console.log(erro));
        }
        else {
            //Post - Inserir
            axios.post(`http://localhost:4000/categoria`, json)
            .then( navigate('/categorias') )
            .catch(erro => console.log(erro));
        }
    }

    const excluir = () => {
        if (! window.confirm('Deseja excluir o registro agora?'))
            return;

        axios.delete(`http://localhost:4000/categoria/${id}`)
            .then( navigate('/categorias') )
            .catch(erro => console.log(erro));
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