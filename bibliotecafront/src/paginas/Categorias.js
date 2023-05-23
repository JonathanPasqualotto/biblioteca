import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getCategorias } from "../servico/api";
import { Link } from "react-router-dom";

export default function Categorias(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{         // EXECUTA QUANDO ENTRA NA PAGINA
        const carregarDados = async () => {
            let resposta = await getCategorias()
            console.log(resposta)
            setDados(resposta)
        }

        carregarDados()
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