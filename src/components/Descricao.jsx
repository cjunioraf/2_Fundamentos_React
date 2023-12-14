
const Descricao = (props) => {

    //props = {} objeto
    //propriedades -> chaves dos valores
    //props.name = "Clécio"

  return (
    <div>
        <p>Nome: {props.name}</p>
        <p>Idade: {props.idade} anos</p>
    </div>
  )
}

export default Descricao