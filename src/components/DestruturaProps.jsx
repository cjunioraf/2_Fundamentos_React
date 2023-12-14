//rafce - cria a estrutura
const DestruturaProps = ({name, idade}) => {
    //Destructuring => objeto {} / array []     
  return (
    <div>
        <h2>Filho</h2>
        <p>Nome : {name}</p>
        <p>Idade: {idade}</p> 
    </div>
    )
}

export default DestruturaProps