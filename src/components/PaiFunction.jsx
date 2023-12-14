import React from 'react'
import FilhoFunction from './FilhoFunction'

const PaiFunction = () => {  
    //função - handleChildClick 
    const handleChildClick = () => {
        console.log('Clicou no botão do componente Filho!')
    }

  return (
    // CHAMANDO O COMPONENTE FILHO QUE É ONDE TEM O BOTÃO
    // onChildClick É O PARÂMETRO QUE RETORNARÁ DO COMP. FILHO PARA O COMP.PAI O EVENTO DE CLICK DO BOTÃO NO COMP. FILHO.
    <FilhoFunction onChildClick={handleChildClick} />
   )

}

export default PaiFunction