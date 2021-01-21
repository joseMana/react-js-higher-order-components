import { uuid } from 'uuidv4';

export default class Person {
    
    id: string;
    firstName: string;
    lastName: string;
    age: number;


    constructor(firstName: string, lastName: string, age: number) {
        this.id = uuid();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        
    }
}