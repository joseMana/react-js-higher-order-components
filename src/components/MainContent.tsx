import React, { PropsWithChildren } from 'react';


type Props = {
    content: () => React.ReactNode
}


const MainContent: React.FC<PropsWithChildren<Props>> = (props) => {
    return <section className="content"> 
            {props.content()}
        </section>
}

export default MainContent;