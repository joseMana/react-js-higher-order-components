import React, { useContext } from "react";
// import Person from "../../models/Person";
import { PersonsContext } from "../../context-api/PersonsContext";
import { ThemeContext } from "../../context-api/ThemeContext";

// type Props = {
//     persons: Person[];
// }

const PersonCounter: React.FC = () => {

    const {persons} = useContext(PersonsContext);
    const {textColor, backgroundColor} = useContext(ThemeContext);
    // const context = useContext(PersonsContext);
    // console.log(context);

    return <div>
        Person count: <b>{persons.length}</b>
        Text Color: <b>{textColor}</b>
        Background Color: <b>{backgroundColor}</b>

    </div>
}

export default PersonCounter;