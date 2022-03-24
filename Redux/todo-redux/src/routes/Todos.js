import React from 'react'
import { useSelector } from 'react-redux'
import { AddTodo } from '../components/AddTodo'
import { useFirestoreConnect } from 'react-redux-firebase'
import { TodoItem } from '../components/TodoItem'


export const Todos = () => {
    const {displayName,uid}=useSelector((state)=>state.firebase.auth);
    useFirestoreConnect({
        collection:`users/${uid}/todos`,
        storeAs:'todos',
    })
    const todos=useSelector((state)=>state.firestore.data.todos);
    console.log(todos);
    return (
        <div>
            <h3>Hello {displayName}</h3>
            <h4>Todos</h4>
            <AddTodo />
            <ul
                style={{
                    listStyleType:"none",
                }}
            >
                {
                    todos &&
                    Object.values(todos).map((todo)=>(
                       <li>
                           <TodoItem 
                               title={todo.title}
                               isDone={todo.isDone}
                               todoID={todo.todoID}
                           />
                       </li> 
                    ))
                }
            </ul>
        </div>
    )
}
