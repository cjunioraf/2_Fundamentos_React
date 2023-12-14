//rafce - cria a estrutura
import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);       
    //variável X não reenderiza, ele não irá somar + 1 ao clicar por isso usamos o useState.
    //let X = 10  
    //console.log("testando")
    //cada vez que clica ele reconstrói o componente

  return (
    <div>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Click AQUI</button>
    </div>    
  )
}

export default Counter