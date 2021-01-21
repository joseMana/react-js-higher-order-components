import React, { useState, Fragment } from 'react';
import Person from '../../models/Person';


type Props = {
    person: Person;
    onDeleteClick: (id: string) => void
}

const NameTag: React.FC<Props> = (props) => {

    const {firstName, lastName, age} = props.person;
    const [currentAge, setCurrentAge] = useState<number>(age);

    const countUpClickHandler = () => {
        setCurrentAge(currentAge + 1);
    }

    const handleDeletePersonClick = () => {
        props.onDeleteClick(props.person.id);
    }

    return (
        <Fragment>
            <p>{firstName} {lastName}</p>
            <div>
                <span>{currentAge}</span> &nbsp;
                <button onClick={countUpClickHandler}>age up</button> 
                <button onClick={handleDeletePersonClick}>Delete Person</button>
            </div>
        </Fragment>
    )
}

export default NameTag;