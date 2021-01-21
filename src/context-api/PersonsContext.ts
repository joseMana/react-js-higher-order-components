import React from 'react';
import Person from '../models/Person';

type PersonContextProps = {
    persons: Person[]
}

export const PersonsContext = React.createContext<PersonContextProps>(
    {
        persons: []
    }
);