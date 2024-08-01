import { TodoButton } from "./clientside";

export const TodoList=({title,description,id,completed})=>{
    
    return(
        <div className="todo">
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
           <TodoButton id={id} completed={completed}/>
        </div>


    )
}