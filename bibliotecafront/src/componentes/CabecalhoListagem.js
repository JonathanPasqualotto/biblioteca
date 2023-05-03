import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CabecalhoListagem(props) {
  return (
    <Alert variant="success">
      <Alert.Heading>{props.titulo}</Alert.Heading>
      <p>{props.descricao}</p>
      <hr /> 
      <Button as={Link} to={props.rota}>Adicionar</Button>  
    </Alert>
  );
}