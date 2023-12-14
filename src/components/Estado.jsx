import {useState} from 'react'

const Estado = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <p>Voçê clicou {count} vezes.</p>
        <button onClick={() => (setCount(count + 1))}>Click p/+</button>
        <button onClick={() => (setCount(count - 1))}>Click p/-</button>
    </div>
  )
}

export default Estado