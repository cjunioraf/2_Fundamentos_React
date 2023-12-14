import './App.css'
import BotaoAzul from './components/BotaoAzul'
import BotaoEstilizado from './components/BotaoEstilizado'
import Button from './components/Button'
import ComponPai from './components/ComponPai'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import DestruturaProps from './components/DestruturaProps'
import Estado from './components/Estado'
import Form from './components/Form'
import Greeting from './components/Greeting'
import Header from './components/Header'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import PaiFunction from './components/PaiFunction'
import RendCondicional from './components/RendCondicional'
import TaskList from './components/TaskList'
import UserInfoForm from './components/UserInfoForm'
import Warning from './components/Warning'
import Welcome from './components/Welcome'

function App() {
  
    const arrayTarefa = [{'id':1, 'text':'Tarefa 1'}, {'id':2, 'text':'Tarefa 2'}, {'id':3, 'text':'Tarefa 3'}, {'id':4, 'text':'Tarefa 4'}]

  return (
    <>      
      {/* 6.2 - Componente Header Bom dia usando variável estática*/}
      <Header />
      {/* 6.1 - add componente - comentário dentro do jsx */}
      <Welcome />      
      {/* 6.3 - Componente dentro de Componente*/}
      <ComponPai />
      {/* 6.4 - parâmetro props número passa por um objeto {44}*/}
      <Descricao name='Clécio' idade={44}/>
      {/* 6.5 - Destruturação do props*/}
      <DestruturaProps name="Otto" idade={3} />
      {/* 6.6 - useStates é um HOOK - gerenciador de Status*/}
      <Counter />
      {/* 6.7 - múltiplos estados */}
      <UserInfoForm />
      {/* 6.8 - Eventos  */}
      <Button />
      {/* 6.9 - passando funções de manipulação de eventos com props */}
      <PaiFunction />
      {/* 6.10 - eventos de form  */}
      <Form />
      {/* 6.11 - renderização condicional */}
      <RendCondicional user="Clécio"/>
      {/* 6.12 - Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      {/* 6.13 - Render Nulo */}
      <Warning warning={null} />   
      <Warning warning="Data deve ser informada!" /> 
      {/* 6.14 - Listas e Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5, 6]}/>
      {/* 6.15 - estilos por atributos pouco utilizada*/}
      <BotaoEstilizado />
      {/* 6.16 - estilos globais - arq index.css que é o css global do sistema*/}
      <BotaoAzul />      
      {/* 6.17 - exercício 1*/}
      <Greeting name="João"/>
      {/* 6.17 - exercício 2*/}
      <Estado />
      {/* 6.17 - exercício 3*/}
      <TaskList tasks={arrayTarefa}/>
    </>
  )
}

export default App
