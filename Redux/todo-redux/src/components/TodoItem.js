import React from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

export const TodoItem = ({ isDone, title, todoID }) => {
    const [isTodoItemDone, setIsTodoItemDone] = React.useState(isDone);
    const firestore = useFirestore();
    const { uid } = useSelector(state => state.firebase.auth);
    console.log(isTodoItemDone);

    const handleChange = (e) =>{
        if(e.currentTarget.type === 'checkbox'){
            setIsTodoItemDone(!isTodoItemDone);
            firestore.collection('users').doc(uid).collection("todos").doc(todoID).update({
                isDone:!isTodoItemDone
            })
        }
    }

    return (
        <div style={{
            textDecoration:isTodoItemDone && "line-through",
            opacity:isTodoItemDone ? 0.5: 1
        }}>

        <input
            type='checkbox'
            name=''
            id=''
            onChange={handleChange}
            checked={isTodoItemDone}
        >
            {title}
        </input>

        </div>
    )
}
