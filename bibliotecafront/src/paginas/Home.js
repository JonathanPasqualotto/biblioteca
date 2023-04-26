import { Row, Col, Button } from "react-bootstrap"
import CardLivro from "../componentes/CardLivro"

export default function Home(){
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button className="espaco">Categoria 1</Button>
                    <Button className="espaco">Categoria 2</Button>
                    <Button className="espaco">Categoria 3</Button>
                </Col>
            </Row>

            <Row>
                <CardLivro titulo="Programação Web" ano="2022" editora="saraiva"/>
                <CardLivro />
                <CardLivro />
                <CardLivro />
                <CardLivro />
            </Row>

        </>
    )
}