import React from "react"
import Person from "../../models/Person";
import usePersons from "../../hooks/usePersons";
import PersonCounter from "./PersonCounter";
import PersonForm from "./PersonForm";
import NameTagList from "./NameTagList";
import { PersonsContext } from "../../context-api/PersonsContext";
import { ThemeContext } from "../../context-api/ThemeContext";

const initialPersons : Person[] = [
    new Person("Peter", "Griffin", 42),
    new Person("Glenn", "Quagmire", 28),
    new Person("Joe", "Swanson", 19),
]

const Dashboard = () => {
    
    const { persons, removePerson, addPerson } = usePersons(initialPersons);
    const handleAddPersonClick = (firstName : string, lastName: string, age: number) => {
        addPerson(firstName, lastName, age);
    }

    const handlePersonDeleteClick = (id: string) => {
        removePerson(id);
    }

    return <div>
        <ThemeContext.Provider value={{
            textColor: "white",
            backgroundColor: "black"
        }}>
        <PersonsContext.Provider value={
            {
                persons: persons
            }
        }>
            <PersonCounter/>
            <hr />
            <PersonForm onAddPerson={handleAddPersonClick} />
            <hr />
            <NameTagList
                onDeleteClick={handlePersonDeleteClick}
            />
        </PersonsContext.Provider>
        </ThemeContext.Provider>
        
    </div>
}

export default Dashboard;