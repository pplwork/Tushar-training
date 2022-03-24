import React from 'react'
import '../App.css'

interface IProps {
    people: {
        name: string
        age: number
        note?: string
    }[]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="list-item">
                    <span className="list-item__name">{person.name}</span>
                    <span className="list-item__age">{person.age}</span>
                    <span className="list-item__note">{person.note}</span>
                </li>
            )
        })
    }

    return (
        <ul className="list">
            {renderList()}
        </ul>
    )
}

export default List;
