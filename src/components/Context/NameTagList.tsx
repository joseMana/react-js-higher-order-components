import React, { useContext } from 'react';
import NameTag from './NameTag';
import Person from '../../models/Person';
import { PersonsContext } from '../../context-api/PersonsContext';


type Props = {
    onDeleteClick: (id: string) => void,
    // persons: Person[];
}

const NameTagList: React.FC<Props> = (props) => {
    const {onDeleteClick} = props;
    const {persons} = useContext(PersonsContext);

    return <div>
        {
            persons.map((p: Person ) => {
                return <NameTag
                    person={p}
                    onDeleteClick={onDeleteClick}
                    key={p.id}
                 />
            })
        }
        
    </div>
}

export default NameTagList;