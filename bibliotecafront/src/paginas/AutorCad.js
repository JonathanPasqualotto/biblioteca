import { useParams } from "react-router-dom";
import CabecalhoCadastro from "../componentes/CabecalhoCadastro";
import { Button,Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AutorCad(){

    const { id } = useParams()
    const [autor, setAutor] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:4000/autor/${id}`)
            .then(resposta => setAutor(resposta.data.autor))
            .catch(erro => console.log(erro))
    }, [])

    return(
        <>
            <CabecalhoCadastro titulo="Autor"/>

            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" value={autor}/>
            </Form.Group>

            <Button variant="primary">Salvar</Button>
            <Button variant="secondary">Cancelar</Button>
            <Button variant="danger">Excluir</Button>
            </Form>
        </>
    )
}