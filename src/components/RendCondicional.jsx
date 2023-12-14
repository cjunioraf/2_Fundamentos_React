
const RendCondicional = ({user}) => {

    //se tiver usuário exiba uma msg de boas vindas 

  return (
    <div>
        {user && ( <h1>Bem Vindo usuário {user}</h1> )}
    </div>
  )
}

export default RendCondicional