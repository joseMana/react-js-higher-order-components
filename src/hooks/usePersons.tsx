import { useState } from "react";
import Person from "../models/Person";


const usePersons = (initialPersons: Person[]) => {

    const [persons, setPersons] = useState<Person[]>(initialPersons);
    
    return {
        persons,
        removePerson(id: string) {
            const personsCopy = [...persons];
            const personIndex = personsCopy.findIndex((p: Person) => {
                return p.id === id;
            });
    
            personsCopy.splice(personIndex, 1);
            setPersons(personsCopy);
        },
        addPerson(firstName : string, lastName : string, age: number) {
            const person = new Person(firstName, lastName, age);
            const newPersons = [...persons, person];
            setPersons(newPersons);
        }
    }
}

export default usePersons;