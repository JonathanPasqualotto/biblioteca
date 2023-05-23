import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getPessoas } from "../servico/api";
import { Link } from "react-router-dom";

export default function Pessoas(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getPessoas()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de pessoas" 
             descricao="Gerencie a lista de pessoas neste local."
             rota="/pessoa"/>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pessoa</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/pessoa/${d.idpessoa}`}>Ver</Button>
                            </td>
                            <td>{d.pessoa}</td>
                            <td>{d.email}</td>
                            <td>{d.telefone}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}