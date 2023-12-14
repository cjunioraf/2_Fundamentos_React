//rafce
import {useState} from 'react'

const UserInfoForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    //função handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        //acessar API via fetch ou axios
        console.log(name, email) 
    }

  return (
    <form onSubmit={handleSubmit}>
        {/*e = elemento input do front / e.target.value = o que está sendo digitado no input, então setá passando para o setName tudo que está sendo digitado*/}
        <input type="text" 
               value={name} 
               onChange={(e) => setName(e.target.value)} 
               placeholder='Digite o seu nome...'
        />        
        {/* {name} */}
        <input type="email" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               placeholder='Digite o seu email...'
        />   
        {email}
        {/* TYPE=SUBMIT - EXECUTA O EVENTO ONSUBMIT DA TAG <FORM> */}
        <button type='submit'>Enviar</button>

    </form>
  )
}

export default UserInfoForm