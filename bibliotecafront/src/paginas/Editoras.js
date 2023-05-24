import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getEditoras } from "../servico/api";
import { Link } from "react-router-dom";

export default function Editoras(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getEditoras()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de Editoras" 
             descricao="Gerencie a lista de Editoras dos livros neste local."
             rota="/editora"/>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Editora</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/editora/${d.ideditora}`}>Ver</Button>
                            </td>
                            <td>{d.editora}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}