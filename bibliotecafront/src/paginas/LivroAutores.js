import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getLivroAutores } from "../servico/api";
import { Link } from "react-router-dom";

export default function LivroAutores(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getLivroAutores()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Autores do Livro" 
           //  descricao="Gerencie a lista de Usuarios dos livros neste local."
             rota="/livroautores"/>

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
                                <Button as={Link} to={`/livroautor/${d.idlivroautor}`}>Excluir</Button>
                            </td>
                            <td>{d.idautor}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}