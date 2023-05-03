import { useEffect, useState } from "react";
import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from "react-bootstrap";
import axios from "axios"
import { Link } from "react-router-dom";

export default function Autores(){

    const [dados, setDados] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:4000/autor')
            .then(resposta => setDados(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    return(
        <>
            <CabecalhoListagem titulo="Cadastro de autores" 
            descricao="Gerencie a lista de autores dos livros neste local"
            rota="/autor" />

            <Table striped="columns">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/autor/${d.idautor}`}>Ver</Button>    
                            </td>
                            <td>{d.autor}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}