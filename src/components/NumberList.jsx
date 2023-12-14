import React from 'react'
//numbers é um array
const NumberList = ({numbers}) => {
    //for e while não precisa ser utilizado use abaixo instrução 
    //metodos de arrays - filter, map, reduce...

    console.log(numbers)
  return (
    <div>
        {numbers.map((number, index) => (
            // conceito de lista - usando o index do map pq não temos ID no exemplo, caso tenha o ID não use o index.
            <li key={index}>{number}</li>
        ))}
    </div>
  )
}

export default NumberList