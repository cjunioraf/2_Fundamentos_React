import React from 'react'

const Button = () => {    
    //Função - Inicio ---------- 
    const handleClick = () => {
        console.log("CLICOU!")
    }
    //Função - Fim -------------
    const handleClickP = (num) => {
        console.log("CLICOU!", num)
    }

  return (
    <>
        {/* chama a função direta pq não tem nenhum parâmetor  */}
        <button onClick={handleClick}>Clique Aqui</button>   
        {/* chama função an}onima para poder passar parÂmetro junto para função     */}
        <button onClick={() => handleClickP(5)}>Clique Aqui Num</button>
    </>
  )
}

export default Button