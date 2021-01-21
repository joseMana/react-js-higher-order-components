import React from 'react';
import { withGreenBackground } from './GreenBackground';

type Props = {
    value: string;
    style?: React.CSSProperties
}

const Label: React.FC<Props> = (props) => {
    return <div style={props.style}>
        {props.value}
    </div>
}

export default Label;
export const GreenLabel = withGreenBackground(Label);