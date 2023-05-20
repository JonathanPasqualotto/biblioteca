import { Row, Col, Button } from 'react-bootstrap';
import CardLivro from '../componentes/CardLivro';

export default function Home(){
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button className='espaco'>Categoria 1</Button>
                    <Button className='espaco'>Categoria 2</Button>
                    <Button className='espaco'>Categoria 3</Button>
                </Col>
            </Row>

            <Row>
                <CardLivro titulo="Programação Web com NodeJS" ano="2022" edicao="2" editora="Saraiva"/>
                <CardLivro titulo="HTML 5" ano="2019" edicao="1" editora="Altabooks"/>
            </Row>
        </>
    );
}