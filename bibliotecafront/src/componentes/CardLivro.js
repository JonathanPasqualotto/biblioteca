import { Card, ListGroup, Col, Button } from 'react-bootstrap';

function CardLivro(props) {
  return (
    <Col lg={3} md={6} xs={12}>
        <Card>
        <Card.Img variant="top" src="./card.jpeg" />
        <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text>{props.resumo}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.editora}</ListGroup.Item>
            <ListGroup.Item>{props.ano}</ListGroup.Item>
            <ListGroup.Item>{props.edicao}</ListGroup.Item>
            <ListGroup.Item>{props.paginas}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button>Emprestar</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CardLivro;