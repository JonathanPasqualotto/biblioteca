import { Alert, Button } from 'react-bootstrap';

export default function CabecalhoListagem(props) {
  return (
    <Alert variant="success">
      <Alert.Heading>{props.titulo}</Alert.Heading>
      <p>{props.descricao}</p>
      <hr /> 
      <Button>Adicionar</Button>  
    </Alert>
  );
}