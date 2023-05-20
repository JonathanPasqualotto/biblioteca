import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categorias(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/categoria')
            .then(resposta => setDados(resposta.data))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de categorias" 
             descricao="Gerencie a lista de categorias dos livros neste local."
             rota="/categoria"/>

            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/categoria/${d.idcategoria}`}>Ver</Button>
                            </td>
                            <td>{d.categoria}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}