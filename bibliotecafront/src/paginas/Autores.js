import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getAutores } from "../servico/api";
import { Link } from "react-router-dom";

export default function Autores(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getAutores()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de autores" 
             descricao="Gerencie a lista de autores dos livros neste local."
             rota="/autor"/>

            <Table striped>
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
    );
}