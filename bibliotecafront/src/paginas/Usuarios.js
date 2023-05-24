import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getUsuarios } from "../servico/api";
import { Link } from "react-router-dom";

export default function Usuarios(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getUsuarios()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de Usuarios" 
             descricao="Gerencie a lista de Usuarios dos livros neste local."
             rota="/usuario"/>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/usuario/${d.idusuario}`}>Ver</Button>
                            </td>
                            <td>{d.nome}</td>
                            <td>{d.email}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}