
import React, { ComponentType } from 'react';

type WithGreenBackgroundProps = {
    style?: React.CSSProperties
}

export const withGreenBackground =
    <P extends WithGreenBackgroundProps>(Component: ComponentType<P>) => {

    const greenStyle = {
        style: {
           backgroundColor: "lightgreen" 
        }
    }

    const WrappedComponent: React.FC<P> = (props) => {
        const newProps = { ...props, ...greenStyle };
        return <Component {...newProps}/>
    }

    return WrappedComponent;
    
}