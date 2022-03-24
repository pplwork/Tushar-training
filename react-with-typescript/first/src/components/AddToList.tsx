import React from 'react'
import '../App.css';
import {IState as Props} from '../App';

interface IProps {
    people:Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

export const AddToList:React.FC<IProps> = ({people,setPeople}) => {

    const [inputs,setInputs]=React.useState({
        name:"",
        age:"",
        note:""
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
        console.log(inputs);
    }

    const handleClick = ():void =>{
        if(!inputs.name||!inputs.age||!inputs.note){
            return
        }
        setPeople([
            ...people,
            {
                name:inputs.name,
                age:parseInt(inputs.age),
                note:inputs.note,
            }
        ]);

        setInputs({
            name:"",
            age:"",
            note:""
        })
    }
    return (
        <div className='addToList'>
                <input type="text" className='form-input' placeholder='Name' value={inputs.name} onChange={handleChange} name="name"/>
                <input type="text" className='form-input' placeholder='Age' value={inputs.age} onChange={handleChange} name="age"/>
                <input type="text" className='form-input' placeholder='Note' value={inputs.note} onChange={handleChange} name="note"/>
                <button className='form-button' onClick={handleClick}>Add User</button>
        </div>
    )
}
