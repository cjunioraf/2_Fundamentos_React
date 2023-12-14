import {useState} from 'react'

const Form = () => {

    const[value, setValue] = useState("")
    //função 
    const handleSubmit = (event) => {        
        event.preventDefault()
        //manipulaçaõ de dados  
        //validação dos dados
        //calculos
        //envio para o servidor via API
        //loading
        //mensagens em geral  
        console.log("formulário enviado: ", value) 

    } 

  return (
    <form onSubmit={handleSubmit}>
        {/* AQUI CHAMA A FUNÇÃO handleSubmit */}
        <input type="text" 
               value={value} 
               onChange={(e) => {setValue(e.target.value)}} 
               placeholder='Preencha o campo' 
        />        
        {/* AQUI NO EVENTO CLICK DO BOTÃO CHAMA O ONSUBMIT DA TAG FORM  */}
        <button type='submit'>Enviar Form</button>
    </form>
  )
}

export default Form