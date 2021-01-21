import React, { useState } from "react";

type Props = {
    onAddPerson: (firstName : string, lastName: string, age: number) => void
}

const PersonForm: React.FC<Props> = (props) => {

    const {onAddPerson} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState<number>(0);


    const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newFirstName = e.currentTarget.value;
        setFirstName(newFirstName);
    }

    const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newLastName = e.currentTarget.value;
        setLastName(newLastName);
    }

    const handleAgeChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newAge = +e.currentTarget.value;
        setAge(newAge);
    }

    const handleAddPersonClick = () => {
        onAddPerson(firstName, lastName, age);
    }

    return <div>
        <label>First Name:</label>
        <input type="text"
            onChange={handleFirstNameChange} 
            value={firstName} />
        <br />
        <label>Last Name:</label>
        <input type="text"
            onChange={handleLastNameChange} 
            value={lastName} />
        <br />
        <label>Age:</label>
        <input type="text"
            onChange={handleAgeChange} 
            value={age} />
        <br />
        <button onClick={handleAddPersonClick}>Add Person</button>
        <br/>
    </div>
}

export default PersonForm;