export default function CabecalhoCadastro(props){
    return (
        <>
            <h1>{ (props.id) ? 'Alterando ' : 'Adicionando ' } {props.titulo}</h1>
        </>
    );
}