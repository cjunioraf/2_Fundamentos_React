const TaskList = ({tasks}) => {
    
    if(!tasks){
        return <p>Não há tarefas a mostrar</p>
    }
    // console.log(tasks) 

  return (
    <div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} value={task.id}>ID: {task.id}, Tarefa: {task.text} </li>
            ))} 
        </ul>                  
    </div>
  )
}

export default TaskList