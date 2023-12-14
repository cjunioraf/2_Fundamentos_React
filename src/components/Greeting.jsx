const Greeting = ({name}) => {

    if(!name){
        return null;
    }

  return (
    <div>
        <h1>Olá, {name}!</h1>
    </div>
  )
}

export default Greeting