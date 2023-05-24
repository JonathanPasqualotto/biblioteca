import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getLivros } from "../servico/api";
import { Link } from "react-router-dom";

export default function Livros(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getLivros()
            setDados(resposta)
        }

        carregarDados()
    }, []);

    return (
        <>
            <CabecalhoListagem titulo="Cadastro de Livros" 
             descricao="Gerencie a lista de livros neste local."
             rota="/livro"/>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>#</th>
                        <th>Livro</th>
                        <th>Ano</th>
                        <th>Categoria</th>
                        <th>Editora</th>
                        <th>Numero Edição</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i)=>(
                        <tr key={i}>
                            <td>
                                <Button as={Link} to={`/livro/${d.idlivro}`}>Ver</Button>
                            </td>
                            <td>
                                <Button as={Link} to={`/livroautorlivro/${d.idlivro}`}>Autor</Button>
                            </td>
                            <td>{d.titulo}</td>
                            <td>{d.ano}</td>
                            <td>{d.idcategoria}</td>
                            <td>{d.ideditora}</td>
                            <td>{d.edicao}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </Table>
        </>
    );
}